// Dados do Slider (Permite trocar cores, títulos e imagens dinamicamente)
const slides = [
    {
        bgTitle: "3D SHAPE",
        productTitle: "TOONHUB FIGURINES",
        description: "The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now.",
        bgColor: "#d881a7",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    },
    {
        bgTitle: "NEON TOON",
        productTitle: "CYBERPUNK EDITION",
        description: "Futuristic 3D assets crafted with precision. High detail textures and dynamic rendering ready for modern interactive experiences.",
        bgColor: "#5b8cdd",
        image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80"
    },
    {
        bgTitle: "VIBE ART",
        productTitle: "LIMITED COLLECTOR",
        description: "Handcrafted digital sculptures. Each piece is unique with premium shading, vibrant colors, and smooth geometry.",
        bgColor: "#50b987",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    }
];

let currentIndex = 0;

// Seleção de elementos do DOM
const bgTitleEl = document.getElementById("bg-title");
const productTitleEl = document.getElementById("product-title");
const productDescEl = document.getElementById("product-desc");
const mainImageEl = document.getElementById("main-image");
const cardContainer = document.querySelector(".card-container");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

// Função para atualizar o slide com transição suave
function updateSlide(index) {
    const data = slides[index];

    // Transição de opacidade para simular animação
    mainImageEl.style.opacity = "0";
    mainImageEl.style.transform = "scale(0.9)";
    bgTitleEl.style.opacity = "0";

    setTimeout(() => {
        bgTitleEl.textContent = data.bgTitle;
        productTitleEl.textContent = data.productTitle;
        productDescEl.textContent = data.description;
        mainImageEl.src = data.image;
        cardContainer.style.background = data.bgColor;

        mainImageEl.style.opacity = "1";
        mainImageEl.style.transform = "scale(1)";
        bgTitleEl.style.opacity = "0.95";
    }, 250);
}

// Event Listeners
btnNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
});

btnPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
});
