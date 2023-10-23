// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show')
//         }
//     })
// })


// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            section.classList.add('show_animate');
        } else {
            section.classList.remove('show_animate');
        }
    })
}