const quizData = [
    {
        question: "In python, a) List is Immutable b) Tuple is Mutable",
        a: "A.True B.False",
        b: "A.False B.True",
        c: "A.True B.True",
        d: "A.False B.False",
        correct: "d",
    },
    {
        question: "In Python, var = {} , var belongs to which type?",
        a: "List",
        b: "Set",
        c: "Dictionary",
        d: "tuple",
        correct: "c",
    },
    {
        question: "When did Python become a programming language?",
        a: "1990",
        b: "1991",
        c: "1992",
        d: "1993",
        correct: "b",
    },
    {
        question: "Expand IDE",
        a: "Interpreted Development Environment",
        b: "Integrated Deployment Environment",
        c: "Interpreted Deployment Environment",
        d: "Integrated Development Environment",
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
let score1 = 0
 
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
            score1++
        }
 
        currentQuiz++
 
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered ${score1}/${quizData.length} questions correctly</h2>`
        }
    }
})

exports= {
    score1,
};
