document.addEventListener('DOMContentLoaded', () => {
    const hoverLink = document.querySelectorAll('.preview-site-link h2');
    let state = false

    hoverLink.forEach(link => {
        link.addEventListener('mouseover', () => {
            while (!state) {
                let linkParent = link.parentElement;
                let siteBox = linkParent.children[1]
                state =  true
            }
        })
    })
})