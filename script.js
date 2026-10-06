/* =====================================================
   SEBERAPA TAHU DIRIMU TENTANGKU?
   20 SOAL FIXED
   TANPA DATABASE
   ===================================================== */


/* =====================================================
   DAFTAR 20 SOAL
   ===================================================== */

const QUESTION_TEMPLATE = [

    {
        title: "Makanan",
        question: "Apa makanan yang paling aku sukai?",
        choices: [
            "Nasi goreng",
            "Mie ayam",
            "Seblak",
            "Bakso"
        ]
    },

    {
        title: "Warna",
        question: "Apa warna favoritku?",
        choices: [
            "Merah",
            "Biru",
            "Hitam",
            "Pink"
        ]
    },

    {
        title: "Game",
        question: "Game mana yang paling aku sukai?",
        choices: [
            "Minecraft",
            "Roblox",
            "Mobile Legends",
            "BabyBus"
        ]
    },

    {
        title: "Minuman",
        question: "Minuman apa yang paling aku sukai?",
        choices: [
            "Es teh",
            "Kopi",
            "Yogurt",
            "Susu"
        ]
    },

    {
        title: "Hobi",
        question: "Hobi apa yang paling aku sukai?",
        choices: [
            "Membaca",
            "Melukis",
            "Memasak",
            "Bermain musik"
        ]
    },

    {
        title: "Aplikasi",
        question: "Aplikasi mana yang paling sering aku gunakan?",
        choices: [
            "Instagram",
            "TikTok",
            "YouTube",
            "WhatsApp"
        ]
    },

    {
        title: "Yang Kutakuti",
        question: "Apa yang paling aku takuti?",
        choices: [
            "Ketinggian",
            "Kegelapan",
            "Serangga",
            "Sendirian"
        ]
    },

    {
        title: "Hewan Kesukaan",
        question: "Hewan apa yang paling aku sukai?",
        choices: [
            "Kucing",
            "Anjing",
            "Kelinci",
            "Beo"
        ]
    },

    {
        title: "Kebiasaan Buruk",
        question: "Apa kebiasaan burukku yang paling sering kulakukan?",
        choices: [
            "Tidur terlalu malam",
            "Sering lupa",
            "Terlalu banyak bermain HP",
            "Overthinking"
        ]
    },

    {
        title: "Camilan",
        question: "Camilan apa yang paling aku sukai?",
        choices: [
            "Keripik",
            "Cokelat",
            "Biskuit",
            "Permen"
        ]
    },

    {
        title: "Makanan Penutup",
        question: "Makanan penutup apa yang paling aku sukai?",
        choices: [
            "Es krim",
            "Puding",
            "Cake",
            "Donat"
        ]
    },

    {
        title: "Buah",
        question: "Buah apa yang paling aku sukai?",
        choices: [
            "Mangga",
            "Jeruk",
            "Semangka",
            "Anggur"
        ]
    },

    {
        title: "Serangga Kesukaan",
        question: "Serangga apa yang paling aku sukai?",
        choices: [
            "Kupu-kupu",
            "Lebah",
            "Capung",
            "Kepik"
        ]
    },

    {
        title: "Serangga yang Kutakuti",
        question: "Serangga apa yang paling aku takuti?",
        choices: [
            "Kecoa",
            "Belalang",
            "Laba-laba",
            "Ulat"
        ]
    },

    {
        title: "Jam Tidur",
        question: "Biasanya jam berapa aku tidur?",
        choices: [
            "Sebelum jam 9 malam",
            "Jam 9–10 malam",
            "Jam 10–12 malam",
            "Lewat tengah malam"
        ]
    },

    {
        title: "Tanaman Kesukaan",
        question: "Tanaman apa yang paling aku sukai?",
        choices: [
            "Pohon willow",
            "Pohon pinus",
            "Pohon sakura",
            "Pohon wisteria"
        ]
    },

    {
        title: "Sepatu",
        question: "Sepatu mana yang lebih mungkin kupilih?",
        choices: [
            "Sneakers",
            "Boots",
            "Sandal",
            "Flat shoes"
        ]
    },

    {
        title: "Baju",
        question: "Baju mana yang lebih mungkin kupilih?",
        choices: [
            "Hoodie/jaket",
            "Kemeja",
            "Dress",
            "Kaos"
        ]
    },

    {
        title: "Olahraga",
        question: "Olahraga apa yang paling aku sukai?",
        choices: [
            "Badminton",
            "Basket",
            "Renang",
            "Sepak bola"
        ]
    },

    {
        title: "Musim",
        question: "Musim apa yang paling aku sukai?",
        choices: [
            "Musim hujan",
            "Musim panas",
            "Musim semi",
            "Musim gugur"
        ]
    }

];


