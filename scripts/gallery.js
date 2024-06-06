const galleryWrapper = document.querySelector('.GalleryWrapper');

let galleryHandler = '';

for (let i = 1; i <= 33; i++)
  galleryHandler += `
    <div class="GalleryImageWrapper">
      <img class="GalleryImage" src="/public/gallery/gallery_${i}.jpg" alt="imagen">
    </div>
  `;

galleryWrapper.innerHTML = galleryHandler;
