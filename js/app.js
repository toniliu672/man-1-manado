// Menu Hamburger
function toggleMobileMenu() {
    var menu = document.querySelector('.hamburger-menu-container');
    var icon = document.querySelector('.mobile-nav-icon');
    menu.classList.toggle('active');
    icon.classList.toggle('active');
}

// Menutup menu saat pengguna scroll
window.onscroll = function () {
    var menu = document.querySelector('.hamburger-menu-container');
    var icon = document.querySelector('.mobile-nav-icon');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        icon.classList.remove('active');
    }
};

document.addEventListener('DOMContentLoaded', function () {
    var heroImage = document.querySelector('.hero-image img');
    var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    if (!isMobile) {
        heroImage.addEventListener('mouseenter', function () {
            this.classList.add('hover-animate');
        });

        heroImage.addEventListener('mouseleave', function () {
            this.classList.remove('hover-animate');
        });
    }
    if (isMobile) {
        window.addEventListener('scroll', function () {
            var scrollPosition = window.scrollY;
            if (scrollPosition > 100) { 
                heroImage.classList.add('scroll-animate');
            } else {
                heroImage.classList.remove('scroll-animate');
            }
        });
    }

});
