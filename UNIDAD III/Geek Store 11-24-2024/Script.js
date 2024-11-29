
    let currentIndex = 0;
    let visibleImages = getVisibleImages();
    const totalImages = document.querySelectorAll('.ContenedorHijos').length;

    function getVisibleImages() {
        const width = window.innerWidth;
        if (width <= 400) {
            return 1; // 1 imagen en pantallas extra pequeñas (móviles pequeños)
        } else if (width <= 600) {
            return 1; // 1 imagen en pantallas pequeñas (tablets y móviles grandes)
        } else if (width <= 768) {
            return 2; // 2 imágenes en pantallas medianas (tablets horizontales)
        } else if (width <= 992) {
            return 2; // 2 imágenes en pantallas grandes (laptops)
        } else if (width <= 1400) {
            return 3; // 3 imágenes en pantallas extra grandes (desktops)
        } else {
            return 5; // 4 imágenes en pantallas muy grandes
        }
    }

    function showImage() {
        const container = document.querySelector('.ContenedorPadres');
        if (currentIndex < 0) {
            currentIndex = totalImages - visibleImages;
        } else if (currentIndex >= totalImages) {
            currentIndex = 0;
        }
        container.style.transform = `translateX(-${currentIndex * (100 / visibleImages)}%)`;
    }

    function showNextImage() {
        currentIndex += visibleImages;
        showImage();
    }

    function showPreviousImage() {
        currentIndex -= visibleImages;
        showImage();
    }

    window.addEventListener('resize', () => {
        visibleImages = getVisibleImages();
        currentIndex = 0;
        showImage();
    });

    function toggleMenu() {
        document.querySelector('.navbar').classList.toggle('show');
    }