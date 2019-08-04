// add event listener for when key is pressed down
window.addEventListener('keydown', function(e) {
  // check if audio exists for key
  const audio = document.querySelector(`audio[data-key='${e.keyCode}'`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if not a transform
  console.log(e.propertyName);
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});

// only display keyboard when on small device (assume mobile)

if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i)
) {
  document.getElementById(
    'change'
  ).innerHTML = `<h1 style='font-size: 50px; color: white;'>Must use a device with a keyboard.</h1>`;
}