/* =====================================================
   VARIABEL
   ===================================================== */

let questions = [];

let currentCreateQuestion = 0;

let selectedCorrect = 0;

let currentQuizQuestion = 0;

let selectedAnswer = null;

let playerAnswers = [];

let playerName = "";

let creatorName = "";


/* =====================================================
   NAVIGASI HALAMAN
   ===================================================== */

function hideAllPages() {

    document.querySelectorAll(".page").forEach(page => {

        page.classList.add("hidden");

    });

}


function showCreatePage() {

    hideAllPages();

    document
        .getElementById("createPage")
        .classList.remove("hidden");

    resetCreateQuiz();

}


function showJoinPage() {

    hideAllPages();

    document
        .getElementById("joinPage")
        .classList.remove("hidden");

}


function goHome() {

    hideAllPages();

    document
        .getElementById("homePage")
        .classList.remove("hidden");

}


/* =====================================================
   MULAI MEMBUAT QUIZ
   ===================================================== */

function resetCreateQuiz() {

    questions = [];

    currentCreateQuestion = 0;

    selectedCorrect = 0;

    document.getElementById("creatorName").value = "";

    updateCreateQuestion();

}


/* =====================================================
   MENAMPILKAN SOAL SAAT MEMBUAT QUIZ
   ===================================================== */

function updateCreateQuestion() {

    const question =
        QUESTION_TEMPLATE[currentCreateQuestion];


    document.getElementById("questionTitle").textContent =
        question.title;


    document.getElementById("questionText").textContent =
        question.question;


    document.getElementById("questionNumber").textContent =
        `Soal ${currentCreateQuestion + 1} dari 20`;


    const percent =
        ((currentCreateQuestion + 1) / 20) * 100;


    document.getElementById("progressPercent").textContent =
        `${percent}%`;


    document.getElementById("progressFill").style.width =
        `${percent}%`;


    /* =========================
       BUAT PILIHAN
       ========================= */

    const container =
        document.getElementById("creatorChoices");


    container.innerHTML = "";


    question.choices.forEach((choice, index) => {

        const label =
            document.createElement("label");


        label.className =
            "creator-choice";


        label.innerHTML = `

            <input
                type="radio"
                name="correctAnswer"
                value="${index}"
                ${index === 0 ? "checked" : ""}
            >

            <span class="choice-letter">
                ${String.fromCharCode(65 + index)}
            </span>

            <span>
                ${escapeHTML(choice)}
            </span>

        `;


        container.appendChild(label);

    });


    selectedCorrect = 0;


    if (currentCreateQuestion === 19) {

        document.getElementById("createNextButton").textContent =
            "Selesai & Buat Quiz";

    } else {

        document.getElementById("createNextButton").textContent =
            "Soal Berikutnya →";

    }

}


/* =====================================================
   PILIH JAWABAN BENAR PEMBUAT
   ===================================================== */

document.addEventListener("change", event => {

    if (
        event.target.name === "correctAnswer"
    ) {

        selectedCorrect =
            Number(event.target.value);

    }

});


/* =====================================================
   SOAL BERIKUTNYA SAAT MEMBUAT
   ===================================================== */

function nextCreateQuestion() {

    const creator =
        document
            .getElementById("creatorName")
            .value
            .trim();


    if (!creator) {

        alert(
            "Masukkan nama kamu terlebih dahulu."
        );

        return;
    }


    /* Ambil radio yang dipilih */

    const selected =
        document.querySelector(
            'input[name="correctAnswer"]:checked'
        );


    if (!selected) {

        alert(
            "Pilih jawaban yang benar terlebih dahulu."
        );

        return;
    }


    selectedCorrect =
        Number(selected.value);


    /* Simpan soal */

    const template =
        QUESTION_TEMPLATE[currentCreateQuestion];


    questions.push({

        title: template.title,

        question: template.question,

        choices: [...template.choices],

        correct: selectedCorrect

    });


    /* =========================
       BELUM SELESAI
       ========================= */

    if (currentCreateQuestion < 19) {

        currentCreateQuestion++;

        updateCreateQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        return;
    }


    /* =========================
       SUDAH 20 SOAL
       ========================= */

    creatorName = creator;

    createShareLink();

}


