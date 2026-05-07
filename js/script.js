const precos = {
    basic: {mensal: 19.90, anual: 0},
    pro: {mensal: 39.90, anual: 0},
    family: {mensal: 59.90, anual: 0}
}

Object.keys(precos).forEach(plano=> {
    const mensal = precos[plano].mensal;
    const anualTotal = mensal * 12 * 0.8;
    const arredondado = Math.floor(anualTotal / 12) + 0.90;
    precos[plano].anualMensal = arredondado;
    precos[plano].anualTotal = arredondado * 12;
    precos[plano].economia = (mensal * 12) - precos[plano].anualTotal;
});

let mensal = true;

function alternarPrecoBotoes() {
    mensal = !mensal;

    ['basic', 'pro', 'family'].forEach(plano => {

        const priceEl = document.getElementById(`price-${plano}`);
        const extraEl = document.getElementById(`extra-${plano}`);

        if (mensal) {
            priceEl.innerText = `R$ ${precos[plano].mensal.toFixed(2).replace('.', ',')} / mês`;
            extraEl.innerText = "";
        } else {
            priceEl.innerText = `R$ ${precos[plano].anualMensal.toFixed(2).replace('.', ',')} / mês`;

            extraEl.innerHTML = `<span class="total">Total: R$ ${precos[plano].anualTotal.toFixed(2).replace('.', ',')}</span><br><span class="economia">Economia: R$ ${precos[plano].economia.toFixed(2).replace('.', ',')}</span>`;
        }
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


// Carrosel
const scrollers = document.querySelectorAll(".carousel");

if (!window.matchMedia("(prefers-reduce-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach((carousel) => {
        carousel.setAttribute("data-animated", true)

        const scrollerInner = carousel.querySelector('.catalog');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
} 

