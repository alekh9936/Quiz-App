const myQuestions = [
    {
        question: "1) What is the capital of France?",
        answers: {
            a: "Paris",
            b: "London",
            c: "Madrid"
        },
        correctAnswer: "a"
    },
    {
        question: "2) What is the largest organ in the human body?",
        answers: {
            a: "Liver",
            b: "Lungs",
            c: "Skin"
        },
        correctAnswer: "c"
    },
    {
        question: "3) Which planet is closest to the Sun?",
        answers: {
            a: "Earth",
            b: "Mercury",
            c: "Mars"
        },
        correctAnswer: "b"
    },
    {
        question: "4) What is the smallest country in the world?",
        answers: {
            a: "San Marino",
            b: "Monaco",
            c: "Vatican City"
        },
        correctAnswer: "c"
    },
    {
        question: "5) Who is the author of The Great Gatsby?",
        answers: {
            a: "F. Scott Fitzgerald",
            b: "Ernest Hemingway",
            c: "William Faulkner"
        },
        correctAnswer: "a"
    }
];

function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

buildQuiz();

submitButton.addEventListener('click', showResults);