/* =====================================================
   MEMBUAT LINK
   ===================================================== */

function createShareLink() {

    const quizData = {

        creator: creatorName,

        questions: questions

    };


    /*
        Data quiz diubah menjadi Base64
        kemudian dimasukkan ke URL.

        Tidak ada database.
    */

    const encoded = btoa(
        encodeURIComponent(
            JSON.stringify(quizData)
        )
    );


    const baseURL =
        window.location.href.split("?")[0];


    const url =
        baseURL + "?quiz=" + encoded;


    document.getElementById("shareLink").value =
        url;


    hideAllPages();

    document
        .getElementById("createdPage")
        .classList.remove("hidden");

}


/* =====================================================
   COPY LINK
   ===================================================== */

function copyQuizLink() {

    const input =
        document.getElementById("shareLink");


    navigator.clipboard
        .writeText(input.value)

        .then(() => {

            alert(
                "Link quiz berhasil disalin!"
            );

        })

        .catch(() => {

            input.select();

            document.execCommand("copy");

            alert(
                "Link quiz berhasil disalin!"
            );

        });

}


/* =====================================================
   SHARE
   ===================================================== */

function shareQuiz() {

    const url =
        document.getElementById("shareLink").value;


    if (navigator.share) {

        navigator.share({

            title:
                `Seberapa tahu kamu tentang ${creatorName}?`,

            text:
                `Coba tebak seberapa tahu kamu tentang ${creatorName}!`,

            url: url

        });

    } else {

        copyQuizLink();

    }

}


/* =====================================================
   MEMBACA QUIZ DARI URL
   ===================================================== */

function loadQuizFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const encoded =
        params.get("quiz");


    if (!encoded) {

        return false;

    }


    try {

        const decoded =
            decodeURIComponent(
                atob(encoded)
            );


        const quizData =
            JSON.parse(decoded);


        if (
            !quizData.creator ||
            !quizData.questions ||
            quizData.questions.length !== 20
        ) {

            throw new Error(
                "Quiz tidak valid."
            );

        }


        questions =
            quizData.questions;


        creatorName =
            quizData.creator;


        hideAllPages();


        document
            .getElementById("joinPage")
            .classList.remove("hidden");


        return true;


    } catch (error) {

        console.error(error);

        alert(
            "Link quiz tidak valid atau rusak."
        );

        return false;

    }

}


/* =====================================================
   MULAI MENGERJAKAN
   ===================================================== */

function startQuiz() {

    playerName =
        document
            .getElementById("playerName")
            .value
            .trim();


    if (!playerName) {

        alert(
            "Masukkan nama kamu terlebih dahulu."
        );

        return;

    }


    if (questions.length !== 20) {

        alert(
            "Quiz tidak ditemukan."
        );

        return;

    }


    currentQuizQuestion = 0;

    selectedAnswer = null;

    playerAnswers = [];


    document
        .getElementById("quizCreatorTitle")
        .textContent =
        `Tentang ${creatorName}`;


    hideAllPages();


    document
        .getElementById("quizPage")
        .classList.remove("hidden");


    displayQuizQuestion();

}


/* =====================================================
   TAMPILKAN SOAL
   ===================================================== */

function displayQuizQuestion() {

    const question =
        questions[currentQuizQuestion];


    document
        .getElementById("quizCounter")
        .textContent =
        `${currentQuizQuestion + 1} / 20`;


    document
        .getElementById("quizProgress")
        .style.width =
        `${((currentQuizQuestion + 1) / 20) * 100}%`;


    document
        .getElementById("quizQuestion")
        .textContent =
        question.question;


    const container =
        document.getElementById("quizChoices");


    container.innerHTML = "";


    selectedAnswer = null;


    question.choices.forEach(
        (choice, index) => {

            const button =
                document.createElement("button");


            button.className =
                "quiz-choice";


            button.innerHTML = `

                <span class="quiz-letter">
                    ${String.fromCharCode(65 + index)}
                </span>

                ${escapeHTML(choice)}

            `;


            button.onclick = () => {

                selectQuizAnswer(
                    index,
                    button
                );

            };


            container.appendChild(button);

        }
    );


    if (currentQuizQuestion === 19) {

        document
            .getElementById("quizNextButton")
            .textContent =
            "Selesai & Lihat Hasil";

    } else {

        document
            .getElementById("quizNextButton")
            .textContent =
            "Berikutnya →";

    }

}


/* =====================================================
   PILIH JAWABAN
   ===================================================== */

