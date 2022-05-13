const allQuestions = [
    {
    question: "Which of the followin is not a networking device?",
    a: "router",
    b: "switch",
    c:"bridge",
    d:"IP address",
    correct: "d"
    },
    {
        question:"Which of the following is not a classification of networks  by geographical location?",
        a:"MAN",
        b:"WAN",
        c:"OSI",
        d:"LAN"
    },
    {
        question: "Which is the third layer of teh OSI model",
        a:"network layer",
        b:"transport layer",
        c:"data link layer",
        d:"appliation layer",
        correct:"a"
    },
    {
        question:"Which of the following is not a routing protocol?",
        a:"OSPF",
        b:"MAC",
        C:"BGP",
        d:"EGP",
        correct:"b"
    },
    {
        question:"Which of the following TCP/IP protocol is used for the file transfer with \n minimal capability and minimal overhead?",
        a: "TFTP",
        b: "TELNET",
        c:"FTP",
        d:"RARP",
        correct:"a"
    }

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