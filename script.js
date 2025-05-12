const questions = [
    {
        question: "In which year did India win their first World Cup?",
        answers:[
            {text: "A) 1992 ", correct: false},
            {text: "B) 1983 ", correct: true},
            {text: "C)2011 ", correct: false},
            {text: "D) 2003 ", correct: false},
        ]
    },
     {
        question: "How many Test Centuries did Sachin Tendulkar score?",
        answers:[
            {text: "A) 55 ", correct: false},
            {text: "B) 50 ", correct: false},
            {text: "C) 49 ", correct: false},
            {text: "D) 51 ", correct: true},
        ]
    },
    {
        question: "Which bowler has the most number of wickets in cricket history?",
        answers:[
            {text: "A) James Anderson", correct: false},
            {text: "B) Shane Warne", correct: false},
            {text: "C) Muttiah Muralitharan", correct: true},
            {text: "D) Ravichandran Ashwin", correct: false},
        ]
    },
    {
        question: "Who is known as the Rawalpindi Express?",
        answers:[
            {text: "A) Brett Lee", correct: false},
            {text: "B) Shoib Akhtar", correct: true},
            {text: "C) Wasim Akram", correct: false},
            {text: "D) Waqar Younis", correct: false},
        ]
    },
    {
       question: "Against whom, did Yuvraj Singh hit 6 sixes in an over?",
       answers:[
           {text: "A) Stuart Broad", correct: true},
           {text: "B) Dale Steyn", correct: false},
           {text: "C) Andrew Flintoff", correct: false},
           {text: "D) Mitchell Johnson", correct: false},
       ]
   },
   {
      question: "Which captain has won the most number of ICC Trophies?",
      answers:[
          {text: "A) Clive Lloyd", correct: false},
          {text: "B) MS Dhoni", correct: false},
          {text: "C) Pat Cummins", correct: false},
          {text: "D) Ricky Ponting", correct: true},
      ]
  },
  {
     question: "Which country hosted the 2019 Cricket World Cup?",
     answers:[
         {text: "A) South Africa", correct: false},
         {text: "B) Australia & New Zealand", correct: false},
         {text: "C) England & Wales", correct: true},
         {text: "D) India", correct: false},
     ]
 },
 {
    question: "Which team won the 2018 IPL Trophy?",
    answers:[
        {text: "A) Kolkata Knight Riders", correct: false},
        {text: "B) Chennai Super Kings", correct: true},
        {text: "C) Mumbai Indians", correct: false},
        {text: "D) Sunrisers Hyderabad", correct: false},
    ]
},
{
   question: "Who was the highest run-scorer in the 2023 Cricket World Cup?",
   answers:[
       {text: "A) Rohit Sharma", correct: false},
       {text: "B) Quinton de Kock", correct: false},
       {text: "C) David Warner", correct: false},
       {text: "D) Virat Kohli", correct: true},
   ]
},
{
   question: "Which wicketkeeper has the most number of stumpings in all formats?",
   answers:[
       {text: "A) MS Dhoni", correct: true},
       {text: "B) Adam Gilchrist", correct: false},
       {text: "C) Kumar Sangakara", correct: false},
       {text: "D) Jos Butler ", correct: false},
   ]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAanswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAanswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }

Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton,innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
    });
startQuiz();