function selectQuizAnswer(
    index,
    button
) {

    selectedAnswer = index;


    document
        .querySelectorAll(".quiz-choice")
        .forEach(item => {

            item.classList.remove(
                "selected"
            );

        });


    button.classList.add(
        "selected"
    );

}


/* =====================================================
   SOAL BERIKUTNYA
   ===================================================== */

function nextQuizQuestion() {

    if (selectedAnswer === null) {

        alert(
            "Pilih salah satu jawaban terlebih dahulu."
        );

        return;

    }


    playerAnswers.push(
        selectedAnswer
    );


    if (currentQuizQuestion < 19) {

        currentQuizQuestion++;

        displayQuizQuestion();

        return;

    }


    calculateResult();

}


/* =====================================================
   HITUNG NILAI
   ===================================================== */

function calculateResult() {

    let correct = 0;

    const wrong = [];


    questions.forEach(
        (question, index) => {

            const answer =
                playerAnswers[index];


            if (
                answer === question.correct
            ) {

                correct++;

            } else {

                wrong.push({

                    number: index + 1,

                    question:
                        question.question,

                    userAnswer:
                        question.choices[answer],

                    correctAnswer:
                        question.choices[
                            question.correct
                        ]

                });

            }

        }
    );


    const score =
        correct * 5;


    showFinalResult(
        score,
        correct,
        wrong
    );

}


/* =====================================================
   HASIL AKHIR
   ===================================================== */

function showFinalResult(
    score,
    correct,
    wrong
) {

    hideAllPages();


    document
        .getElementById("finalPage")
        .classList.remove("hidden");


    document
        .getElementById("resultPlayer")
        .textContent =
        `${playerName} mengerjakan quiz tentang ${creatorName}`;


    document
        .getElementById("finalScore")
        .textContent =
        score;


    document
        .getElementById("correctCount")
        .textContent =
        correct;


    document
        .getElementById("wrongCount")
        .textContent =
        20 - correct;


    let emoji = "🥲";

    let message =
        "Masih harus mengenal lebih jauh!";


    if (score === 100) {

        emoji = "💖";

        message =
            "WOOOOW! Kamu benar-benar tahu tentangku!";

    }

    else if (score >= 80) {

        emoji = "🥰";

        message =
            "Hampir sempurna! Kamu mengenalku dengan baik!";

    }

    else if (score >= 60) {

        emoji = "😊";

        message =
            "Lumayan! Kamu cukup mengenalku.";

    }

    else if (score >= 40) {

        emoji = "😅";

        message =
            "Sepertinya kita harus lebih sering ngobrol.";

    }

    else {

        emoji = "😭";

        message =
            "Kamu benar-benar nggak tahu aku?!";

    }


    document
        .getElementById("scoreEmoji")
        .textContent =
        emoji;


    document
        .getElementById("resultMessage")
        .textContent =
        message;


    const container =
        document.getElementById(
            "wrongQuestions"
        );


    container.innerHTML = "";


    if (wrong.length > 0) {

        const title =
            document.createElement("h3");


        title.textContent =
            "Jawaban yang salah";


        title.style.marginBottom =
            "15px";


        container.appendChild(title);


        wrong.forEach(item => {

            const div =
                document.createElement("div");


            div.className =
                "wrong-item";


            div.innerHTML = `

                <strong>
                    ${item.number}.
                    ${escapeHTML(item.question)}
                </strong>

                <div class="wrong-answer">

                    Jawabanmu:
                    ${escapeHTML(
                        item.userAnswer
                    )}

                </div>

                <div class="correct-answer">

                    Jawaban benar:
                    ${escapeHTML(
                        item.correctAnswer
                    )}

                </div>

            `;


            container.appendChild(div);

        });

    }

    else {

        container.innerHTML = `

            <div class="notice">

                🎉 Semua jawabanmu benar!
                Kamu mendapatkan skor sempurna 100.

            </div>

        `;

    }

}


/* =====================================================
   MENCEGAH HTML INJECTION
   ===================================================== */

function escapeHTML(text) {

    const div =
        document.createElement("div");


    div.textContent =
        text;


    return div.innerHTML;

}


/* =====================================================
   SAAT WEBSITE DIBUKA
   ===================================================== */

window.addEventListener(
    "DOMContentLoaded",
    () => {

        const hasQuiz =
            loadQuizFromURL();


        if (!hasQuiz) {

            hideAllPages();


            document
                .getElementById("homePage")
                .classList
                .remove("hidden");

        }

    }
);