// Sample video data
const videos = {
    termux: [
        { title: 'Introduction à Termux', description: 'Apprenez les bases de Termux' },
        { title: 'Installation des packages', description: 'Comment installer et gérer les packages dans Termux' },
        { title: 'Commandes avancées', description: 'Utilisation avancée de Termux' }
    ],
    hacking: [
        { title: 'Sécurité informatique', description: 'Introduction à la sécurité informatique' },
        { title: 'Analyse de vulnérabilités', description: 'Comment identifier les failles de sécurité' },
        { title: 'Protection des données', description: 'Méthodes de protection des données' }
    ],
    reseau: [
        { title: 'Bases des réseaux', description: 'Comprendre les fondamentaux des réseaux' },
        { title: 'Configuration réseau', description: 'Comment configurer un réseau' },
        { title: 'Dépannage réseau', description: 'Résolution des problèmes réseau courants' }
    ]
};

// Burger menu functionality
document.getElementById('burger-menu').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('visible');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const burgerMenu = document.getElementById('burger-menu');
    
    if (!menu.contains(event.target) && !burgerMenu.contains(event.target)) {
        menu.classList.remove('visible');
    }
});

// Handle category selection
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const category = this.getAttribute('data-category');
        displayVideos(category);
        
        // Close menu after selection
        document.getElementById('menu').classList.remove('visible');
        
        // Update heading
        document.querySelector('#video-display h2').textContent = 
            category.charAt(0).toUpperCase() + category.slice(1);
    });
});

// Display videos for selected category
function displayVideos(category) {
    const videoContainer = document.getElementById('videos');
    videoContainer.innerHTML = '';
    
    videos[category].forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video-card';
        videoElement.innerHTML = `
            <div class="video-thumbnail"></div>
            <h3>${video.title}</h3>
            <p>${video.description}</p>
        `;
        
        // Add click event to show video details
        videoElement.addEventListener('click', () => {
            alert(`Lecture de la vidéo : ${video.title}`);
            // Here you would typically implement video playback functionality
        });
        
        videoContainer.appendChild(videoElement);
    });
}

// Display default category on load
window.addEventListener('load', () => {
    displayVideos('termux');
});
