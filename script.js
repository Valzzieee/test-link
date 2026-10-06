// ======================================================
// SEBERAPA TAHU DIRIMU TENTANGKU?
// Static website
// Tanpa database / backend
// ======================================================


// ======================================================
// DATA 20 PERTANYAAN
// ======================================================

const QUESTION_TEMPLATE = [

    {
        title: "Makanan",

        question:
            "Apa makanan yang paling kamu sukai?",

        friendQuestion:
            "Makanan apa yang paling disukai {name}?",

        choices: [
            "Nasi goreng",
            "Mie ayam",
            "Seblak",
            "Bakso"
        ]
    },


    {
        title: "Warna",

        question:
            "Apa warna favoritmu?",

        friendQuestion:
            "Apa warna favorit {name}?",

        choices: [
            "Merah",
            "Biru",
            "Hitam",
            "Pink"
        ]
    },


    {
        title: "Game",

        question:
            "Game mana yang paling kamu sukai?",

        friendQuestion:
            "Game mana yang paling disukai {name}?",

        choices: [
            "Minecraft",
            "Roblox",
            "Mobile Legends",
            "BabyBus"
        ]
    },


    {
        title: "Minuman",

        question:
            "Minuman apa yang paling kamu sukai?",

        friendQuestion:
            "Minuman apa yang paling disukai {name}?",

        choices: [
            "Es teh",
            "Cokelat",
            "Yogurt",
            "Susu"
        ]
    },


    {
        title: "Hobi",

        question:
            "Hobi apa yang paling kamu sukai?",

        friendQuestion:
            "Hobi apa yang paling disukai {name}?",

        choices: [
            "Membaca",
            "Melukis",
            "Memasak",
            "Bermain musik"
        ]
    },


    {
        title: "Aplikasi",

        question:
            "Aplikasi mana yang paling sering kamu gunakan?",

        friendQuestion:
            "Aplikasi mana yang paling sering digunakan {name}?",

        choices: [
            "Instagram",
            "TikTok",
            "YouTube",
            "WhatsApp"
        ]
    },


    {
        title: "Yang Kutakuti",

        question:
            "Apa yang paling kamu takuti?",

        friendQuestion:
            "Apa yang paling ditakuti {name}?",

        choices: [
            "Ketinggian",
            "Kegelapan",
            "Serangga",
            "Sendirian"
        ]
    },


    {
        title: "Hewan Kesukaan",

        question:
            "Hewan apa yang paling kamu sukai?",

        friendQuestion:
            "Hewan apa yang paling disukai {name}?",

        choices: [
            "Kucing",
            "Anjing",
            "Kelinci",
            "Beo"
        ]
    },


    {
        title: "Kebiasaan Buruk",

        question:
            "Apa kebiasaan burukmu yang paling sering dilakukan?",

        friendQuestion:
            "Apa kebiasaan buruk {name} yang paling sering dilakukan?",

        choices: [
            "Tidur terlalu malam",
            "Mudah lupa",
            "Terlalu banyak bermain HP",
            "Overthinking"
        ]
    },


    {
        title: "Camilan",

        question:
            "Camilan apa yang paling kamu sukai?",

        friendQuestion:
            "Camilan apa yang paling disukai {name}?",

        choices: [
            "Keripik",
            "Cokelat",
            "Biskuit",
            "Permen"
        ]
    },


    {
        title: "Makanan Penutup",

        question:
            "Makanan penutup apa yang paling kamu sukai?",

        friendQuestion:
            "Makanan penutup apa yang paling disukai {name}?",

        choices: [
            "Es krim",
            "Puding",
            "Cake",
            "Donat"
        ]
    },


    {
        title: "Buah",

        question:
            "Buah apa yang paling kamu sukai?",

        friendQuestion:
            "Buah apa yang paling disukai {name}?",

        choices: [
            "Mangga",
            "Jeruk",
            "Semangka",
            "Anggur"
        ]
    },


    {
        title: "Serangga Kesukaan",

        question:
            "Serangga apa yang paling kamu sukai?",

        friendQuestion:
            "Serangga apa yang paling disukai {name}?",

        choices: [
            "Kupu-kupu",
            "Lebah",
            "Capung",
            "Kepik"
        ]
    },


    {
        title: "Serangga yang Kutakuti",

        question:
            "Serangga apa yang paling kamu takuti?",

        friendQuestion:
            "Serangga apa yang paling ditakuti {name}?",

        choices: [
            "Kecoa",
            "Belalang",
            "Laba-laba",
            "Ulat"
        ]
    },


    {
        title: "Jam Tidur",

        question:
            "Biasanya jam berapa kamu tidur?",

        friendQuestion:
            "Biasanya jam berapa {name} tidur?",

        choices: [
            "Sebelum jam 9 malam",
            "Jam 9–10 malam",
            "Jam 10–12 malam",
            "Lewat tengah malam"
        ]
    },


    {
        title: "Tanaman Kesukaan",

        question:
            "Tanaman apa yang paling kamu sukai?",

        friendQuestion:
            "Tanaman apa yang paling disukai {name}?",

        choices: [
            "Pohon",
            "Bunga",
            "Tanaman rambat",
            "Tanaman air"
        ]
    },


    {
        title: "Sepatu",

        question:
            "Sepatu mana yang lebih mungkin kamu pilih?",

        friendQuestion:
            "Sepatu mana yang lebih mungkin dipilih {name}?",

        choices: [
            "Sneakers",
            "Boots",
            "Sandal",
            "Flat shoes"
        ]
    },


    {
        title: "Baju",

        question:
            "Baju mana yang lebih mungkin kamu pilih?",

        friendQuestion:
            "Baju mana yang lebih mungkin dipilih {name}?",

        choices: [
            "Hoodie/jaket",
            "Kemeja",
            "Dress",
            "Kaos"
        ]
    },


    {
        title: "Olahraga",

        question:
            "Olahraga apa yang paling kamu sukai?",

        friendQuestion:
            "Olahraga apa yang paling disukai {name}?",

        choices: [
            "Badminton",
            "Basket",
            "Renang",
            "Sepak bola"
        ]
    },


    {
        title: "Musim",

        question:
            "Musim apa yang paling kamu sukai?",

        friendQuestion:
            "Musim apa yang paling disukai {name}?",

        choices: [
            "Musim hujan",
            "Musim panas",
            "Musim semi",
            "Musim gugur"
        ]
    }

];


