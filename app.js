const data = [
    [
        {
            "title": "Portfolio",
            "img": "portfolio.png",
            "description": "Portfolio created in Vue.js.",
            "urlGithub": "https://github.com/MeneghiniOrnella/MeneghiniOrnella.github.io",
            "urlSite":"https://meneghiniornella.netlify.app/",
            "skills": ["Vue.js", "Javascript", "HTML", "CSS"]
        },
        {
            "title": "Pokemon Game",
            "img": "pokeAPI.png",
            "description": "Guess the pokemon game.It was made using PokeAPI and Vue.js.",
            "urlGithub": "https://github.com/MeneghiniOrnella/pokemon-game",
            "urlSite":"",
            "skills": ["API", "Vue.js", "Javascript", "HTML", "CSS"]
        },
        {
            "title": "Mascotas",
            "img": "dog.jpg",
            "description": "Team proyect of Codo a Codo Python 2021",
            "urlGithub": "https://github.com/MeneghiniOrnella/mascotas",
            "urlSite":"",
            "skills": ["Python", "Flask", "MySQL", "Bootstrap", "HTML", "CSS"]
        },
        {
            "title": "Gamedo",
            "img": "gamedo.png",
            "description": "Multiple choice game made for a taekwondo school.",
            "urlGithub": "https://github.com/MeneghiniOrnella/tkd-gamedo",
            "urlSite":"https://gamedo.netlify.app/",
            "skills": ["HTML", "Javascript", "CSS"]
        },
        {
            "title": "Role Game",
            "img": "logo.png",
            "description": "Sorry! This application is being created.",
            "urlGithub": "https://github.com/MeneghiniOrnella/Vue.js-role-game.git",
            "urlSite":"",
            "skills": ["Vue.js", "Javascript", "HTML", "CSS"]
        }
    ]
];

const projects() {
    return data.map((project) => {
      return project;
    })
}