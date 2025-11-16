// For scrolling to stock
function scrollToStock() {
  document.getElementById("stock").scrollIntoView({ behavior: "smooth" });
}

// ---- IMAGE POPUP GALLERY ---- //

let currentIndex = 0;
let images = [];

// Open popup
function openPopup(imgArray, index) {
  images = imgArray;
  currentIndex = index;

  document.getElementById("imagePopup").style.display = "flex";
  updatePopupImage();
  loadThumbnails();
}

// Close popup
function closePopup() {
  document.getElementById("imagePopup").style.display = "none";
}

// Change main image
function changeImage(step) {
  currentIndex += step;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  updatePopupImage();
}

// Update main image
function updatePopupImage() {
  document.getElementById("mainPopupImage").src = images[currentIndex];
}

// Load thumbnails
function loadThumbnails() {
  const container = document.getElementById("thumbnailContainer");
  container.innerHTML = "";

  images.forEach((img, i) => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.onclick = () => {
      currentIndex = i;
      updatePopupImage();
    };
    container.appendChild(thumb);
  });
}
