export const imagesModule = (() => {
    var images = [
        "images/20190723_131044.jpg",
        "images/20190725_201644.jpg",
        "images/20190725_210007.jpg",
        "images/20190725_210149.jpg",
        "images/20210716_214424.jpg",
        "images/20210718_213301.jpg",
        "images/20210718_213304.jpg",
        "images/20210718_213306.jpg",
        "images/20210806_104948.jpg",
        "images/20210807_125631.jpg",
        "images/20210808_111759.jpg",
        "images/20210808_111810.jpg",
        "images/20210808_112529.jpg",
        "images/20210808_112539 (1).jpg",
        "images/20210808_112615.jpg",
        "images/20210811_221723.jpg",
        "images/20210816_113704.jpg",
        "images/20210816_113716.jpg",
        "images/20210816_130111.jpg",
        "images/20210816_141530.jpg",
        "images/20210818_160349.jpg",
        "images/20210818_160400.jpg",
        "images/20211025_121712.jpg",
        "images/20211025_220931.jpg",
        "images/20211025_220936.jpg",
        "images/20211025_222443.jpg",
        "images/20220713_122324.jpg",
        "images/20230326_170831.jpg",
        "images/20230326_170908.jpg",
        "images/20230326_173332.jpg",
        "images/20230602_213810.jpg",
        "images/20230728_204713.jpg",
        "images/20230802_104141.jpg",
        "images/20230805_220043.jpg",
        "images/20231228_142821.jpg",
        "images/IMG-20230129-WA0017.jpg",
        "images/IMG-20230303-WA0001.jpg",
        "images/IMG-20230507-WA0000.jpg",
        "images/IMG-20230507-WA0001.jpg",
        "images/IMG-20230507-WA0006.jpg",
        "images/IMG-20230702-WA0001.jpg",
        "images/IMG-20230716-WA0012.jpg",
        "images/IMG-20230722-WA0024.jpg",
        "images/IMG-20230727-WA0041.jpg",
        "images/IMG-20230727-WA0043.jpg",
        "images/IMG-20230731-WA0000.jpg",
        "images/IMG-20230731-WA0008.jpg",
        "images/IMG-20230731-WA0011.jpg",
        "images/IMG-20230731-WA0017.jpg",
        "images/IMG-20230808-WA0002.jpg",
        "images/IMG-20230809-WA0032.jpg",
        "images/IMG-20230809-WA0054.jpg",
        "images/IMG-20230809-WA0068.jpg",
        "images/IMG-20230809-WA0098.jpg",
        "images/IMG-20230813-WA0004.jpg",
        "images/IMG-20230813-WA0034.jpg",
        "images/IMG-20230813-WA0035.jpg",
        "images/IMG-20230816-WA0041.jpg",
        "images/IMG-20230822-WA0001.jpg",
        "images/IMG-20230827-WA0005.jpg",
        "images/IMG-20230827-WA0019.jpg",
        "images/IMG-20231202-WA0000.jpg",
        "images/IMG-20240322-WA0000.jpg",
        "images/IMG-20240501-WA0011.jpg",
        "images/IMG-20240501-WA0012.jpg",
        "images/IMG-20240501-WA0013.jpg",
        "images/Resized_20210816_080959_capture.jpg",
        "images/Resized_20210816_105641(1).jpg",
        "images/Resized_20210816_113536.jpg",
        "images/Resized_20210816_143102.jpg",
        "images/Resized_20220807_131815.jpg",
        "images/Resized_20220815_171842.jpg"
    ];
    let currentIndex = (localStorage.getItem("currentIndex") || 0)-1;

    function switchImage(side) {
        const img = document.getElementById("image");
        currentIndex = side === "next" ? (currentIndex + 1) % images.length : (currentIndex - 1 + images.length) % images.length;
        img.src = images[currentIndex];
        localStorage.setItem("currentIndex", currentIndex);
    }

    window.addEventListener("keydown", (event) => {
        const scrollY = window.scrollY || window.pageYOffset;
        const vh = window.innerHeight;
        if (scrollY === 2*vh) {
            if (event.key === "ArrowLeft") {
                switchImage("prev");
            } else if (event.key === "ArrowRight") {
                switchImage("next");
            }
        }
    });

    return { switchImage, images };
})();
