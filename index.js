// Your code here
//create array of questions
var questionArr = [ 
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
        answer: 'Foot Falt',
        options: [
            'Infraction',
            'Foot Falt',
            ]

    },  
]
console.log(questionArr)

    //div element
const quiz = document.getElementById('quiz')

 //consturct previous score
var prevScore = document.createElement("previous-Score")
prevScore.setAttribute('content', 'text content')
prevScore.textContent = 'previoous score'
console.log(prevScore)


localStorage.setItem(prevScore, '%')
 
    //construct button element
const startBtn = document.createElement("button")
startBtn.setAttribute('id', 'start-quiz');
startBtn.textContent = 'Start Quiz!';
quiz.appendChild(startBtn);


    //construct (p) element for question
var para = document.createElement('p')
para.setAttribute('id', 'Question');
quiz.appendChild(para)


//create options buttons
var optionBtn1= document.createElement("button")
var optionBtn2= document.createElement("button")
optionBtn1.setAttribute = ('id', 'option1');
optionBtn2.setAttribute = ('id', 'option2');
console.log(optionBtn1, optionBtn2);

var timer;
var correct;
var correctAnswer;
var numCorrect = 0
var selected;


    
function startQuiz() {
        //display start button

        //create and display count down clock of 10sec
       

        //on page load check check if plalyer played before
        //if previous score ,user has played before         
        if (localStorage.getItem(prevScore) > 0) {
            prevScore.textContent = ('Previous Score');
            quiz.appendChild(prevScore); 
            console.log('previous score') 
        } 
}  
//START button with attribut of 'start-quiz'
startBtn.onclick = function(e) {

        //delay 3 seconds before starting
        //create quiz h2 element
        //var intervalId = set interval(function())
        
        var numCorrect = 0;
        //display question
        para.textContent = "Question";
        console.log('after startbn')

        
       

        //for loop to display questions
        
        for (var i=0; i < questionArr.length; i++)
              //display question
            questionArr.forEach(element => { 
            //i=0
            console.log(questionArr[i].question)
            //show question on page
            para.textContent = (questionArr[i].question);
             //display buttons
            var optionBtn1= document.createElement("button")
            var optionBtn2= document.createElement("button")
            optionBtn1.setAttribute = ('id', 'option1');
            optionBtn2.setAttribute = ('id', 'option2');
            optionBtn1.textContent = (questionArr[i].options[0])
            optionBtn1.addEventListener("click", function(e){
                e.target.onclick
                console.log(optionBtn1, 'button click')
            })
            optionBtn2.textContent = (questionArr[i].options[1])
            optionBtn2.addEventListener("click", function(e) {
                e.target.onclick
                console.log(optionBtn2, 'button click 2')
            })
            console.log(optionBtn1, optionBtn2)
            quiz.appendChild(optionBtn1);
            quiz.appendChild(optionBtn2);

            //function button(s) click to select each option
           var correctAnswer = (questionArr[i].answer);
               
                choice(optionBtn1.textContent, correctAnswer);  
            
            
                choice(optionBtn2.textContent, correctAnswer);   
            //};
        
        //calculate previous score
        //divide correct answers by questionArr.length and set to questionArr.prevScore// (percentage)
       
        var score = Math.round((numCorrect / questionArr.length) * 100);
        quiz.appendChild(score)
        console.log(numCorrect, 'number correct')
        //show previous score
    });
}   
        
function choice(selected, correctAnswer) {
    if (selected == correctAnswer) {
        console.log('correct answer !')
        numCorrect++
    }
    console.log(selected)
    console.log(correctAnswer)
}


//function timer(){
     // countdown clock in quiz h2 element with 1 sec between ticks
        //after the timer reacher 0 make h2 read "times up"
        // one sect after that move on to next qustion.
//}
//var intervalId = setInterval(function(){}
    



