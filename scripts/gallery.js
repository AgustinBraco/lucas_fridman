const galleryWrapper = document.querySelector('.GalleryWrapper');

let galleryHandler = '';
let length =  33;

for (let i = 1; i <= length; i++)
  galleryHandler += `
    <div class="GalleryImageWrapper">
      <img class="GalleryImage" src="public/gallery/gallery_${i}.jpg" alt="imagen">
    </div>
  `;

galleryWrapper.innerHTML = galleryHandler;
