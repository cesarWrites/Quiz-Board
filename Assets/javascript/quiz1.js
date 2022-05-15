const allQuestions = [
    {
        question:"Which of the following is not a python library used in machine learning?",
        a:"Pandas",
        b:"numpy",
        c:"jquery",
        d:"matplotlib",
        correct:"c"
},
    {
        question:"Which of the following is not a branch of AI",
        a:"Machine learning",
        b:"natural language processing",
        c:"Robotics",
        d:"Progressive web apps",
        correct:"d"
    },
    {
        question:"Which of the following is not a visualization library in python",
        a:"plotly",
        b:"Django",
        c:"seaborn",
        d:"matplotlib",
        correct:"b"
    },
    {
        question:"  Which of the following langauge is not widely used in data science?",
        a:"Cobol",
        b:"Python",
        c:"Lisp",
        d:"R",
        correct:"a"
    },
    {
        question:"Which one of the following is not a classification of machine learning algorithms?",
        a:"supervised learning algorithms ",
        b:"non supervised learning algorithms",
        c:"renforced learning algorithms",
        d:"Greedy algorithms",
        correct:"d"
    }
];
//define all constant variables to hold questions and answers
const quiz= document.getElementById('quiz-board')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const aTxt = document.getElementById('a-text')
const bTxt = document.getElementById('b-text')
const cTxt = document.getElementById('c-text')
const dTxt = document.getElementById('d-text')
const button = document.getElementById('btn')

//initialize the score and curent question 
let currentQuestion = 0
let score = 0

getQuestions()
//display the questions
function getQuestions() {

    removeCheckedAns()

    const currentQuizNum = allQuestions[currentQuestion];

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
    let userAnswer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            userAnswer = answerEl.id
        }
    })
    return userAnswer
}

//check if submitted answer is correct
button.addEventListener('click', () => {
    const userAnswer = selectAnswer()
    if(userAnswer) {
       if(userAnswer === allQuestions[currentQuestion].correct) {
           score++;
       }

       currentQuestion++

       if(currentQuestion < allQuestions.length) {
           getQuestions()
       } else {
           quiz.innerHTML = `
           <h2>Hey hero &#128525; you scored  ${score * 20} points </h2>

           <button onclick="location.reload()">Reload</button>`
           //evaluate the level of perfomance
           if ((score * 20) >= 80){
            result.innerHTML= 'You perfomed well';
     } else if ( (score* 20)  < 80 && (score * 20)  >= 60){
         result.innerHTML= 'fairly passed';
     } else {
         result.innerHTML ='you need to retake the quiz';
     }
       }
    }
})