const disksData = [
  {
    id: 1,
    title: 'Ahora Sí',
    type: 'EP',
    link: 'https://open.spotify.com/album/3wrGhY0XAsaIpcvCINMkqF?si=2VMddGfmTKGwL3dzpiGLZQ',
    image:
      'https://raw.githubusercontent.com/AgustinBraco/lucas_fridman/main/public/disks/disk_1.jpeg',
  },
  {
    id: 1,
    title: 'Baila Igual',
    type: 'Single',
    link: 'https://open.spotify.com/album/3UuM4CuJUexiwHcPMJvuGF?si=N6DoFgesR22faWvwsuNvYw',
    image:
      'https://raw.githubusercontent.com/AgustinBraco/lucas_fridman/main/public/disks/disk_2.jpeg',
  },
  {
    id: 1,
    title: 'Fuera del Umbral',
    type: 'Albúm',
    link: 'https://open.spotify.com/album/0u99H0xHgN9mocD1xTmGfN?si=CV2byvLqS8KZ9ta1drm8oQ',
    image:
      'https://raw.githubusercontent.com/AgustinBraco/lucas_fridman/main/public/disks/disk_3.jpeg',
  },
];

const disksWrapper = document.querySelector('.DisksWrapper');

let disksHandler = '';

disksData.forEach(disk => {
  disksHandler += `
    <div class="DiskWrapper">
      <img class="DiskImage"  src="${disk.image}" alt="imagen">
      <p class="DiskTitle" >${disk.title}</p>
      <p class="DiskType" >${disk.type}</p>
      <a href="${disk.link}" class="DiskLink" target="_blank">Escuchar →</a>
    </div>
  `;
});

disksWrapper.innerHTML = disksHandler;
