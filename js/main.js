const teclas = document.querySelectorAll('.tecla');
const listaAudio = document.querySelectorAll('audio');
function TocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  !elemento ? console.log('Elemento não encontrado') : '';
  elemento.localName === 'audio'
    ? elemento.play() && console.log(elemento)
    : '';
}

for (let i = 0; i <= teclas.length; i++) {
  1;
  const tecla = teclas[i];
  const audio = listaAudio[i];
  const idAudio = `#som_${tecla.classList[1]}`;

  // tecla.addEventListener("click", e =>  audio.play())

  tecla.addEventListener('keydown', (e) =>
    e.code === 'Enter' || e.code === 'Space'
      ? tecla.classList.add('ativa') &&
        tecla.addEventListener('click', (e) => audio.play())
      : ''
  );
  tecla.onclick = function () {
    TocaSom(idAudio);
  };
  tecla.addEventListener('keyup', (e) => tecla.classList.remove('ativa'));
}

// const pom = document.querySelector(".tecla_pom");
// const clap = document.querySelector(".tecla_clap");
// const tim = document.querySelector(".tecla_tim");
// const puff = document.querySelector(".tecla_puff");
// const splash = document.querySelector(".tecla_splash");
// const toim = document.querySelector(".tecla_toim");
// const psh = document.querySelector(".tecla_psh");
// const tic = document.querySelector(".tecla_tic");
// const tom = document.querySelector(".tecla_tom");

// const som_tecla_pom = document.querySelector("#som_tecla_pom");
// const som_tecla_clap = document.querySelector("#som_tecla_clap");
// const som_tecla_tim = document.querySelector("#som_tecla_tim");
// const som_tecla_puff = document.querySelector("#som_tecla_puff");
// const som_tecla_splash = document.querySelector("#som_tecla_splash");
// const som_tecla_toim = document.querySelector("#som_tecla_toim");
// const som_tecla_psh = document.querySelector("#som_tecla_psh");
// const som_tecla_tic = document.querySelector("#som_tecla_tic");
// const som_tecla_tom = document.querySelector("#som_tecla_tom");

// pom.addEventListener("click", e => som_tecla_pom.play());
// clap.addEventListener("click", e => som_tecla_clap.play());
// tim.addEventListener("click", e=> som_tecla_tim.play());
// puff.addEventListener("click", e=> som_tecla_puff.play());
// splash.addEventListener("click", e=> som_tecla_splash.play());
// toim.addEventListener("click", e=> som_tecla_toim.play());
// psh.addEventListener("click", e=> som_tecla_psh.play());
// tic.addEventListener("click", e=> som_tecla_tic.play());
// tom.addEventListener("click", e=> som_tecla_tom.play());
