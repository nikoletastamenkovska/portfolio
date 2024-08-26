document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".skills");
    const listItems = section.querySelectorAll(".animate_list_item");

    listItems.forEach(item => {
        const text = item.textContent;
        const words = text.split(/\s+/);
        item.innerHTML = words.map(word => `<span class="word_animate">${word}</span>`).join(' ');
        item.setAttribute('data-content', text);
    });

    const animatedWords = section.querySelectorAll(".word_animate");

    function animatedWordsOnScroll() {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            section.classList.add("show_animate");
            animatedWords.forEach((word, idx) => {
                setTimeout(() => {
                    word.classList.add("show_word_animate");
                }, idx * 150);
            });
        } else {
            section.classList.remove("show_animate");
            animatedWords.forEach(word => {
                word.classList.remove("show_word_animate");
            });
        }
    }
    window.addEventListener("scroll", animatedWordsOnScroll)
});