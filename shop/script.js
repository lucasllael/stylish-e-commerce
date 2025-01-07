document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.header-menu').classList.toggle('menu-active');
});

document.querySelector('.close_btn').addEventListener('click', function() {
    document.querySelector('.header-menu').classList.remove('menu-active');
});


