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
        question:"Which of the following is a low level language?",
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
        d:"I don't know" ,
        correct: "a"
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

//define all constant variables to hold questions, answers  and submit button
const quiz= document.getElementById('quiz-board');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const aTxt = document.getElementById('a-text');
const bTxt = document.getElementById('b-text');
const cTxt = document.getElementById('c-text');
const dTxt = document.getElementById('d-text');
const button = document.getElementById('btn');
const result = document.getElementById('result');

//initialize the score and curent question 
let currentQuestion = 0
let score = 0

getQuestions()
//Display the questions
function getQuestions() {

    removeCheckedAns()

    const currentQuizNum = allQuestions[currentQuestion]

    questionEl.innerText = currentQuizNum.question
    aTxt.innerText = currentQuizNum.a
    bTxt.innerText = currentQuizNum.b
    cTxt.innerText = currentQuizNum.c
    dTxt.innerText = currentQuizNum.d
}

//remove check marks on the radio buttons
function removeCheckedAns() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
 //select answer
function selectAnswer() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
//Evaluate the level of perfomance on the quiz
var evaluatePerfomance = () => {
    if (score >= 80){
        quiz.innerHTML = `
        <div>Excellent perfomance</div>   `   
    } else if (score >= 60 && score < 80){
        quiz.innerHTML = `
        <div> You fairly passed !` } 
    }

//check if submitted answer is correct
button.addEventListener('click', () => {
    const answer = selectAnswer()
    if(answer) {
       if(answer === allQuestions[currentQuestion].correct) {
           score++;
       }

       currentQuestion++

       if(currentQuestion < allQuestions.length) {
           getQuestions()
       } else {
           quiz.innerHTML = `
           <h2>Hey Hero &#128516; You scored ${score * 20} points</h2>
           <button onclick="location.reload()">Reload</button> `
       }
    }
    evaluatePerfomance()
            /*else (score < 60){ 
            `<div>You perfomed poorly. Reload to retake teh test. </div>`
        }*/
})
