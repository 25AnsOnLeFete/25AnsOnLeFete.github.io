import "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";

export const confettis = (() => {
    const buttonLauncher = document.getElementById("button-launch");
    const buttonPluie = document.getElementById("button-fall");

    const canvas = document.getElementById("confettis-canvas");
    const myConfetti = confetti.create(canvas, { resize: true });

    function pluieConfettis() {
        const duration = 2 * 1000; // 3 secondes
        const end = Date.now() + duration;

        buttonLauncher.disabled = true;
        buttonPluie.disabled = true;

        (function frame() {
            myConfetti({
                particleCount: 15,
                spread: 180,
                gravity: 0.6,
                angle: 270,
                origin: { x: Math.random(), y: -0.2 } // apparition aléatoire en haut
            });
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            } else {
                setTimeout(() => {
                    buttonLauncher.disabled = false;
                    buttonPluie.disabled = false;
                }, 2000);
            }
        })();
    }

    function lancerConfettis() {
        const duration = 0.8 * 1000; // 3 secondes
        const end = Date.now() + duration;

        buttonLauncher.disabled = true;
        buttonPluie.disabled = true;

        (function frame() {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    myConfetti({
                    particleCount: 5,
                    spread: 80,
                    startVelocity: 60,
                    gravity: 0.3,
                    angle: 90,
                    origin: { x: i / 5+0.1, y: 1 }
                    });
                }, i * 250);
            }
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            } else {
                setTimeout(() => {
                    buttonLauncher.disabled = false;
                    buttonPluie.disabled = false;
                }, 2000);
            }
        })();
    }

    return { pluieConfettis, lancerConfettis };
})();
