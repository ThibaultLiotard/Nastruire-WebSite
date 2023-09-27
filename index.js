"use strict"

/********DECLARATION DEPUIS HTML********/
let accueil = document.querySelectorAll('#accueil')
let galerie = document.querySelectorAll('#galerie')
let quisommesnous = document.querySelectorAll('#quisommesnous')
let telechargements = document.querySelectorAll('#telechargements')
let contacts = document.querySelectorAll('#contacts')

let accueilAll = document.querySelector('.accueilAll')
let galerieAll = document.querySelector('.galerieAll')
let quisommenousAll = document.querySelector('.quisommenousAll')
let téléchargementAll = document.querySelector('.téléchargementAll')
let contactsAll = document.querySelector('.contactsAll')
let cross = document.querySelector('.cross')


/************DECLARATION ANIM***********/
const headerAnim = () => {
    gsap.from("header", { y: -150, duration: 2 });
}

const accueilAnim = () => {
    gsap.from(".videos", { x : 3000, duration: 2})
}

/*********CHANGEMENT CATEGORIES*********/
accueil.forEach(elm => {
    elm.addEventListener('click', () => {
        accueilAll.style.display = "block"
        galerieAll.style.display = "none"
        quisommenousAll.style.display = "none"
        téléchargementAll.style.display = "none"
        accueilAnim()
    })
})

galerie.forEach(elm => {
    elm.addEventListener('click', () => {
        accueilAll.style.display = "none"
        galerieAll.style.display = "block"
        quisommenousAll.style.display = "none"
        téléchargementAll.style.display = "none"
    })
})

quisommesnous.forEach(elm => {
    elm.addEventListener('click', () => {
        accueilAll.style.display = "none"
        galerieAll.style.display = "none"
        quisommenousAll.style.display = "block"
        téléchargementAll.style.display = "none"
    })
})

telechargements.forEach(elm => {
    elm.addEventListener('click', () => {
        accueilAll.style.display = "none"
        galerieAll.style.display = "none"
        quisommenousAll.style.display = "none"
        téléchargementAll.style.display = "block"
    })
})

contacts.forEach(elm => {
    elm.addEventListener('click', () => {
        document.querySelector(".modal").style.display = "block"
        gsap.from(".modal", { x: 2100, duration: 0.5 });
    })
})

cross.addEventListener("click", () => {
    gsap.to(".modal", { x: 2100, duration: 1 });
    setTimeout(() => {
        document.querySelector(".modal").style.display = "none"
        gsap.to(".modal", { x: 0, duration: 1 });
    }, 500);
})

if (window.matchMedia("(width < 600px)").matches) {
    document.querySelector('.video1').innerHTML = ''
    document.querySelector('.video1').innerHTML = `<iframe style="width: 35vw; height: 18.5vw;" width="358.4" height="201.6"
    src="https://www.youtube.com/embed/Ss6up4qf1Po" title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>`
    document.querySelector('.galerie_videos').innerHTML = ''
    document.querySelector('.galerie_videos').innerHTML = `
    <div class="video">
        <iframe style="width: 35vw; height: 18.5vw;" width="358.4" height="201.6"
            src="https://www.youtube.com/embed/1ApQzo7tydQ" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
    <div class="video">
        <iframe style="width: 35vw; height: 18.5vw;" width="358.4" height="201.6"
            src="https://www.youtube.com/embed/yP9-p37ctyg" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
    <div class="video">
        <iframe style="width: 35vw; height: 18.5vw;" width="358.4" height="201.6"
            src="https://www.youtube.com/embed/_fkYkO708pg" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
    <div class="video">
        <iframe style="width: 35vw; height: 18.5vw;" width="358.4" height="201.6"
            src="https://www.youtube.com/embed/bcijASZfKVM" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>`
}

accueilAnim()