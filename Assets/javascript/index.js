//Define the array containing all questions
const allQuestions = [
    {
      question:"Which of the following is a markdown language?",
            a: "HTML",
            b: "CSS",
            c: "SQL",
            d: "Python",
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
    },
];

//define al constant variables to hold questions and answers
const quiz= document.getElementById('quiz-board')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text') 
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const button = document.getElementById('btn')

//initialize the score and curent question 
let currentQuestion = 0
let score = 0

getQuestions()

function getQuestions() {

    removeCheckedAns()

    const currentQuizNum = allQuestions[currentQuestion]

    questionEl.innerText = currentQuizNum.question
    a_text.innerText = currentQuizNum.a 
    b_text.innerText = currentQuizNum.b 
    c_text.innerText = currentQuizNum.c
    d_text.innerText = currentQuizNum.d
}

function removeCheckedAns() {
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


button.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === allQuestions[currentQuestion].correct) {
           score++;
       }

       currentQuestion++

       if(currentQuestion < allQuestions.length) {
           getQuestions()
       } else {
           quiz.innerHTML = `
           <div>You scored ${score * 20} </div>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})