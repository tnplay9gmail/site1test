document.querySelector('.scroll-down').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('main').scrollIntoView({
        behavior: 'smooth'
    });
});