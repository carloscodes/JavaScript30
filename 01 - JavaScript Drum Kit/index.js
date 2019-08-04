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
if (window.outerWidth <= 1024) {
  let Keyboard = window.SimpleKeyboard.default;

  let keyboard = new Keyboard({
    onChange: input => onChange(input),
    onKeyPress: button => onKeyPress(button)
  });

  /**
   * Update simple-keyboard when input is changed directly
   */
  document.querySelector('.input').addEventListener('input', event => {
    keyboard.setInput(event.target.value);
  });

  console.log(keyboard);

  function onChange(input) {
    document.querySelector('.input').value = input;
    console.log('Input changed', input);
  }

  function onKeyPress(button) {
    console.log('Button pressed', button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === '{shift}' || button === '{lock}') handleShift();
  }

  function handleShift() {
    let currentLayout = keyboard.options.layoutName;
    let shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

    keyboard.setOptions({
      layoutName: shiftToggle
    });
  }
}
