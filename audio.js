// Background Audio
const audio = document.getElementById('bgAudio');
audio.volume = 0;

document.getElementById('toggleButton').addEventListener('click', function () {
    var icon = document.getElementById('toggleIcon');

    if (icon.classList.contains('bi-volume-up-fill')) {
        icon.classList.remove('bi-volume-up-fill');
        icon.classList.add('bi-volume-mute-fill');
        audio.volume = 0;

    } else {
        icon.classList.remove('bi-volume-mute-fill');
        icon.classList.add('bi-volume-up-fill');
        audio.volume = 0.1;
    }
});

