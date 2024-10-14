
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');

volumeSlider.addEventListener('input', function() {
    volumeValue.textContent = volumeSlider.value;
});
