window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
          menulist = document.querySelector('.menu__list'),
          menuitem = document.querySelectorAll('.menu__item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menulist.classList.toggle('menu__list_active');
    });
    menuitem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menulist.classList.toggle('menu__list_active');
        });
    });
});