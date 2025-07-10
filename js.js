// Highlight link aktif saat scroll
const sections = document.querySelectorAll("main > section");
const navLinks = document.querySelectorAll(".nav-link");

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

const wrapper = document.querySelector('#section-tentang .cards-wrapper');
document.querySelector('.scroll-btn.left')
        .addEventListener('click', ()=>wrapper.scrollBy({left:-300,behavior:'smooth'}));
document.querySelector('.scroll-btn.right')
        .addEventListener('click', ()=>wrapper.scrollBy({left: 300,behavior:'smooth'}));
