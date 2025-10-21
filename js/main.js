// ----------------- Imports des modules -----------------
import { confettis } from './confettis.js';
import { fireworks } from './fireworks.js';

// ----------------- Fullscreen -----------------
document.getElementById('fullscreen-toggle').addEventListener('click', toggleFullScreen);

// ----------------- Buttons -----------------
document.getElementById('button-launch').addEventListener('click', confettis.lancerConfettis);
document.getElementById('button-fall').addEventListener('click', confettis.pluieConfettis);

// ----------------- Global Listeners -----------------
document.addEventListener("fullscreenchange", () => {
    const fullScreenButton = document.getElementById("fullscreen-toggle");
    if (document.fullscreenElement) {
        fullScreenButton.innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
        fullScreenButton.innerHTML = '<i class="fa-solid fa-expand"></i>';
    }
});

document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
    if (
        (e.ctrlKey && e.key.toLowerCase() === "u") ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
        (e.key === "F12") ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j")
    ) {
        e.preventDefault();
    }
});

// ----------------- Loader -----------------
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const main = document.getElementById("mode-main");

    setTimeout(() => {
        loader.classList.remove("show");
        loader.classList.add("hide");
        main.classList.remove("hide");
        main.classList.add("show");
        fireworks.launch();
    }, 1000);
});

export function toggleFullScreen() {
    const fullScreenButton = document.getElementById("fullscreen-toggle");
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const vh = window.innerHeight;

    const positions = [0, vh, 2 * vh];

    let closest = positions.reduce((prev, curr) => {
        return Math.abs(curr - scrollY) < Math.abs(prev - scrollY) ? curr : prev;
    });

    clearTimeout(window.snapTimeout);
    window.snapTimeout = setTimeout(() => {
        window.scrollTo({ top: closest, behavior: "smooth" });
    }, 300);
});