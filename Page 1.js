document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const discordLink = document.getElementById('discord-link');
    const twitterLink = document.getElementById('twitter-link');
    const youtubeLink = document.getElementById('youtube-link');
     const logo = document.getElementById('logo');

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('night-mode');
        document.body.classList.toggle('day-mode');

        // Basculer les classes et le texte des boutons
        function toggleButtonClassAndText(button, dayText, nightText) {
            if (button.classList.contains('btn-outline-light')) {
                button.classList.remove('btn-outline-light');
                button.classList.add('btn-outline-dark');
                button.textContent = nightText;
            } else {
                button.classList.remove('btn-outline-dark');
                button.classList.add('btn-outline-light');
                button.textContent = dayText;
            }
        }

        toggleButtonClassAndText(themeToggle, 'Nuit ', 'Jour ');
        toggleButtonClassAndText(discordLink, 'Discord ', 'Discord ');
        toggleButtonClassAndText(twitterLink, 'Twitter ', 'Twitter ');
        toggleButtonClassAndText(youtubeLink, 'YouTube ', 'YouTube ');
    });
});