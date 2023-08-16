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
    },
    {
        "img": "./images/nathan_002.jpeg",
        "description": "Me voila debout, 1 an et quelques...",
    },
    {
        "img": "./images/nathan_003.jpeg",
        "description": "Mon petit frère est la, enfin...",
    },
    {
        "img": "./images/nathan_004.jpeg",
        "description": "Je m'amuse bien a 3 ans...",
    },
    {
        "img": "./images/nathan_005.jpeg",
        "description": "Maman m'apprends a frimer...",
    },
    {
        "img": "./images/nathan_006.jpeg",
        "description": "Deja sur les jeux videos a 4 ans.",
    },
    {
        "img": "./images/nathan_007.jpeg",
        "description": "6 ans, toujours aussi beau...",
    },
    {
        "img": "./images/nathan_008.jpeg",
        "description": "La je n'etais pas content...",
    },
    {
        "img": "./images/nathan_009.jpeg",
        "description": "A 8 ans deja aussi haut...",
    },
    {
        "img": "./images/nathan_010.jpeg",
        "description": "Et voila, 9 ans deja...",
    },
]
const galleryElt = document.getElementById('gallery')
let galleryHTML = gallery.map(elt => {
    return `<article class="photo">
        <div class="img-container">
          <img src=${elt.img} alt="une photo de nathan">
        </div>
        <p class="img-description">${elt.description}</p>
      </article>`  
})
galleryElt.innerHTML = galleryHTML