// ======================================================
// VARIABEL
// ======================================================

let questions = [];

let creatorName = "";

let currentQuestion = 0;

let playerAnswers = [];


// ======================================================
// DAFTAR HALAMAN
// ======================================================

const pages = [

    "homePage",
    "createPage",
    "createdPage",
    "joinPage",
    "quizPage",
    "finalPage"

];


// ======================================================
// GANTI HALAMAN
// ======================================================

function hideAllPages() {

    pages.forEach(id => {

        const page =
            document.getElementById(id);

        if (page) {

            page.classList.add("hidden");

        }

    });

}


function showPage(id) {

    hideAllPages();

    const page =
        document.getElementById(id);

    if (page) {

        page.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


// ======================================================
// HOME
// ======================================================

function goToCreate() {

    showPage("createPage");


    // Salin template agar data asli
    // tidak berubah

    questions =
        JSON.parse(
            JSON.stringify(
                QUESTION_TEMPLATE
            )
        );


    currentQuestion = 0;

    creatorName = "";


    const nameInput =
        document.getElementById(
            "creatorName"
        );


    if (nameInput) {

        nameInput.value = "";

    }


    renderCreatorQuestion();

}


function goToJoin() {

    showPage("joinPage");


    const playerName =
        document.getElementById(
            "playerName"
        );


    if (playerName) {

        playerName.focus();

    }

}


// ======================================================
// MENAMPILKAN PERTANYAAN PEMBUAT
// ======================================================

function renderCreatorQuestion() {

    const question =
        questions[currentQuestion];


    if (!question) {

        return;

    }


    const title =
        document.getElementById(
            "creatorQuestionTitle"
        );


    const questionText =
        document.getElementById(
            "creatorQuestion"
        );


    const choicesContainer =
        document.getElementById(
            "creatorChoices"
        );


    const progress =
        document.getElementById(
            "creatorProgress"
        );


    if (title) {

        title.textContent =
            question.title;

    }


    if (questionText) {

        questionText.textContent =
            question.question;

    }


    if (progress) {

        progress.textContent =
            `Pertanyaan ${
                currentQuestion + 1
            } dari ${
                questions.length
            }`;

    }


    if (!choicesContainer) {

        return;

    }


    choicesContainer.innerHTML =
        "";


    question.choices.forEach(
        (choice, index) => {

            const label =
                document.createElement(
                    "label"
                );


            label.className =
                "creator-choice";


            label.innerHTML = `

                <input
                    type="radio"
                    name="creatorAnswer"
                    value="${index}"
                >

                <span class="choice-letter">
                    ${
                        String.fromCharCode(
                            65 + index
                        )
                    }
                </span>

                <span>
                    ${escapeHTML(choice)}
                </span>

            `;


            choicesContainer.appendChild(
                label
            );

        }
    );

}


// ======================================================
// NEXT PERTANYAAN PEMBUAT
// ======================================================

function nextCreatorQuestion() {

    const selected =
        document.querySelector(
            'input[name="creatorAnswer"]:checked'
        );


    if (!selected) {

        alert(
            "Pilih jawaban yang benar terlebih dahulu."
        );

        return;

    }


    questions[
        currentQuestion
    ].correctAnswer =
        Number(
            selected.value
        );


    currentQuestion++;


    // Semua selesai

    if (
        currentQuestion >=
        questions.length
    ) {

        const nameInput =
            document.getElementById(
                "creatorName"
            );


        creatorName =
            nameInput
                ? nameInput.value.trim()
                : "";


        if (!creatorName) {

            alert(
                "Masukkan namamu terlebih dahulu."
            );


            currentQuestion =
                questions.length - 1;


            return;

        }


        createShareLink();

        return;

    }


    renderCreatorQuestion();

}


// ======================================================
// ENCODE DATA QUIZ
// URL-SAFE BASE64
// ======================================================

function encodeQuizData(data) {

    const json =
        JSON.stringify(data);


    const bytes =
        new TextEncoder()
            .encode(json);


    let binary = "";


    bytes.forEach(byte => {

        binary +=
            String.fromCharCode(
                byte
            );

    });


    const base64 =
        btoa(binary);


    return base64

        .replace(
            /\+/g,
            "-"
        )

        .replace(
            /\//g,
            "_"
        )

        .replace(
            /=+$/,
            ""
        );

}


// ======================================================
// DECODE DATA QUIZ
// ======================================================

function decodeQuizData(encoded) {

    let base64 =
        encoded

            .replace(
                /-/g,
                "+"
            )

            .replace(
                /_/g,
                "/"
            );


    const remainder =
        base64.length % 4;


    if (remainder !== 0) {

        base64 +=
            "=".repeat(
                4 - remainder
            );

    }


    const binary =
        atob(base64);


    const bytes =
        Uint8Array.from(
            binary,
            char =>
                char.charCodeAt(0)
        );


    const json =
        new TextDecoder()
            .decode(bytes);


    return JSON.parse(json);

}


// ======================================================
// MEMBUAT LINK QUIZ
// ======================================================

function createShareLink() {

    const quizData = {

        creator:
            creatorName,

        questions:
            questions

    };


    const encoded =
        encodeQuizData(
            quizData
        );


    const url =
        new URL(
            window.location.href
        );


    // Hapus query lama

    url.search = "";


    // Masukkan quiz

    url.searchParams.set(
        "quiz",
        encoded
    );


    const shareLink =
        document.getElementById(
            "shareLink"
        );


    if (shareLink) {

        shareLink.value =
            url.toString();

    }


    showPage(
        "createdPage"
    );

}


// ======================================================
// COPY LINK
// ======================================================

async function copyShareLink() {

    const shareLink =
        document.getElementById(
            "shareLink"
        );


    if (!shareLink) {

        return;

    }


    try {

        await navigator.clipboard.writeText(
            shareLink.value
        );


        alert(
            "Link berhasil disalin!"
        );


    } catch (error) {

        shareLink.focus();

        shareLink.select();


        document.execCommand(
            "copy"
        );


        alert(
            "Link berhasil disalin!"
        );

    }

}


// ======================================================
// MEMBACA QUIZ DARI URL
// ======================================================

function loadQuizFromURL() {

    const url =
        new URL(
            window.location.href
        );


    const encoded =
        url.searchParams.get(
            "quiz"
        );


    // Tidak ada quiz
    // berarti buka halaman utama

    if (!encoded) {

        return false;

    }


    try {

        const quizData =
            decodeQuizData(
                encoded
            );


        // Validasi data

        if (

            !quizData ||

            typeof quizData.creator !==
                "string" ||

            !Array.isArray(
                quizData.questions
            ) ||

            quizData.questions.length !==
                20

        ) {

            throw new Error(
                "Data quiz tidak lengkap."
            );

        }


        // Validasi setiap pertanyaan

        quizData.questions.forEach(
            question => {

                if (

                    !question.title ||

                    !question.question ||

                    !question.friendQuestion ||

                    !Array.isArray(
                        question.choices
                    ) ||

                    question.choices.length !==
                        4 ||

                    typeof question.correctAnswer !==
                        "number"

                ) {

                    throw new Error(
                        "Format pertanyaan tidak valid."
                    );

                }

            }
        );


        // Simpan quiz

        questions =
            quizData.questions;


        creatorName =
            quizData.creator;


        // Tampilkan halaman
        // masukkan nama

        showPage(
            "joinPage"
        );


        return true;


    } catch (error) {

        console.error(
            "Gagal membaca quiz:",
            error
        );


        alert(
            "Link quiz tidak valid atau rusak."
        );


        return false;

    }

}


// ======================================================
// MULAI QUIZ TEMAN
// ======================================================

function startQuiz() {

    const playerNameInput =
        document.getElementById(
            "playerName"
        );


    const playerName =
        playerNameInput
            ? playerNameInput.value.trim()
            : "";


    if (!playerName) {

        alert(
            "Masukkan namamu terlebih dahulu."
        );

        return;

    }


    if (

        !questions ||

        questions.length !== 20

    ) {

        alert(
            "Quiz tidak ditemukan."
        );

        return;

    }


    currentQuestion = 0;

    playerAnswers = [];


    const title =
        document.getElementById(
            "quizCreatorTitle"
        );


    if (title) {

        title.textContent =
            `Seberapa tahu kamu tentang ${creatorName}?`;

    }


    showPage(
        "quizPage"
    );


    renderQuizQuestion();

}


// ======================================================
// MENAMPILKAN PERTANYAAN UNTUK TEMAN
// ======================================================

function renderQuizQuestion() {

    const question =
        questions[currentQuestion];


    if (!question) {

        return;

    }


    const counter =
        document.getElementById(
            "quizCounter"
        );


    const progress =
        document.getElementById(
            "quizProgress"
        );


    const questionText =
        document.getElementById(
            "quizQuestion"
        );


    const choicesContainer =
        document.getElementById(
            "quizChoices"
        );


    // Nomor

    if (counter) {

        counter.textContent =
            `${
                currentQuestion + 1
            } / ${
                questions.length
            }`;

    }


    // Progress

    if (progress) {

        const percentage =
            (
                (
                    currentQuestion + 1
                )
                /
                questions.length
            )
            *
            100;


        progress.style.width =
            `${percentage}%`;

    }


    // PERTANYAAN TEMAN

    if (questionText) {

        questionText.textContent =
            question.friendQuestion.replace(
                "{name}",
                creatorName
            );

    }


    if (!choicesContainer) {

        return;

    }


    choicesContainer.innerHTML =
        "";


    // Pilihan jawaban

    question.choices.forEach(
        (choice, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "quiz-choice";


            button.innerHTML = `

                <span class="choice-letter">

                    ${
                        String.fromCharCode(
                            65 + index
                        )
                    }

                </span>

                <span>
                    ${escapeHTML(choice)}
                </span>

            `;


            button.addEventListener(
                "click",
                () => {


                    document

                        .querySelectorAll(
                            ".quiz-choice"
                        )

                        .forEach(btn => {

                            btn.classList.remove(
                                "selected"
                            );

                        });


                    button.classList.add(
                        "selected"
                    );


                    playerAnswers[
                        currentQuestion
                    ] = index;

                }
            );


            choicesContainer.appendChild(
                button
            );

        }
    );


    // Tombol berikutnya

    const nextButton =
        document.getElementById(
            "quizNextButton"
        );


    if (nextButton) {

        nextButton.textContent =

            currentQuestion ===
            questions.length - 1

                ? "Lihat Hasil"

                : "Selanjutnya";

    }

}


// ======================================================
// NEXT PERTANYAAN TEMAN
// ======================================================

function nextQuizQuestion() {

    // Belum memilih jawaban

    if (

        playerAnswers[
            currentQuestion
        ] === undefined

    ) {

        alert(
            "Pilih salah satu jawaban terlebih dahulu."
        );

        return;

    }


    currentQuestion++;


    // Semua selesai

    if (

        currentQuestion >=
        questions.length

    ) {

        showFinalResult();

        return;

    }


    renderQuizQuestion();

}


// ======================================================
// HASIL QUIZ
// ======================================================

function showFinalResult() {

    let correct = 0;


    const wrongQuestions = [];


    questions.forEach(
        (question, index) => {

            const answer =
                playerAnswers[index];


            // BENAR

            if (

                answer ===
                question.correctAnswer

            ) {

                correct++;

            }


            // SALAH

            else {

                wrongQuestions.push({

                    question:
                        question.friendQuestion.replace(
                            "{name}",
                            creatorName
                        ),


                    yourAnswer:

                        answer !== undefined

                            ? question.choices[
                                answer
                            ]

                            : "Tidak dijawab",


                    correctAnswer:
                        question.choices[
                            question.correctAnswer
                        ]

                });

            }

        }
    );


    // 20 soal
    // 5 poin per jawaban

    const score =
        correct * 5;


    // Nama pembuat

    const resultCreatorName =
        document.getElementById(
            "resultCreatorName"
        );


    if (resultCreatorName) {

        resultCreatorName.textContent =
            creatorName;

    }


    // NILAI

    const scoreElement =
        document.getElementById(
            "finalScore"
        );


    if (scoreElement) {

        scoreElement.textContent =
            `${score}/100`;

    }


    // BENAR

    const correctElement =
        document.getElementById(
            "correctCount"
        );


    if (correctElement) {

        correctElement.textContent =
            correct;

    }


    // SALAH

    const wrongElement =
        document.getElementById(
            "wrongCount"
        );


    if (wrongElement) {

        wrongElement.textContent =
            questions.length - correct;

    }


    // SOAL SALAH

    const wrongContainer =
        document.getElementById(
            "wrongQuestions"
        );


    if (wrongContainer) {

        wrongContainer.innerHTML =
            "";


        // SEMUA BENAR

        if (
            wrongQuestions.length === 0
        ) {

            wrongContainer.innerHTML = `

                <div class="perfect-result">

                    🎉 Semua jawaban benar!

                    <br>

                    Kamu benar-benar tahu banyak
                    tentang
                    ${escapeHTML(creatorName)}!

                </div>

            `;

        }


        // ADA YANG SALAH

        else {

            wrongQuestions.forEach(
                (item, index) => {

                    const div =
                        document.createElement(
                            "div"
                        );


                    div.className =
                        "wrong-question";


                    div.innerHTML = `

                        <h3>

                            ${index + 1}.
                            ${escapeHTML(
                                item.question
                            )}

                        </h3>


                        <p>

                            Jawabanmu:

                            <strong>

                                ${escapeHTML(
                                    item.yourAnswer
                                )}

                            </strong>

                        </p>


                        <p>

                            Jawaban benar:

                            <strong>

                                ${escapeHTML(
                                    item.correctAnswer
                                )}

                            </strong>

                        </p>

                    `;


                    wrongContainer.appendChild(
                        div
                    );

                }
            );

        }

    }


    showPage(
        "finalPage"
    );

}


// ======================================================
// KEMBALI KE HOME
// ======================================================

function backToHome() {

    const cleanURL =
        window.location.origin +
        window.location.pathname;


    window.location.href =
        cleanURL;

}


// ======================================================
// AMANKAN TEKS
// ======================================================

function escapeHTML(value) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        String(value);


    return div.innerHTML;

}


// ======================================================
// SAAT WEBSITE DIBUKA
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const hasQuiz =
            loadQuizFromURL();


        if (!hasQuiz) {

            showPage(
                "homePage"
            );

        }

    }
);