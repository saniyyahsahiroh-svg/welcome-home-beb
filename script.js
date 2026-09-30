const opening =
    document.getElementById("opening");

const main =
    document.getElementById("main");

const letter =
    document.getElementById("letter");

const cards =
    document.getElementById("cards");

const ending =
    document.getElementById("ending");

const floatingHearts =
    document.getElementById("floatingHearts");



/* =========================
   BUKA SURPRISE
========================= */

function openSurprise() {

    opening.classList.remove("active");

    main.classList.add("active");

    createHearts(25);

}



/* =========================
   BUKA SURAT
========================= */

function showLetter() {

    letter.classList.remove("hidden");

    document.getElementById(
        "letterButton"
    ).style.display = "none";


    letter.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });


    createHearts(12);

}



/* =========================
   BUKA KARTU
========================= */

function showCards() {

    cards.classList.remove("hidden");


    cards.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });


    createHearts(15);

}



/* =========================
   ENDING
========================= */

function finalMessage() {

    ending.classList.remove("hidden");


    ending.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });


    createHearts(35);

}



/* =========================
   HATI TERBANG
========================= */

function createHearts(number) {

    for (
        let i = 0;
        i < number;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.classList.add(
            "floating-heart"
        );


        const heartTypes = [

            "❤️",
            "♡",
            "💕",
            "💗",
            "💖",
            "💓"

        ];


        heart.innerHTML =
            heartTypes[
                Math.floor(
                    Math.random()
                    * heartTypes.length
                )
            ];


        heart.style.left =
            Math.random()
            * 100
            + "vw";


        heart.style.fontSize =
            Math.random()
            * 20
            + 15
            + "px";


        heart.style.animationDuration =
            Math.random()
            * 3
            + 4
            + "s";


        floatingHearts.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 7000);

    }

}



/* =========================
   HATI MUNCUL OTOMATIS
========================= */

setInterval(() => {

    if (
        document.querySelector(
            ".page.active"
        )
    ) {

        createHearts(1);

    }

}, 1800);