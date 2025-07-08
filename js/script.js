const triggerButton = document.getElementById('trigger-button');
const calmContainer = document.getElementById('calm-container');
const screamerContainer = document.getElementById('screamer-container');
const screamerVideo = document.getElementById('screamer-video');
const calmMusic = document.getElementById('calm-music');

triggerButton.addEventListener('click', () => {
    // Start calm music quietly
    calmMusic.volume = 0.2;
    calmMusic.play();

    // Set a timeout for the screamer
    setTimeout(() => {
        const docEl = document.documentElement;

        // Request fullscreen
        if (docEl.requestFullscreen) {
            docEl.requestFullscreen();
        } else if (docEl.mozRequestFullScreen) { /* Firefox */
            docEl.mozRequestFullScreen();
        } else if (docEl.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            docEl.webkitRequestFullscreen();
        } else if (docEl.msRequestFullscreen) { /* IE/Edge */
            docEl.msRequestFullscreen();
        }

        // Stop calm music
        calmMusic.pause();
        calmMusic.currentTime = 0;

        // Hide calm content and show screamer
        calmContainer.style.opacity = '0';
        setTimeout(() => {
            calmContainer.style.display = 'none';
            screamerContainer.style.display = 'flex';
            
            // Play video with sound
            screamerVideo.muted = false;
            screamerVideo.play();
        }, 500); // Short delay for visual transition

    }, 1000); // 1-second delay before the screamer hits
});