//Define the array containing all questions
const quizData = [
    {
      question:"Which of the following is a markdown language?",
            a: "HTML",
            b: "CSS",
            c: "SQL",
            c: "Python",
            correct:"a"
    },
    {
        question:"Which of teh follwong is the other name for JavaScript?",
        a: "ECMAJavascript", 
        b: "JS",
        c: "Es Lint",
        d: "I don't know",
        correct: "a"
    },
    {
        question:"Which of teh following is a low level language?",
        a:"Python",
        b:"C++",
        c:"Lisp",
        d:"Javascript",
        correct: "b"
    },
    {
        question: "What is the full definition of CSS?",
        a: "Cascading style sheets",
        b:"Common style sheets",
        c:"column style sheets",
        d:"I don't know" 
    },
    {
    question: "Which of the following is not an HTML element?",
    a: "source",
    b: "audio",
    c: "const",
    d: "div",
    correct: "c"
    }
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

getQuestions()

function getQuestions() {

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
           score;
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           getQuestions()
       } else {
           quiz.innerHTML = `
           <div>You scored ${score}</div>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})