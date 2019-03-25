;(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const openMobileMenuButton = document.querySelector('.header__hamburger');
        const mobileMenu = document.querySelector('.mobile-menu');
        const closeMobileMenuButton = mobileMenu.querySelector('.mobile-menu__hamburger');
        openMobileMenuButton.addEventListener('click', function (evt) {
            evt.preventDefault();
            mobileMenu.classList.add('active');
        });
        closeMobileMenuButton.addEventListener('click', function (evt) {
            evt.preventDefault();
            mobileMenu.classList.remove('active');
        });

    });
})();