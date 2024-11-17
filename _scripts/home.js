// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling effect
const links = document.querySelectorAll('.navbar__link');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche le comportement par défaut
        const targetId = this.getAttribute('href'); // Récupère l'attribut href
        const targetElement = document.querySelector(targetId); // Trouve l'élément cible
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Défilement doux
    });
});

function slideLeft() {
    document.querySelector('.movies-container').scrollBy({left : -200,behavior: "smooth" });
}

function scrollRight() {
    document.querySelector('.movies-container').scrollBy({ left: 200, behavior: 'smooth' });
}



