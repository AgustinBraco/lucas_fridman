const galleryWrapper = document.querySelector('.GalleryWrapper');

let galleryHandler = '';
let length = 33;

for (let i = 1; i <= length; i++) {
  galleryHandler += `
    <div class="GalleryImageWrapper ImageWrapper${i}">
      <img class="GalleryImage Image${i}" src="public/gallery/gallery_${i}.jpg" alt="imagen">
    </div>
  `;
}

galleryWrapper.innerHTML = galleryHandler;

for (let i = 1; i <= length; i++) {
  const imageWrapper = document.querySelector(`.ImageWrapper${i}`);
  const image = document.querySelector(`.Image${i}`);

  imageWrapper.addEventListener('click', () => {
    if (imageWrapper.classList.contains('wrapperFull')) {
      imageWrapper.classList.remove('wrapperFull');
      image.classList.remove('imageFull');
      return;
    };
    imageWrapper.classList.add('wrapperFull');
    image.classList.add('imageFull');
  });
};