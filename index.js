function goToSecondPage(){
    document
    .querySelector("#secondPage")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

function goToThirdPage(){
    document
    .querySelector("#thirdPage")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

function goToFourthPage(){
    document
    .querySelector("#fourthPage")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

function goToFivesPage(){
    document
    .querySelector("#fivesPage")
    .scrollIntoView({ behavior: "smooth", block: "start" });
}

function move_to_rigth(){
    const carouselContainer = document.querySelector(".carousel-container");
    const groupPresentation = document.querySelectorAll(".group_presentation");
    carouselContainer.style.transition = "transform 0.5s";
    carouselContainer.style.transform = `translateX(-100vw)`;
}

function move_to_left(){
    const carouselContainer = document.querySelector(".carousel-container");
    const groupPresentation = document.querySelectorAll(".group_presentation");
    carouselContainer.style.transition = "transform 0.5s";
    carouselContainer.style.transform = `translateX(0vw)`;
}