let keyPressed = (e) => {
    let audio = document.querySelector(`audio#${e.key}`);
    let key = document.querySelector(`.${e.key}`);

    if (audio === null) { return; }

    audio.currentTime = 0;
    audio?.play();

    key?.classList.add("playing");
}

let keyReleased = (e) => {
    let key = document.querySelector(`.${e.key}`);  
    key?.classList.remove("playing");
}

document.addEventListener("keypress", keyPressed);
document.addEventListener("keyup", keyReleased);