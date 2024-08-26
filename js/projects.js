document.addEventListener("DOMContentLoaded", function () {
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            const projectContainer = document.querySelector('.project_cards');

            projects.forEach((project, idx) => {
                const card = document.createElement("div");
                card.className = "project_card";

                const imgContainer = document.createElement('div');
                imgContainer.className = "image_container";
                project.images.forEach((image, imgIdx) => {
                    const img = document.createElement("img");
                    img.src = image;
                    img.className = `project_image image_${imgIdx}`;
                    imgContainer.appendChild(img);
                });

                const details = document.createElement("div");
                details.className = "project_details";
                details.innerHTML = `
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <p>${project.details}</p>
                    <a href="${project.link}" target="_blank">GitHub Link</a>
                    <a href="${project.video}" target="_blank">Video Link</a>
                    `;
                card.appendChild(imgContainer);
                card.appendChild(details);
                projectContainer.appendChild(card);

                let imgIdx = 0;
                setInterval(() => {
                    const images = imgContainer.querySelector('img');
                    images.forEach(img => img.style.display = "none");
                    images[imgIdx].style.display = "block";
                    imgIdx = (imgIdx + 1) % images.clientHeight;
                }, 100);

                card.addEventListener("mouseover", () => {
                    details.classList.add("visible");
                });
                card.addEventListener('mouseout', () => {
                    details.classList.remove('visible');
                });
            });

            document.querySelectorAll('.more_info').forEach((button, inx) => {
                button.addEventListener('click', () => {
                    const details = document.querySelectorAll('.project_details')[idx];
                    details.classList.toggle('visible');
                });
            });
        });
});