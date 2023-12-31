const quizData = [
    {
        question: "Expand DBMS",
        a: "Data Backup Monitoring Systems",
        b: "Data Base Management Systems",
        c: "Distributed Business Management Software",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Expand DDL",
        a: "Data Development Language",
        b: "Dynamic Data Language",
        c: "Data Definition Language",
        d: "Data Deployment Language",
        correct: "c",
    },
    {
        question: "DBMS can able to do?",
        a: "Storing the data",
        b: "Retrieving the data",
        c: "Manupulationg the data",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Expand DCL",
        a: "Data Collective Language",
        b: "Data Control Language",
        c: "Dynamic Control Language",
        d: "Data Combine Language",
        correct: "b",
    }
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
let score2 = 0
 
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
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
 
    return answer
}
 
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
 
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score2++
        }
 
        currentQuiz++
 
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered ${score2}/${quizData.length} questions correctly</h2>`
        }
    }
})

exports ={
    score2,
};
