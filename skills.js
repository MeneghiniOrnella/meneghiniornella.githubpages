const skillsFront = document.querySelector(".skillsFront");
const skillsBack  = document.querySelector(".skillsBack");

const arrayFront = ["fa-brands fa-square-js", "fa-brands fa-html5", "fa-brands fa-css3-alt"];
const arrayBacks = ["JSON", "Canva", "Figma", "GIT", "Github", "VSCode", "Codepen", "Repl.it", "Trello", "NPM", "YARN", "Netlify", "learner", "restorative", "focus", "teamwork", "persevering"];

// skillsBack
for (let i = 0; i < arrayBacks.length + 10; i++) {
  const randomIndex = Math.floor(Math.random() * arrayBacks.length);
  const arrayBack   = arrayBacks[randomIndex];

  const arrayBackElement = document.createElement("span");
  arrayBackElement.textContent = arrayBack;
  arrayBackElement.classList.add("arrayBack");
  arrayBackElement.style.left = `${ Math.random() * 100 }%`;
  arrayBackElement.style.top  = `${ Math.random() * 100 }%`;

  skillsBack.appendChild(arrayBackElement);
}