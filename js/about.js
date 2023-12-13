document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-image');

    images.forEach(image => {
        image.addEventListener('click', function () {
            // Membuat gambar menjadi full screen pada klik
            if (this.requestFullscreen) {
                this.requestFullscreen();
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, // Tampilkan satu slide per waktu
        spaceBetween: 10, // Spasi antar slide
        loop: true, // Enable looping
        autoplay: {
            delay: 2500, // Waktu tunda antar slide (dalam ms)
            disableOnInteraction: false, // Lanjutkan autoplay saat interaksi user
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Sesuaikan breakpoints sesuai dengan desain responsif Figma
        breakpoints: {
            // Ketika lebar layar >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // Ketika lebar layar >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});

