/* =====================================================
   SEBERAPA TAHU DIRIMU TENTANGKU?
   Tanpa database / backend
   ===================================================== */


/* =====================================================
   DATA SEMENTARA
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
   PAGE NAVIGATION
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
   CREATE QUIZ
   ===================================================== */

function resetCreateQuiz() {

    questions = [];

    currentCreateQuestion = 0;

    selectedCorrect = 0;

    document.getElementById("creatorName").value = "";

    clearQuestionForm();

    updateCreateProgress();
}


function clearQuestionForm() {

    document.getElementById("questionInput").value = "";

    for (let i = 0; i < 4; i++) {

        document.getElementById(`choice${i}`).value = "";

        document
            .getElementById(`correct${i}`)
            .classList.remove("selected");
    }

    selectedCorrect = 0;
}


function selectCorrect(index) {

    selectedCorrect = index;

    for (let i = 0; i < 4; i++) {

        document
            .getElementById(`correct${i}`)
            .classList.remove("selected");
    }

    document
        .getElementById(`correct${index}`)
        .classList.add("selected");
}


function updateCreateProgress() {

    const number = currentCreateQuestion + 1;

    const percent = number * 5;

    document.getElementById("questionNumber").textContent =
        `Soal ${number} dari 20`;

    document.getElementById("progressPercent").textContent =
        `${percent}%`;

    document.getElementById("progressFill").style.width =
        `${percent}%`;

    document.getElementById("questionLabel").textContent =
        `Soal ${number}`;

    if (number === 20) {

        document.getElementById("nextButtonText").textContent =
            "Selesai & Buat Quiz";

    } else {

        document.getElementById("nextButtonText").textContent =
            "Soal Berikutnya →";
    }
}


function nextCreateQuestion() {

    const name =
        document.getElementById("creatorName").value.trim();

    const question =
        document.getElementById("questionInput").value.trim();

    const choices = [];

    for (let i = 0; i < 4; i++) {

        choices.push(
            document
                .getElementById(`choice${i}`)
                .value
                .trim()
        );
    }


    /* Validasi */

    if (!name) {

        alert("Masukkan nama kamu terlebih dahulu.");

        return;
    }

    if (!question) {

        alert("Masukkan pertanyaannya.");

        return;
    }

    if (choices.some(choice => !choice)) {

        alert("Semua 4 pilihan harus diisi.");

        return;
    }


    /* Simpan soal */

    questions.push({

        question: question,

        choices: choices,

        correct: selectedCorrect

    });


    /* Kalau belum soal ke-20 */

    if (currentCreateQuestion < 19) {

        currentCreateQuestion++;

        clearQuestionForm();

        updateCreateProgress();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        return;
    }


    /* Kalau sudah 20 */

    creatorName = name;

    createShareLink();
}


/* =====================================================
   MEMBUAT LINK QUIZ
   ===================================================== */

function createShareLink() {

    const quizData = {

        creator: creatorName,

        questions: questions

    };


    /*
        JSON -> UTF-8 -> Base64

        Data quiz dimasukkan ke URL.
        Tidak ada server/database.
    */

    const encoded = btoa(
        encodeURIComponent(
            JSON.stringify(quizData)
        )
    );


    const url =
        window.location.href.split("?")[0] +
        "?quiz=" +
        encoded;


    document.getElementById("shareLink").value = url;

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

    navigator.clipboard.writeText(input.value)

        .then(() => {

            alert("Link quiz berhasil disalin!");

        })

        .catch(() => {

            input.select();

            document.execCommand("copy");

            alert("Link quiz berhasil disalin!");

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

            title: `Seberapa tahu kamu tentang ${creatorName}?`,

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
        new URLSearchParams(window.location.search);

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

            throw new Error("Quiz tidak valid.");

        }


        questions = quizData.questions;

        creatorName = quizData.creator;


        /* Tampilkan halaman join */

        hideAllPages();

        document
            .getElementById("joinPage")
            .classList.remove("hidden");


        return true;

    } catch (error) {

        console.error(error);

        alert("Link quiz tidak valid atau rusak.");

        return false;
    }
}


/* =====================================================
   MULAI QUIZ
   ===================================================== */

function startQuiz() {

    playerName =
        document
            .getElementById("playerName")
            .value
            .trim();


    if (!playerName) {

        alert("Masukkan nama kamu terlebih dahulu.");

        return;
    }


    if (!questions.length) {

        alert("Quiz tidak ditemukan.");

        return;
    }


    currentQuizQuestion = 0;

    selectedAnswer = null;

    playerAnswers = [];


    document.getElementById("quizCreatorTitle").textContent =
        `Tentang ${creatorName}`;


    hideAllPages();

    document
        .getElementById("quizPage")
        .classList.remove("hidden");


    displayQuizQuestion();
}


/* =====================================================
   MENAMPILKAN SOAL
   ===================================================== */

