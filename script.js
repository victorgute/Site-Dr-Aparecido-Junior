// Inicializa os ícones Lucide
lucide.createIcons();

// Lógica para o menu mobile
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

// Animação por rolagem (Intersection Observer) para múltiplos elementos
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os elementos que devem ser animados ao rolar
    const animatedElements = document.querySelectorAll('.animate-fade-in-up, .depoimento-item');

    // Define as opções do observador
    const observerOptions = {
        threshold: 0.2, // Ativa a animação quando 20% do elemento estiver visível
    };

    // Cria o observador
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para todos os elementos que entrarem na tela
                entry.target.classList.add('visible');
            } else {
                // Remove a classe 'visible' quando saem da tela
                // Removi o comentário para que a animação de "sair" funcione
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    // Adiciona uma classe de estado inicial para os elementos antes de serem observados
    animatedElements.forEach(element => {
        element.classList.add('animation-target');
        observer.observe(element);
    });
});