const intro = document.getElementById('intro');
const introVideo = document.getElementById('introVideo');
const startBtn = document.getElementById('startBtn');
const map = document.getElementById('mapContainer');

startBtn.onclick = () => {
  startBtn.style.display = 'none';
  introVideo.style.display = 'block';
  introVideo.play();
};

introVideo.onended = () => {
  intro.style.display = 'none';
  map.style.display = 'block';
};

function openVideo(src, title, desc) {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('heroVideo');

  document.getElementById('videoTitle').textContent = title;
  document.getElementById('videoDesc').textContent = desc;

  video.src = src;
  modal.style.display = 'flex';
  video.play();

  video.onended = closeVideo;
}

function closeVideo() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('heroVideo');
  video.pause();
  video.src = '';
  modal.style.display = 'none';
}
