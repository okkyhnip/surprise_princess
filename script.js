// Ambil elemen dari HTML
const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const content = document.getElementById("content");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;


// ============================
// TOMBOL BUKA SURPRISE
// ============================

openBtn.onclick = function () {

    // Hilangkan halaman pembuka
    opening.classList.add("hide");

    // Tampilkan isi website
    content.classList.add("show");

    // Putar musik
    music.play()
        .then(function () {
            isPlaying = true;
            musicBtn.innerHTML = "❚❚";
        })
        .catch(function () {
            // Kalau musik gagal diputar,
            // website tetap lanjut
            isPlaying = false;
            musicBtn.innerHTML = "▶";
        });

    // Jalankan animasi hati
    startHearts();
};


// ============================
// TOMBOL MUSIC
// ============================

musicBtn.onclick = function () {

    if (isPlaying) {

        music.pause();

        musicBtn.innerHTML = "▶";

        isPlaying = false;

    } else {

        music.play()
            .then(function () {

                musicBtn.innerHTML = "❚❚";

                isPlaying = true;

            })
            .catch(function (error) {

                console.log("Musik tidak dapat diputar:", error);

            });

    }

};


// ============================
// ANIMASI HATI
// ============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const symbols = [
        "♡",
        "♥",
        "♡",
        "✦"
    ];

    heart.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 15 + 10 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 10000);
}


// ============================
// MULAI ANIMASI HATI
// ============================

function startHearts() {

    // Buat beberapa hati langsung
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            createHeart();
        }, i * 300);
    }

    // Hati berikutnya
    setInterval(function () {
        createHeart();
    }, 700);
}


// ============================
// DEBUG
// ============================

console.log("Website Princess berhasil dimuat 💗");