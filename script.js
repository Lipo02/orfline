var siteAudio = new Audio('orfline.wav');
siteAudio.loop = true;
siteAudio.volume = 0.7;

document.getElementById('splash').addEventListener('click', function () {
  var splash = this;

  // Play WAV audio on click (browser allows autoplay after user gesture)
  siteAudio.play();

  // Fade out splash
  splash.classList.add('hide');
  setTimeout(function () {
    splash.style.display = 'none';
  }, 800);
});

// Stop/Start music button
var musicBtn = document.getElementById('music-btn');
if (musicBtn) {
  musicBtn.addEventListener('click', function () {
    if (!siteAudio.paused) {
      siteAudio.pause();
      musicBtn.classList.add('stop-mode');
      musicBtn.innerHTML = '<span class="icon">▶️</span> Start Haz';
    } else {
      siteAudio.play();
      musicBtn.classList.remove('stop-mode');
      musicBtn.innerHTML = '<span class="icon">⏹</span> Stop Haz';
    }
  });
}

document.querySelectorAll('.player-photo').forEach(function (img) {
  img.addEventListener('error', function () {
    this.src = 'images/placeholder.svg';
  });
});
