document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navbar = document.getElementById('navbar');
    
    // 1. Alterna o menu mobile ao clicar no botão
    menuButton.addEventListener('click', function() {
        // Adiciona ou remove a classe 'active' para mostrar/esconder o menu
        navbar.classList.toggle('active'); 
        
        // Atualiza o atributo aria-expanded para acessibilidade
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
        menuButton.setAttribute('aria-expanded', !isExpanded);
    });

    // 2. Fecha o menu ao clicar em um link interno (útil no mobile)
    const navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // **Dica para Animações com Scroll (opcional)**
    // Se quiser adicionar animações quando o usuário rolar para as seções:
    // Exemplo:
    // const sections = document.querySelectorAll('section');
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('visible');
    //         }
    //     });
    // }, { threshold: 0.2 });

    // sections.forEach(section => {
    //     observer.observe(section);
    // });
});