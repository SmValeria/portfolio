;(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const openMobileMenuButton = document.querySelector('.header__hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const closeMobileMenuButton = mobileMenu.querySelector('.mobile-menu__hamburger');
        openMobileMenuButton.addEventListener('click', function (evt) {
            evt.preventDefault();
            mobileMenu.classList.add('active');
        });
        mobileMenu.addEventListener('click', function (evt) {
            evt.preventDefault();

            if(evt.target === closeMobileMenuButton ||
                evt.target.closest('.hamburger')) {
                mobileMenu.classList.remove('active');
            }
            if(evt.target.closest('.menu__item')) {
                mobileMenu.classList.remove('active');
            }

        });

    });
})();