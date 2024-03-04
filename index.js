// Your code here
//create array of questions
var questionsArr = [ 
    {
        question: 'In what country was volleyball invented?',
        answer: 'USA',
        options: [
            'Greece',
            'USA',
            ]
    
    },
    {
        question: 'How many players are on the court at one time?',
        answer: '12',
        options: [
            '10',
            '12',
            ]
    
    },
    {
        question: 'Which player should touch the ball every time your team has the ball?',
        answer: 'Setter',
        options: [
            'Setter',
            'Hitter',
            ]
    
    },
    {
        question: 'What is another name for the left front row position',
        answer: 'Outside Hitter',
        options: [
            'Outside Hitter',
            'Left Front Blocker',
            ]
    
    },
    {
        question: 'If the server steps on the end line while serving, this is considered what?',
        answer: 'Foot Fault',
        options: [
            'Infraction',
            'Foot Falt',
            ]

    },  
]
console.log(questionsArr)

    //div element provided
const quizContainer = document.getElementById('quiz')

var currentQuestion = 0
var numCorrect = 0
var timer;
var correctAnswer;
var score = 0
var remainingTime = 0

var startBtn = document.createElement("button")

function startQuiz()  {      
    //on page load check check if plalyer played before
        //if previous score ,user has played before
        var score = 0
        questText = 0
        var numCorrect = 0
        quizContainer.innerHTML = ""
        
        var prevScore = localStorage.getItem('prevScore') 
        if (prevScore) {
            var prevScoreEl = document.createElement('p');
            prevScoreEl.textContent = ('Previous Score = ' + prevScore + '%');
            quizContainer.appendChild(prevScoreEl); 
            console.log(prevScore) 
        } 
        //display start button
        startBtn.setAttribute('id', 'start-quiz');
        startBtn.textContent = 'Start Quiz!';
        quizContainer.appendChild(startBtn);      
} 

//START button with attribut of 'start-quiz'
startBtn.onclick = function() {
        
        //delay 3 seconds before starting
        setTimeout(() => {
            // 3 second delay here before running next line
        }, 3000)
        displayQuestion();
}
        
function displayQuestion() {
        
        quizContainer.innerHTML = "" //clear current question
        if (currentQuestion >= questionsArr.length) {
            endGame(); //end game function
            return; //done with loop
        }
            console.log([currentQuestion])//where in the array
        
        //display question
        var quesText = document.createElement('p')
        quesText.setAttribute('id', 'Question');
        
        quizContainer.appendChild(quesText)
        quesText.textContent = "Question";
        console.log('after startbn')
        
        console.log(questionsArr[currentQuestion].question)
        //show question on page
        quesText.textContent = (questionsArr[currentQuestion].question);
        //display buttons
        var optionBtn1= document.createElement("button")
        var optionBtn2= document.createElement("button")
        optionBtn1.setAttribute = ('id', 'option1');
        optionBtn2.setAttribute = ('id', 'option2');

        optionBtn1.textContent = (questionsArr[currentQuestion].options[0])
        optionBtn1.addEventListener("click", handleOptionClick);
    
        optionBtn2.textContent = (questionsArr[currentQuestion].options[1])
        optionBtn2.addEventListener("click", handleOptionClick); 
            
        console.log(optionBtn1, optionBtn2)
        quiz.appendChild(optionBtn1);
        quiz.appendChild(optionBtn2);
        

        //function button(s) click to select each option
        var correctAnswer = (questionsArr[currentQuestion].answer);
            
        //};
        
        function handleOptionClick (e) {
            const selectedAnswer = e.target.textContent;
            const correctAnswer = questionsArr[currentQuestion].answer;

        if (selectedAnswer === correctAnswer) {
            numCorrect++;
            console.log('Correct!');
            // clear the timer
            //clearQuestion()
            
            //runTimer()
        } else {
            console.log('incorrect!');
            //clearQuestion()

        }
        clearQuestion()
        // quiz.textContent = ''; // clear the current question and options
       
        } 
        
        runTimer()       
}

function clearQuestion() {
    clearInterval(remainingTime);
    quizContainer.textContent = ''; // clear the current question and options
    currentQuestion++;
    displayQuestion(); // Display the next question or score
}
function runTimer() {
        
        //var remainingTime = document.createElement('timer')
        
        var remainingTimeEl = document.createElement('p');
    
        var counter = 30;
        remainingTime = setInterval(function(){
        remainingTimeEl.textContent = counter;
        quizContainer.appendChild(remainingTimeEl); 
        console.log(counter);
        counter--;
        if (counter === 0) {
            clearInterval(remainingTime);
            clearQuestion()   
        }
        }, 1000);
  
}

function endGame() {
    var scoreEl = document.createElement('p')
    var score = ((numCorrect / questionsArr.length) * 100);
   
    scoreEl.textContent = ('Final Score = ' + score + '%');
    quizContainer.appendChild(scoreEl); 
    console.log(scoreEl) 
    startQuiz()
    localStorage.setItem("prevScore", score);
}
	//Pass score to previous score. Use local storage.
    

startQuiz()


    



