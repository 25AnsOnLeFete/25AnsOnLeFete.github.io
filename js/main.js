// ----------------- Imports des modules -----------------
import { confettis } from './confettis.js';
import { fireworks } from './fireworks.js';
import { imagesModule } from './images.js';

// ----------------- Fullscreen -----------------
document.getElementById('fullscreen-toggle').addEventListener('click', toggleFullScreen);

// ----------------- Buttons -----------------
document.getElementById('button-launch').addEventListener('click', confettis.lancerConfettis);
document.getElementById('button-fall').addEventListener('click', confettis.pluieConfettis);

// ----------------- Arrows -----------------
for (const arrow of document.querySelectorAll('#arrow-prev')) {
    arrow.addEventListener('click', () => {
        prevPage();
    })
}
for (const arrow of document.querySelectorAll('#arrow-next')) {
    arrow.addEventListener('click', () => {
        nextPage();
    })
}
document.getElementById('arrow-nex-image').addEventListener('click', () => {
    imagesModule.switchImage("next");
});
document.getElementById('arrow-prev-image').addEventListener('click', () => {
    imagesModule.switchImage("prev");
});

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
        snapScroll();
        fireworks.launch();
        imagesModule.switchImage("next");
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


function snapScroll() {
    const baseHeight = Math.round(document.documentElement.clientHeight);
    const positions = [0, baseHeight, baseHeight * 2];
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    clearTimeout(window.snapTimeout);
    window.snapTimeout = setTimeout(() => {
        const closest = positions.reduce((prev, curr) =>
            Math.abs(curr - scrollY) < Math.abs(prev - scrollY) ? curr : prev
        );

        window.scrollTo({
            top: closest,
            behavior: "smooth",
        });
    }, 50); // délai court pour laisser finir le scroll naturel
}

window.addEventListener("scroll", () => {
    snapScroll();
});

window.addEventListener("resize", () => {
    snapScroll();
});

function prevPage() {
    const scrollY = window.scrollY || window.pageYOffset;
    const vh = window.innerHeight;

    const positions = [0, vh, 2 * vh];

    if (scrollY !== positions[0]) {
        window.scrollTo({ top: scrollY - vh, behavior: "smooth" });
    }
}

function nextPage() {
    const scrollY = window.scrollY || window.pageYOffset;
    const vh = window.innerHeight;

    const positions = [0, vh, 2 * vh];

    if (scrollY !== positions[2]) {
        window.scrollTo({ top: scrollY + vh, behavior: "smooth" });
    }
}
