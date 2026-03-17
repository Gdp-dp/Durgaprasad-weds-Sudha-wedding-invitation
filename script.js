function createPetal() {
    const petal = document.createElement("div");
    petal.innerHTML = "🌸";

    petal.style.position = "fixed";
    petal.style.top = "-20px";
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.fontSize = (Math.random() * 10 + 15) + "px";
    petal.style.zIndex = "999";
    petal.style.pointerEvents = "none";
    petal.style.opacity = Math.random();

    document.body.appendChild(petal);

    let speed = Math.random() * 3 + 2;

    let fall = setInterval(() => {
        petal.style.top = petal.offsetTop + speed + "px";
        petal.style.left = petal.offsetLeft + Math.sin(petal.offsetTop / 50) * 2 + "px";
    }, 30);

    setTimeout(() => {
        clearInterval(fall);
        petal.remove();
    }, 6000);
}

setInterval(createPetal, 300);
