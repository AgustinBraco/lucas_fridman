const nextData = [
  {
    id: 1,
    city: 'Rosario',
    date: '01 de Junio 204',
    time: '21hs',
    place: 'CEC',
    image: 'public/shows/show_1.png',
    // image:
      // 'https://raw.githubusercontent.com/AgustinBraco/lucas_fridman/main/public/shows/show_1.png',
    link: 'https://www.cecrosario.gob.ar/'
  },
];

const pastData = [
  {
    id: 1,
    city: 'Rosario',
    date: '01 de Junio 2024',
    time: '21hs',
    place: 'CEC',
    image: 'public/shows/show_1.png'
    // image:
      // 'https://raw.githubusercontent.com/AgustinBraco/lucas_fridman/main/public/shows/show_1.png',
  },
  {
    id: 2,
    city: 'CABA',
    date: '23 de Marzo 2024',
    time: '21hs',
    place: 'CC Matienzo',
    image: 'public/shows/show_2.png'
    // image:
      // 'https://raw.githubusercontent.com/AgustinBraco/lucas_fridman/main/public/shows/show_2.png',
  },
  {
    id: 3,
    city: 'CABA',
    date: '13 de Octubre 2023',
    time: '20hs',
    place: 'La Tangente',
    image: 'public/shows/show_3.png'
    // image:
      // 'https://raw.githubusercontent.com/AgustinBraco/lucas_fridman/main/public/shows/show_3.png',
  },
];

const nextWrapper = document.querySelector('.ShowsNext');
const pastWrapper = document.querySelector('.ShowsPast');

let nextHandler = '';
let pastHandler = '';

nextData.forEach((show) => {
  nextHandler += `
    <div class="ShowWrapper">
      <img class="ShowImage"  src="${show.image}" alt="imagen">
      <p class="ShowTitle" >${show.city}</p>
      <p class="ShowDate" >${show.date}</p>
      <p class="ShowTime" >${show.time} - ${show.place}</p>
      <a href="${show.link}" class="ShowLink" target="_blank">Entradas →</a>
    </div>
  `;
});

pastData.forEach((show) => {
  pastHandler += `
    <div class="ShowWrapper">
      <img class="ShowImage"  src="${show.image}" alt="imagen">
      <p class="ShowTitle" >${show.city}</p>
      <p class="ShowDate" >${show.date}</p>
      <p class="ShowTime" >${show.time} - ${show.place}</p>
    </div>
  `;
});

nextWrapper.innerHTML = nextHandler;
pastWrapper.innerHTML = pastHandler;
