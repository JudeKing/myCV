document.addEventListener('DOMContentLoaded', () => {
    const projectImgs = document.querySelectorAll('.project-img');
    let state = false;
    let mobileQuery = window.matchMedia("(max-width: 700px)");
    let siteLinkHeaders = document.querySelectorAll('.preview-site-link h2');
    let siteLinks = ['https://americancompass.org/', 'https://calderwalton.com/', 'https://lawliberty.org/', 'https://monumentlegacy.com/'];
    let index = 0;

    
    
    projectImgs.forEach(link => {
        const projectDesc = link.previousElementSibling;
        const projectContainer = link.parentElement;
        let projectDescHeight = projectDesc.offsetHeight + 'px';

        projectDesc.style.height = projectDescHeight;
        link.addEventListener('mouseover', e => {
            if(!state) {

                projectDesc.style.height = link.offsetHeight + 'px';
                if(projectContainer.classList.contains('container-reverse-row')) {
                    projectDesc.classList.add('img-right-ani');
                } else {
                    projectDesc.style.left = '0';
                    projectDesc.style.zIndex = '0';
                }
                
                state = true;
            }
        })
        link.addEventListener('mouseleave', e => {
            if(state) {
                console.log('remove' + projectDescHeight)
                projectDesc.style.height = projectDescHeight;
                if(projectContainer.classList.contains('container-reverse-row')) {
                    projectDesc.style.left = '4rem !important';
                    projectDesc.classList.remove('img-right-ani');
                } else {
                    projectDesc.style.left = '4rem';
                    projectDesc.style.zIndex = '2';
                }
                state = false;
            }
        })
    })

    siteLinkHeaders.forEach(link => {
        let linkURL = siteLinks[index]

        link.addEventListener('click', e => {
            window.location.href = linkURL
        })

        index++
    })




})
