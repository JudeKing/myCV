document.addEventListener('DOMContentLoaded', () => {
    const allProjects = document.querySelectorAll('.project-container')
    const projectsHeader = document.querySelector('.projects-container h1')
    const aboutSection = document.querySelector('.about-container')
    const contactContainer = document.querySelector('.contact-container')
    const experienceContainer = document.querySelector('.experience-container')
    const experienceSkillRange = document.querySelectorAll('.experience-skill-range')
    let sec = 200
    experienceSkillRange.forEach(el => {
        el.style.transitionDelay = sec + 'ms'
        sec += 150
    })

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


    
    document.addEventListener('scroll', () => {
        allProjects.forEach(project => {
            if(isInViewport(project)) {
                if(project.classList.contains('container-reverse-row')) {
                    project.classList.add('slide-in-ani-right')
                } else {
                    project.classList.add('slide-in-ani-left')
                }
            }
        })

        if(isInViewport(aboutSection)) {
            aboutSection.style.opacity = '1'
            aboutSection.children[0].classList.add('slide-in-ani-left')
            aboutSection.children[1].classList.add('slide-in-ani-right')
        }

        if(isInViewport(contactContainer)) {
            contactContainer.classList.add('slide-in-ani-up')
        }

        if(isInViewport(experienceContainer)) {
            experienceContainer.classList.add('slide-in-ani-left')
            experienceSkillRange[0].style.left = '75%'
            experienceSkillRange[1].style.left = '75%'
            experienceSkillRange[2].style.left = '80%'
            experienceSkillRange[3].style.left = '75%'
            experienceSkillRange[4].style.left = '80%'
            experienceSkillRange[5].style.left = '35%'
        }

        if(isInViewport(projectsHeader)) {
            projectsHeader.classList.add('slide-in-ani-left')
        }

    })


})