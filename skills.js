const skillsFront = document.querySelector(".skillsFront");
const skillsBack  = document.querySelector(".skillsBack");

const arrayFront = ["fa-brands fa-square-js", "fa-brands fa-html5", "fa-brands fa-css3-alt"];
const arrayBacks = ["JSON", "Wordpress", "Canva", "Figma", "GIT", "Github", "VSCode", "Codepen", "Repl.it", "Trello", "NPM", "YARN", "learner", "restorative", "focus", "teamwork", "persevering"];

/* skillsFront
const cardTemplate = (arrayFront) => `
    <div class="card">
        <i class="${ arrayFront }"></i>
    </div>
`;
const frontElements = arrayFront.map((item) => {
    const arrayFront = document.createElement("div");
    arrayFront.innerHTML = cardTemplate(item);
    return arrayFront;
});
project.append(...frontElements); */

// skillsBack
for (let i = 0; i < arrayBacks.length + 10; i++) {
  const randomIndex = Math.floor(Math.random() * arrayBacks.length);
  const arrayBack = arrayBacks[randomIndex];

  const arrayBackElement = document.createElement("span");
  arrayBackElement.textContent = arrayBack;
  arrayBackElement.classList.add("arrayBack");
  arrayBackElement.style.left = `${ Math.random() * 100 }%`;
  arrayBackElement.style.top = `${ Math.random() * 100 }%`;

  skillsBack.appendChild(arrayBackElement);
}