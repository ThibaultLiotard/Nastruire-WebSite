function changeSection(sectionName) {
    document
        .querySelector(`.${sectionName}`)
        .scrollIntoView({ behavior: "smooth", block: "start" });
}

function showBurgerMenu() {
    document.querySelector("header").style.display = "block";
    document.querySelector('header').style.animation = "menuBurgerArrived 1.5s"
    document.querySelector('#burgerMenuIcon').style.animation = "departEffect 1.5s"
    setTimeout(() => {
        document.querySelector("#burgerMenuIcon").style.display = "none";
    }, 1500);
}

function hideBurgerMenu() {
    document.querySelector("#burgerMenuIcon").style.display = "block";
    document.querySelector('header').style.animation = "menuBurgerDepart 1.5s"
    document.querySelector('#burgerMenuIcon').style.animation = "arrivedEffect 1.5s"
    setTimeout(() => {
        document.querySelector("header").style.display = "none";
    }, 1000);
}

function clickOnSection(sectionName){
    hideBurgerMenu()
    changeSection(sectionName)
}

// document.addEventListener('contextmenu', (e) => e.preventDefault());

// function ctrlShiftKey(e, keyCode) {
//   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }

// document.onkeydown = (e) => {
//   if (
//     event.keyCode === 123 ||
//     ctrlShiftKey(e, 'I') ||
//     ctrlShiftKey(e, 'J') ||
//     ctrlShiftKey(e, 'C') ||
//     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
//   )
//     return false;
// };