let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 200;
        let height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            section.classList.add('show_animate');
        } else {
            section.classList.remove('show_animate');
        }
    })
}