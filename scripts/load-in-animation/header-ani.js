document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('.nav-header')

    function isInViewport(el, buffer = -150) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;

        // Calculate the adjusted top and bottom positions with buffer
        const topWithBuffer = rect.top - buffer;
        const bottomWithBuffer = rect.bottom + buffer;

        // Check if any part of the element (with buffer) is visible within the viewport
        return (
            bottomWithBuffer > 0 &&
            rect.right > 0 &&
            topWithBuffer < windowHeight &&
            rect.left < windowWidth
        );
    }


    let lastScrollTop = 0
    document.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if(currentScroll > 0) {
            header.classList.add('body-background')

        } else {
            header.classList.remove('body-background')

        }

        lastScrollTop = currentScroll
    })

})