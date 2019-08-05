const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const pictures = [
  'https://source.unsplash.com/7bwQXzbF6KE/800x500',
  'https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_960_720.jpg',
  'http://shoppopgallery.com/wp-content/uploads/2019/06/download-nature-wallpapers-hd-the-most-stunning-images-on-present-he-magnificient-9.jpg',
  'https://cdn.pixabay.com/photo/2013/05/12/18/55/balance-110850_960_720.jpg'
];

const pic = document.querySelector('img');

const chk = document.querySelectorAll('#check');

function checkMe() {
  if (this.checked) {
    if (this.value == 0) {
      pic.src = pictures[0];
    } else if (this.value == 1) {
      pic.src = pictures[1];
    } else if (this.value == 2) {
      pic.src = pictures[2];
    }
  } else {
    pic.src = pictures[3];
  }
}

chk.forEach(box => box.addEventListener('change', checkMe));
