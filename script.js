function upDate(previewPic) {
  console.log("Event triggered:", previewPic.alt);

  // Обновляем текст и фон
  const imageDiv = document.getElementById('image');
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  const imageDiv = document.getElementById('image');
  imageDiv.innerHTML = "Hover over an image or focus with keyboard to display here.";
  imageDiv.style.backgroundImage = "none";
}

// Добавление tabindex для всех изображений автоматически
function addTabIndex() {
  console.log("Page loaded, adding tabindex to all images");
  const images = document.querySelectorAll('.thumbnails img');
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('tabindex', '0');
  }
}