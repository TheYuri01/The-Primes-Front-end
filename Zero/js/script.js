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
    const periodo = mensal ? 'mês' : 'ano';
    ['basic', 'pro', 'family'].forEach(plano => {
        const valor = precos[plano][mensal ? 'mensal' : 'anual'];
        document.getElementById(`price-${plano}`).innerText = `R$ ${valor.toFixed(2).replace('.', ',')} / ${periodo}`;
        const tooglebtn = document.querySelector(`.subscription-btn-${plano}`);
        tooglebtn.innerText = mensal ? `Assinar ${plano} Mensal` : `Assinar ${plano} Anual(20% de desconto!)`;
    })}

const botaoAssinar = document.querySelector(".nav-subscription-btn");
botaoAssinar.addEventListener("click", () => {
    const secaoPlanos = document.querySelector(".plans-container");
    secaoPlanos.scrollIntoView({behavior: "smooth"});
})