function displayQuizQuestion() {

    const question =
        questions[currentQuizQuestion];


    document.getElementById("quizCounter").textContent =
        `${currentQuizQuestion + 1} / 20`;


    document.getElementById("quizProgress").style.width =
        `${((currentQuizQuestion + 1) / 20) * 100}%`;


    document.getElementById("quizQuestion").textContent =
        question.question;


    const choicesContainer =
        document.getElementById("quizChoices");

    choicesContainer.innerHTML = "";


    selectedAnswer = null;


    question.choices.forEach((choice, index) => {

        const button =
            document.createElement("button");

        button.className = "quiz-choice";

        button.innerHTML = `
            <span class="quiz-letter">
                ${String.fromCharCode(65 + index)}
            </span>
            ${escapeHTML(choice)}
        `;


        button.onclick = () => {

            selectQuizAnswer(index, button);

        };


        choicesContainer.appendChild(button);

    });


    const nextButton =
        document.getElementById("quizNextButton");


    if (currentQuizQuestion === 19) {

        nextButton.textContent =
            "Selesai & Lihat Hasil";

    } else {

        nextButton.textContent =
            "Berikutnya →";

    }
}


/* =====================================================
   PILIH JAWABAN
   ===================================================== */

function selectQuizAnswer(index, button) {

    selectedAnswer = index;


    document
        .querySelectorAll(".quiz-choice")
        .forEach(item => {

            item.classList.remove("selected");

        });


    button.classList.add("selected");
}


/* =====================================================
   NEXT SOAL QUIZ
   ===================================================== */

function nextQuizQuestion() {

    if (selectedAnswer === null) {

        alert("Pilih salah satu jawaban terlebih dahulu.");

        return;
    }


    playerAnswers.push(selectedAnswer);


    if (currentQuizQuestion < 19) {

        currentQuizQuestion++;

        displayQuizQuestion();

        return;
    }


    calculateResult();
}


/* =====================================================
   HITUNG HASIL
   ===================================================== */

function calculateResult() {

    let correct = 0;

    const wrong = [];


    questions.forEach((question, index) => {

        const answer =
            playerAnswers[index];


        if (answer === question.correct) {

            correct++;

        } else {

            wrong.push({

                number: index + 1,

                question: question.question,

                userAnswer:
                    question.choices[answer],

                correctAnswer:
                    question.choices[question.correct]

            });

        }

    });


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


    document.getElementById("resultPlayer").textContent =
        `${playerName} mengerjakan quiz tentang ${creatorName}`;


    document.getElementById("finalScore").textContent =
        score;


    document.getElementById("correctCount").textContent =
        correct;


    document.getElementById("wrongCount").textContent =
        20 - correct;


    let emoji = "🥲";

    let message = "Masih harus mengenal lebih jauh!";


    if (score === 100) {

        emoji = "💖";

        message =
            "WOOOOW! Kamu benar-benar tahu tentangku!";

    } else if (score >= 80) {

        emoji = "🥰";

        message =
            "Hampir sempurna! Kamu mengenalku dengan baik!";

    } else if (score >= 60) {

        emoji = "😊";

        message =
            "Lumayan! Kamu cukup mengenalku.";

    } else if (score >= 40) {

        emoji = "😅";

        message =
            "Sepertinya kita harus lebih sering ngobrol.";

    } else {

        emoji = "😭";

        message =
            "Kamu benar-benar nggak tahu aku?!";

    }


    document.getElementById("scoreEmoji").textContent =
        emoji;


    document.getElementById("resultMessage").textContent =
        message;


    const wrongContainer =
        document.getElementById("wrongQuestions");


    wrongContainer.innerHTML = "";


    if (wrong.length > 0) {

        const title =
            document.createElement("h3");

        title.textContent =
            "Jawaban yang salah";

        title.style.marginBottom = "15px";

        wrongContainer.appendChild(title);


        wrong.forEach(item => {

            const div =
                document.createElement("div");

            div.className =
                "wrong-item";


            div.innerHTML = `
                <strong>
                    ${item.number}. ${escapeHTML(item.question)}
                </strong>

                <div class="wrong-answer">
                    Jawabanmu:
                    ${escapeHTML(item.userAnswer)}
                </div>

                <div class="correct-answer">
                    Jawaban benar:
                    ${escapeHTML(item.correctAnswer)}
                </div>
            `;


            wrongContainer.appendChild(div);

        });

    } else {

        wrongContainer.innerHTML = `
            <div class="notice">
                🎉 Semua jawabanmu benar!
                Kamu mendapatkan skor sempurna 100.
            </div>
        `;

    }
}


/* =====================================================
   SECURITY / HTML ESCAPE
   ===================================================== */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* =====================================================
   SAAT HALAMAN DIBUKA
   ===================================================== */

window.addEventListener("DOMContentLoaded", () => {

    const hasQuiz =
        loadQuizFromURL();


    if (!hasQuiz) {

        hideAllPages();

        document
            .getElementById("homePage")
            .classList.remove("hidden");

    }

});