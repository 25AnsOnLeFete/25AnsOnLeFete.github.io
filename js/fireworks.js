import "https://cdn.jsdelivr.net/npm/fireworks-js@2.10.7/dist/index.umd.js";

export const fireworks = (() => {
    function launch() {
        const container_left = document.getElementById("fireworks-left");
        const container_middle = document.getElementById("fireworks-middle");
        const container_right = document.getElementById("fireworks-right");
        const container_top = document.getElementById("fireworks-top");
        const fireworks_left = new Fireworks.default(container_left, {
            autoresize: true,
            opacity: 0.8,
            acceleration: 1.05,
            friction: 0.9,
            gravity: 1,
            particles: 100,
            traceLength: 5,
            traceSpeed: 5,
            explosion: 5,
            intensity: 5,
            flickering: 500,
            hue: { min: 0, max: 360 },
            brightness: { min: 50, max: 70 },
            decay: { min: 0.01, max: 0.015 },
            lineWidth: { explosion: { min:1, max:3 }, trace: { min:1, max:2 } },
            lineStyle: 'round',
            rocketsPoint: { min: 25, max: 25 }
        });
        const fireworks_middle = new Fireworks.default(container_middle, {
            autoresize: true,
            opacity: 0.8,
            acceleration: 1.05,
            friction: 0.9,
            gravity: 1,
            particles: 100,
            traceLength: 5,
            traceSpeed: 5,
            explosion: 5,
            intensity: 5,
            flickering: 500,
            hue: { min: 0, max: 360 },
            brightness: { min: 50, max: 70 },
            decay: { min: 0.01, max: 0.015 },
            lineWidth: { explosion: { min:1, max:3 }, trace: { min:1, max:2 } },
            lineStyle: 'round',
            rocketsPoint: { min: 50, max: 50 }
        });
        const fireworks_right = new Fireworks.default(container_right, {
            autoresize: true,
            opacity: 0.8,
            acceleration: 1.05,
            friction: 0.9,
            gravity: 1,
            particles: 100,
            traceLength: 5,
            traceSpeed: 5,
            explosion: 5,
            intensity: 5,
            flickering: 500,
            hue: { min: 0, max: 360 },
            brightness: { min: 50, max: 70 },
            decay: { min: 0.01, max: 0.015 },
            lineWidth: { explosion: { min:1, max:3 }, trace: { min:1, max:2 } },
            lineStyle: 'round',
            rocketsPoint: { min: 75, max: 75 }
        });
        const fireworks_top = new Fireworks.default(container_top, {
            autoresize: true,
            opacity: 0.9,
            acceleration: 1.1,
            friction: 0.92,
            gravity: 0.3,
            particles: 180,
            traceLength: 8,
            traceSpeed: 8,
            explosion: 8,
            intensity: 1,
            flickering: 0,
            hue: { min: 0, max: 360 },
            brightness: { min: 70, max: 90 },
            decay: { min: 0.015, max: 0.02 },
            lineWidth: {
                explosion: { min: 1, max: 2 },
                trace: { min: 1, max: 3 }
            },
            lineStyle: 'round',
            rocketsPoint: { min: 50, max: 50 }
        });
        fireworks_left.start();
        fireworks_middle.start();
        fireworks_right.start();
        fireworks_top.start();

        window.addEventListener("scroll", (event) => {
            const scrollY = window.scrollY || window.pageYOffset;
            if (scrollY > window.innerHeight-2) {
                fireworks_left.pause();
                fireworks_middle.pause();
                fireworks_right.pause();
                fireworks_top.pause();
            } else {
                fireworks_left.start();
                fireworks_middle.start();
                fireworks_right.start();
                fireworks_top.start();
            }
        });
    }

    return { launch };
})();
