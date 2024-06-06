import nextData from '../data/shows_next.json' assert { type: "json" };
import pastData from '../data/shows_past.json' assert { type: "json" };

const nextWrapper = document.querySelector('.ShowsNext');
const pastWrapper = document.querySelector('.ShowsPast');

let nextHandler = '';
let pastHandler = '';

nextData.forEach(show => {
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

pastData.forEach(show => {
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