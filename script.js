// Future animations or features can be added here
let celebrateBtn = document.getElementById('celebrate');
let homePage = document.getElementById('pageHome');

celebrateBtn.onclick = function () {
    homePage.classList.add('bg1');
    setTimeout(function () {
        homePage.classList.remove('bg1');
    }, 5000);
}
