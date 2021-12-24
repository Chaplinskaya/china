
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

   //Modal
   
   $('[data-modal=consultation]').on('click', function() {
       $('.overlay, #consultant').fadeIn('slow');
   });
   $('.modal__close').on('click', function() {
       $('.overlay, #consultant, #thanks').fadeOut('slow');
   });

   $('#consultant form').validate( {
       rules: {
           name: 'required',
           phone: 'required',
           email: {
               required: true,
               email: true
            }
       },
       messages: {
        name: "Пожалуйста, введите свое имя",
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
   }); 

   $('#questions form').validate( {
    rules: {
        name: 'required',
        phone: 'required',
        email: {
            required: true,
            email: true
         }
    },
    messages: {
     name: "Пожалуйста, введите свое имя",
     phone: "Пожалуйста, введите свой номер телефона",
     email: {
       required: "Пожалуйста, введите свою почту",
       email: "Неправильно введен адрес почты"
     }
   }
}); 
});