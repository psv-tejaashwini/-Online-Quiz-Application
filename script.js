class QuizApp {
    constructor() {
        this.questions = [
            {
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "High Tech Modern Language", 
                    "Home Tool Markup Language",
                    "Hyperlink and Text Markup Language"
                ],
                correctAnswer: 0
            },
            {
                question: "Which CSS property is used to change the text color?",
                options: [
                    "font-color",
                    "text-color",
                    "color",
                    "background-color"
                ],
                correctAnswer: 2
            },
            {
                question: "What is the correct way to declare a JavaScript variable?",
                options: [
                    "variable myVar;",
                    "var myVar;",
                    "declare myVar;",
                    "Both A and B"
                ],
                correctAnswer: 1
            },
            {
                question: "Which HTML tag is used to define an internal style sheet?",
                options: [
                    "<css>",
                    "<script>",
                    "<style>",
                    "<link>"
                ],
                correctAnswer: 2
            },
            {
                question: "What does CSS stand for?",
                options: [
                    "Computer Style Sheets",
                    "Creative Style Sheets",
                    "Cascading Style Sheets",
                    "Colorful Style Sheets"
                ],
                correctAnswer: 2
            }
        ];
        
        this.currentQuestion = 0;
        this.score = 0;
        this.timeLeft = 30;
        this.timer = null;
        this.selectedOption = null;
        
        this.initializeElements();
        this.setupEventListeners();
        this.updateDisplay();
    }
    
    initializeElements() {
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultScreen = document.getElementById('result-screen');
        
        this.startBtn = document.getElementById('start-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.restartBtn = document.getElementById('restart-btn');
        
        this.currentQuestionEl = document.getElementById('current-question');
        this.totalQuestionsEl = document.getElementById('total-questions');
        this.timerEl = document.getElementById('timer');
        this.questionText = document.getElementById('question-text');
        this.optionBtns = document.querySelectorAll('.option-btn');
        this.scoreEl = document.getElementById('score');
        this.totalScoreEl = document.getElementById('total-score');
        this.percentageEl = document.getElementById('percentage');
    }
    
    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        
        this.optionBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => this.selectOption(index));
        });
    }
    
    startQuiz() {
        this.startScreen.classList.add('hidden');
        this.quizScreen.classList.remove('hidden');
        this.loadQuestion();
        this.start