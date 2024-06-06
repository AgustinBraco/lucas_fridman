import disksData from '../data/disks.json' assert { type: "json" };

const disksWrapper = document.querySelector('.DisksWrapper');

let disksHandler = '';

disksData.forEach(disk => {
  disksHandler += `
    <div class="DiskWrapper">
      <img class="DiskImage"  src="${disk.image}" alt="flyer">
      <p class="DiskTitle" >${disk.title}</p>
      <p class="DiskType" >${disk.type}</p>
      <a href="${disk.link}" class="DiskLink" target="_blank">Escuchar →</a>
    </div>
  `;
});

disksWrapper.innerHTML = disksHandler;