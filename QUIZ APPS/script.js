const quizData = [{

        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },

    {

        question: "What does PHP stand for?",
        a: "Hypertext Preprocessor",
        b: "Hypertext Programming",
        c: "Hypertext Preprogramming",
        d: "Hometext Preprocessor",
        correct: "a",

    },

    {

        question: "What does SQL stand for?",

        a: "Stylish Question Language",
        b: "Stylesheet Query Language",
        c: "Statement Question Language",
        d: "Structured Query Language",
        correct: "d",

    },
    {

        question: "What does XML stand for?",


        a: "eXtensible Markup Language",
        b: "eXecutable Multiple Language",
        c: "eXTra Multi-Program Language",
        d: "eXamine Multiple Language",
        correct: "a",
    },


    {

        question: "What Is the best editor ?",

        a: "Visual Studio Code",
        b: "Sublime",
        c: "Brackets",
        d: "Comodo edit",
        correct: "a",

    },


    {

        question: "What is high level language ?",

        a: "FORTRAN , HTML",
        b: "FORTRAN , CSS",
        c: "PASCAL , C",
        d: "FORTRAN , PASCAL",
        correct: "d",

    },

    {
        question: "What do you think about my career ?",

        a: "Back-End Web Developer",
        b: "Python Developer",
        c: "Front-End Web Developer",
        d: "UI/UX Designer",
        correct: "c",
    },


    {

        question: "What do you think about SASS?",

        a: "Programming language",
        b: "Framework",
        c: "Program",
        d: "Server",
        correct: "b",

    },


    {

        question: "What is the best website to get a job opertuinety ?",

        a: "Upwork",
        b: "Freelance",
        c: "Mostql",
        d: "Linkedin",
        correct: "d",

    },


    {

        question: "To Be a Front-End Web Developer what should you learn  ?",


        a: "Pascal, Css, Js, python",
        b: "Html, Fortran, Js, python",
        c: "Html, Css, Java, python",
        d: "Html, Css, Js, python",
        correct: "d",
    },


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
        }
    }
})