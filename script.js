/* PROTOCOLO INTERATIVO DG062 */

const colecoes_de_luxo = [
    {
        titulo: "SOMENTE ROUPAS PREMIUM",
        descricao: "Curadoria exclusiva de alta alfaiataria urbana, peças numeradas e pratas de lei. Peças selecionadas sob demanda para o mais alto escalão. Descubra o extraordinário."
    },
    {
        titulo: "BONÉS STRAPBACK ELITE",
        descricao: "Cápsula exclusiva com tecidos tecnológicos importados, aba moldada e acabamento feito à mão. Cada item carrega um número de série único de autenticidade."
    },
    {
        titulo: "CORRENTE DE PRATA 925 GELO",
        descricao: "Correntes e braceletes maciços fundidos em prata de lei com elos lapidados individualmente. O design minimalista que define o topo da cultura streetwear global."
    }
];

const elementoTitulo = document.getElementById('product-title');
const elementoDescricao = document.getElementById('product-desc');
const btnVoltar = document.getElementById('btn-prev');
const btnAvancar = document.getElementById('btn-next');
const linkFazerParte = document.querySelector('.cta-link');

let indiceAtual = 0;

function atualizarInterface() {
    elementoTitulo.style.opacity = '0';
    elementoDescricao.style.opacity = '0';
    
    setTimeout(() => {
        elementoTitulo.innerText = colecoes_de_luxo[indiceAtual].titulo;
        elementoDescricao.innerText = colecoes_de_luxo[indiceAtual].descricao;
        elementoTitulo.style.opacity = '1';
        elementoDescricao.style.opacity = '1';
    }, 250);
}

btnAvancar.addEventListener('click', () => {
    indiceAtual++;
    if (indiceAtual >= colecoes_de_luxo.length) indiceAtual = 0;
    atualizarInterface();
});

btnVoltar.addEventListener('click', () => {
    indiceAtual--;
    if (indiceAtual < 0) indiceAtual = colecoes_de_luxo.length - 1;
    atualizarInterface();
});

// Redirecionamento direto para a página interna
linkFazerParte.addEventListener('click', (e) => {
    e.preventDefault(); 
    window.location.href = "produtos.html";
});
