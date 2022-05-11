// JOGO LABIRINTO

function criarElemento(nome, local, classe, id) {
  const tagNome = document.createElement(nome);
  const onde = document.querySelector(local);

  if ([!classe, !id].every((i) => !i)) {
    tagNome.classList.add(classe);
    tagNome.id = id;
  } else if (!classe) {
    tagNome.id = id;
  } else if (!id) {
    tagNome.classList.add(classe);
  }
  onde.appendChild(tagNome);
  console.log(onde);
  return tagNome;
}

const emoji = criarElemento("div", "body", undefined, "box");

let boxCima = 25;
let boxEsquerda = 0;

function moverEmoji(event) {
  if (event.key == "ArrowDown") {
    boxCima += 5;
  } else if (event.key == "ArrowUp") {
    boxCima -= 5;
  } else if (event.key == "ArrowRight") {
    boxEsquerda += 5;
  } else if (event.key == "ArrowLeft") {
    boxEsquerda -= 5;
  }

  emoji.style.top = `${boxCima}px`;
  emoji.style.left = `${boxEsquerda}px`;
}

document.addEventListener("keydown", moverEmoji);
