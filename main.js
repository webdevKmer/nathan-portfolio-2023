const openNavBtn = document.querySelector('#mobile-nav-open')
const closeNavBtn = document.querySelector('#mobile-nav-close')
const mobileNavMenu = document.querySelector('.nav-links-mobile')

openNavBtn.addEventListener('click', () => {
    mobileNavMenu.style.display = 'flex';
    openNavBtn.classList.toggle('hidden')
    closeNavBtn.classList.toggle('hidden')
})
closeNavBtn.addEventListener('click', () => {
    mobileNavMenu.style.display = 'none';
    closeNavBtn.classList.toggle('hidden')
    openNavBtn.classList.toggle('hidden')
})
mobileNavMenu.addEventListener('mouseleave',() => {
    mobileNavMenu.style.display = 'none';
    closeNavBtn.classList.toggle('hidden')
    openNavBtn.classList.toggle('hidden')
})

const gallery = [
    {
        "img": "./images/nathan_001.jpeg",
        "description": "Deja aussi rigoleur...",
        "age":0
    },
    {
        "img": "./images/nathan_002.jpeg",
        "description": "Me voila debout, 1 an et quelques...",
        "age":1
    },
    {
        "img": "./images/nathan_003.jpeg",
        "description": "Mon petit frère est la, enfin...",
        "age":2
    },
    {
        "img": "./images/nathan_005.jpeg",
        "description": "Maman m'apprends a frimer...",
        "age":3
    },
    {
        "img": "./images/nathan_004.jpeg",
        "description": "Je m'amuse bien à presque 4 ans...",
        "age":4
    },
    {
        "img": "./images/nathan_006.jpeg",
        "description": "Deja sur les jeux videos à presque ans.",
        "age":5
    },
    {
        "img": "./images/nathan_007.jpeg",
        "description": "6 ans, toujours aussi beau...",
        "age":6
    },
    {
        "img": "./images/nathan_008.jpeg",
        "description": "La je n'etais pas content...",
        "age":7
    },
    {
        "img": "./images/nathan_009.jpeg",
        "description": "A 8 ans deja aussi haut...",
        "age":8
    },
    {
        "img": "./images/nathan_010.jpeg",
        "description": "Et voila, 9 ans deja...",
        "age":9
    },
]
const galleryElt = document.getElementById('gallery')
let galleryHTML = gallery.map(elt => {
    return `
    <article class="photo">
        <div class="img-container">
          <img src=${elt.img} alt="une photo de nathan">
        </div>
        <div class="age">${elt.age}<small>ans</small></div>
        <p class="img-description">${elt.description}</p>
    </article>
    `  
}).join('')
galleryElt.innerHTML = galleryHTML