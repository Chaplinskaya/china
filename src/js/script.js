
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
   //$('[data-modal=consultation]').on('click', function() {
      //$('.modal, #consultant').fadeIn('slow');
   //});
   //$('.modal__close').on('click', function() {
       //$('#consultant, #thanks').fadeOut('slow');
   //});

   $('.questions__container-form form').validate({
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
   $('#consultation-form form').validate({
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

   $('#consultation-form form').validate({
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

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');
          //modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        //modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        //clearInterval(modalTimerId);
    }
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        //modal.classList.toggle('show');
        document.body.style.overflow = '';
    }
    //modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });
    //Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'images/form/spinner.svg',
        success: 'Спасибо! Мы скоро с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            `;
            //form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            //request.setRequestHeader('Content-type', 'multipart/form-data');
            const formData = new FormData(form);
            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });
            const json = JSON.stringify(object);
            request.send(json);
            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    showTanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                } else {
                    showTanksModal(message.failure);
                }
            });
        });
    }
    function showTanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal();
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div data-close class="modal__close">&times;</div>
            <div class="modal__subtitle">${message}</div>
        </div>
    `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();
        //prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeModal();
    }, 3000);
    }
});
