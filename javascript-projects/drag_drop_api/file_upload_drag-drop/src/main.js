const dragZone = classSelector('.drag-zone');
const image = classSelector('.profile_image');
const input = classSelector('.drag-zone__input');
const dragZoneText = classSelector('.drag-zone__text');

['dragover', 'drop', 'dragenter', 'dragleave'].forEach((eventType) => {
  dragZone.addEventListener(eventType, (e) => {
    e.preventDefault();
  });
});

dragZone.addEventListener('click', function (event) {
  input.click();
  input.addEventListener('change', function (event) {
    console.log(event.target.files[0]);
  });
});

dragZone.addEventListener('drop', async function (event) {
  event.target.classList.add('drag-zone--active');

  const file = event.dataTransfer.files[0];
  const files = event.dataTransfer.files;
  console.log(files);

  if (file.type.includes('image/')) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const image = document.createElement('img');
      image.src = event.target.result;
    
      dragZone.innerHTML = '';
      dragZone.append(image);
    };
  } else {
    alert('only image files accepted');
  }
});

dragZone.addEventListener('dragenter', function (event) {
  event.target.classList.add('drag-zone--active');
});
dragZone.addEventListener('dragend', function (event) {
  event.target.classList.remove('drag-zone--active');
});
dragZone.addEventListener('dragleave', function (event) {
  event.target.classList.remove('drag-zone--active');
});

function classSelector(elementClass) {
  return document.querySelector(elementClass);
}
