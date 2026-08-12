/* 
   PROTOCOLO DE INTERAÇÃO ULTRA-PREMIUM
   SISTEMA DE REDIRECIONAMENTO EXECUTIVO
*/

// 1. Banco de Dados das Coleções e Seus Respectivos Links de Compra
const colecoes_de_luxo = [
    {
        titulo: "SOMENTE ROUPAS PREMIUM",
        descricao: "Curadoria exclusiva de alta alfaiataria urbana, peças numeradas e pratas de lei. Peças selecionadas sob demanda para o mais alto escalão. Descubra o extraordinário.",
        // SUBSTITUA pelo link do seu produto ou do seu WhatsApp abaixo:
        link_compra: "https://wa.me/5562981866554"
    },
    {
        titulo: "BONÉS STRAPBACK ELITE",
        descricao: "Cápsula exclusiva com tecidos tecnológicos importados, aba moldada e acabamento feito à mão. Cada item carrega um número de série único de autenticidade.",
        // SUBSTITUA pelo link do seu produto ou do seu WhatsApp abaixo:
        link_compra: "https://wa.me/5562981866554"
    },
    {
        titulo: "CORRENTE DE PRATA 925 GELO",
        descricao: "Correntes e braceletes maciços fundidos em prata de lei com elos lapidados individualmente. O design minimalista que define o topo da cultura streetwear global.",
        // SUBSTITUA pelo link do seu produto ou do seu WhatsApp abaixo:
        link_compra: "https://wa.me/5562981866554"
    }
];

// 2. Seleção dos Elementos do HTML
const elementoTitulo = document.getElementById('product-title');
const elementoDescricao = document.getElementById('product-desc');
const btnVoltar = document.getElementById('btn-prev');
const btnAvancar = document.getElementById('btn-next');
const linkFazerParte = document.querySelector('.cta-link');

let indiceAtual = 0;

// 3. Função para Atualizar os Textos na Tela
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

// 4. Lógica dos Botões de Navegação (Setas)
btnAvancar.addEventListener('click', () => {
    indiceAtual++;
    if (indiceAtual >= colecoes_de_luxo.length) {
        indiceAtual = 0;
    }
    atualizarInterface();
});

btnVoltar.addEventListener('click', () => {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = colecoes_de_luxo.length - 1;
    }
    atualizarInterface();
});

// 5. Ação Inteligente de Compra (VENHA FAZER PARTE)
linkFazerParte.addEventListener('click', (e) => {
    e.preventDefault(); // Impede travamento da página
    
    // Captura o link de compra exato do produto que está ativo na tela
    const urlDestino = colecoes_de_luxo[indiceAtual].link_compra;
    
    // Executa o redirecionamento abrindo em uma nova aba de forma limpa
    window.open(urlDestino, '_blank');
});
