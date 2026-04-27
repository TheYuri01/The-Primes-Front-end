const precos = {
    basic: {mensal: 19.90, anual: 0},
    pro: {mensal: 39.90, anual: 0},
    family: {mensal: 59.90, anual: 0}
}

Object.keys(precos).forEach(plano=> {
    precos[plano]['anual'] = Math.floor(precos[plano]['mensal'] * 0.8) + 0.90;
});

let mensal = true;

function alternarPrecoBotoes() {
    mensal = !mensal;
    const periodo = mensal ? 'mês' : 'mês(cobrado anualmente) ';
    ['basic', 'pro', 'family'].forEach(plano => {
        const valor = precos[plano][mensal ? 'mensal' : 'anual'];
        document.getElementById(`price-${plano}`).innerText = `R$ ${valor.toFixed(2).replace('.', ',')} / ${periodo}`;
        const tooglebtn = document.querySelector(`.subscription-btn-${plano}`);
        tooglebtn.innerText = mensal ? `Assinar ${plano} Mensal` : `Assinar ${plano} Anual(20% de desconto!)`;
    });
}

/* Botões de direcionar para os planos */
const botoes = document.querySelectorAll(".sign-btn");
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const secaoPlanos = document.querySelector(".plans-container");
        secaoPlanos.scrollIntoView({behavior: "smooth"});
    });
});


const carrossel = document.querySelector('.catalog');
function scrollL() {
    carrossel.scrollBy({left: - 100, behavior: 'smooth'});
}
function scrollR() {
    carrossel.scrollBy({left: 100, behavior: 'smooth'});
}

// Animação de digitação para o texto do banner

const el = document.getElementById("typewriter");
const texto = el.innerText;
el.innerText = "";

let i = 0;
(function digitar() {
  if (i <= texto.length) {
    el.innerText = texto.slice(0, i++);
    // Pausa dinâmica: se for um espaço ou pontuação, demora mais.
    setTimeout(digitar, Math.random() * 20 + 50);
  }
})();
