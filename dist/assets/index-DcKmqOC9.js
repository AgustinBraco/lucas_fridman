(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function m(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=m(t);fetch(t.href,s)}})();const l=document.getElementById("Audio"),a=document.getElementById("Player"),r=document.getElementById("PlayerIcon");l.volume=.1;const n=()=>{l.play(),a.classList.add("Play"),a.classList.remove("Pause"),r.classList.add("Play"),r.classList.remove("Pause"),sessionStorage.setItem("isPlaying","true")},g=()=>{l.pause(),a.classList.add("Pause"),a.classList.remove("Play"),r.classList.add("Pause"),r.classList.remove("Play"),sessionStorage.setItem("isPlaying","false")};a.addEventListener("click",()=>{r.classList.contains("Pause")?n():g()});window.addEventListener("beforeunload",()=>sessionStorage.setItem("currentTime",l.currentTime));window.addEventListener("load",()=>{const e=sessionStorage.getItem("isPlaying")==="true",i=parseFloat(sessionStorage.getItem("currentTime"))||0;l.currentTime=i,e&&n()});const y=[{id:1,city:"Rosario",date:"01 de Junio 204",time:"21hs",place:"CEC",image:"public/flyers/01_06_2024.png",link:"https://www.cecrosario.gob.ar/"}],f=[{id:1,city:"Rosario",date:"01 de Junio 2024",time:"21hs",place:"CEC",image:"public/flyers/01_06_2024.png"},{id:2,city:"CABA",date:"23 de Marzo 2024",time:"21hs",place:"CC Matienzo",image:"public/flyers/23_03_2024.png"},{id:3,city:"CABA",date:"13 de Octubre 2023",time:"20hs",place:"La Tangente",image:"public/flyers/13_10_2023.png"}],h=document.querySelector(".ShowsNext"),L=document.querySelector(".ShowsPast");let p="",d="";y.forEach(e=>{p+=`
    <div class="ShowWrapper">
      <img class="ShowImage"  src="${e.image}" alt="flyer">
      <p class="ShowTitle" >${e.city}</p>
      <p class="ShowDate" >${e.date}</p>
      <p class="ShowTime" >${e.time} - ${e.place}</p>
      <a href="${e.link}" class="ShowLink" target="_blank">Entradas →</a>
    </div>
  `});f.forEach(e=>{d+=`
    <div class="ShowWrapper">
      <img class="ShowImage"  src="${e.image}" alt="flyer">
      <p class="ShowTitle" >${e.city}</p>
      <p class="ShowDate" >${e.date}</p>
      <p class="ShowTime" >${e.time} - ${e.place}</p>
    </div>
  `});h.innerHTML=p;L.innerHTML=d;const S=[{id:1,title:"Ahora Sí",type:"EP",link:"https://open.spotify.com/album/3wrGhY0XAsaIpcvCINMkqF?si=2VMddGfmTKGwL3dzpiGLZQ",image:"public/disks/disk_1.jpeg"},{id:1,title:"Baila Igual",type:"Single",link:"https://open.spotify.com/album/3UuM4CuJUexiwHcPMJvuGF?si=N6DoFgesR22faWvwsuNvYw",image:"public/disks/disk_2.jpeg"},{id:1,title:"Fuera del Umbral",type:"Albúm",link:"https://open.spotify.com/album/0u99H0xHgN9mocD1xTmGfN?si=CV2byvLqS8KZ9ta1drm8oQ",image:"public/disks/disk_3.jpeg"}],P=document.querySelector(".DisksWrapper");let u="";S.forEach(e=>{u+=`
    <div class="DiskWrapper">
      <img class="DiskImage"  src="${e.image}" alt="flyer">
      <p class="DiskTitle" >${e.title}</p>
      <p class="DiskType" >${e.type}</p>
      <a href="${e.link}" class="DiskLink" target="_blank">Escuchar →</a>
    </div>
  `});P.innerHTML=u;
