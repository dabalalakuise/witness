const baseURL = 'https://azurevoice.com/';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/witness/public/service-worker.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.log('Service Worker registration failed:', error);
        });
}

function syncPlay(audioId, videoId) {
    const audio = document.getElementById(audioId);
    const video = document.getElementById(videoId);

    audio.addEventListener('play', () => {
        video.play();
    });

    audio.addEventListener('pause', () => {
        video.pause();
    });

    audio.addEventListener('seeked', () => {
        video.currentTime = audio.currentTime;
    });

    video.addEventListener('seeked', () => {
        audio.currentTime = video.currentTime;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    syncPlay('audio1', 'video1');
    syncPlay('audio2', 'video2');
    syncPlay('audio3', 'video3');
    syncPlay('audio4', 'video4');
    syncPlay('audio5', 'video5');
});

function openLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.add('hidden');
}

function sendMagicLink() {
    const email = document.getElementById('email').value;
    alert(`Magic login link sent to ${email}`);
    closeLoginModal();
}

function resetPassword() {
    const email = document.getElementById('email').value;
    alert(`Password reset link sent to ${email}`);
    closeLoginModal();
}
