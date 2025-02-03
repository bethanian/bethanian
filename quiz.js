document.addEventListener('DOMContentLoaded', () => {
  const quizHomeScreen = document.getElementById('quiz-home-screen');
  const gameScreen = document.getElementById('game-screen');
  const endScreen = document.getElementById('end-screen');
  const startButton = document.getElementById('start-button');
  const replayButton = document.getElementById('replay-button');
  const questionElement = document.getElementById('question');
  const answerButtonsContainer = document.getElementById('answers');
  const scoreElement = document.getElementById('score');
  const finalScoreElement = document.getElementById('final-score');
  const endMessageElement = document.getElementById('end-message');
  const feedbackOverlay = document.getElementById('feedback-overlay');
  const feedbackIcon = document.getElementById('feedback-icon');
  const correctSound = document.getElementById('correct-sound');
  const incorrectSound = document.getElementById('incorrect-sound');
  const fillBlankContainer = document.getElementById('fill-blank-container');
  const confirmButton = document.getElementById('confirm-button');

  let currentQuestionIndex = 0;
  let score = 0;
  let allQuestions = [
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'ulan\'?',
      answers: ['Maylapi', 'Tambalan', 'Payak', 'Inuulit'],
      correctAnswer: 2
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'umalis\'?',
      answers: ['Inuulit', 'Tambalan', 'Maylapi', 'Payak'],
      correctAnswer: 2
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'sira-sira\'?',
      answers: ['Tambalan', 'Inuulit', 'Payak', 'Maylapi'],
      correctAnswer: 1
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'banghay-aralin\'?',
      answers: ['Payak', 'Maylapi', 'Tambalan', 'Inuulit'],
      correctAnswer: 2
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'tawag\'?',
      answers: ['Maylapi', 'Inuulit', 'Tambalan', 'Payak'],
      correctAnswer: 3
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'tinawag\'?',
      answers: ['Inuulit', 'Payak', 'Maylapi', 'Tambalan'],
      correctAnswer: 2
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'anak-dalita\'?',
      answers: ['Payak', 'Maylapi', 'Inuulit', 'Tambalan'],
      correctAnswer: 3
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'bukas-palad\'?',
      answers: ['Maylapi', 'Tambalan', 'Inuulit', 'Payak'],
      correctAnswer: 1
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'ganda\'?',
      answers: ['Maylapi', 'Inuulit', 'Payak', 'Tambalan'],
      correctAnswer: 2
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'nagbasa\'?',
      answers: ['Maylapi', 'Tambalan', 'Inuulit', 'Payak'],
      correctAnswer: 0
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'ano-ano\'?',
      answers: ['Payak', 'Tambalan', 'Inuulit', 'Maylapi'],
      correctAnswer: 2
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'kapatid\'?',
      answers: ['Inuulit', 'Payak', 'Tambalan', 'Maylapi'],
      correctAnswer: 1
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'araw\'?',
      answers: ['Maylapi', 'Inuulit', 'Payak', 'Tambalan'],
      correctAnswer: 2
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'binasa\'?',
      answers: ['Maylapi', 'Tambalan', 'Payak', 'Inuulit'],
      correctAnswer: 0
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'iba-iba\'?',
      answers: ['Tambalan', 'Maylapi', 'Inuulit', 'Payak'],
      correctAnswer: 2
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'lakas\'?',
      answers: ['Inuulit', 'Maylapi', 'Tambalan', 'Payak'],
      correctAnswer: 3
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'bata\'?',
      answers: ['Maylapi', 'Payak', 'Tambalan', 'Inuulit'],
      correctAnswer: 1
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'sinulat\'?',
      answers: ['Maylapi', 'Inuulit', 'Payak', 'Tambalan'],
      correctAnswer: 0
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'ilan-ilan\'?',
      answers: ['Tambalan', 'Inuulit', 'Maylapi', 'Payak'],
      correctAnswer: 1
    },
    {
      type: 'multiple-choice',
      question: 'Anong uri ng kayarian ng salita ang \'agaw-buhay\'?',
      answers: ['Maylapi', 'Inuulit', 'Tambalan', 'Payak'],
      correctAnswer: 2
    },
    {
      type: 'fill-blank',
      question: 'Siya ay ____lakad papunta sa paaralan.',
      options: ['um', 'nag', 'in', 'ka'],
      correctAnswer: 'nag'
    },
    {
      type: 'fill-blank',
      question: '____basa ng isang aklat si Maria.',
      options: ['nag', 'i', 'pa', 'um'],
      correctAnswer: 'nag'
    },
    {
      type: 'fill-blank',
      question: '____inom ako ng gatas.',
      options: ['in', 'um', 'ma', 'an'],
      correctAnswer: 'um'
    },
    {
      type: 'fill-blank',
      question: '____gawa ko na lahat ng aking takdang aralin.',
      options: ['mag', 'i', 'um', 'na'],
      correctAnswer: 'na'
    },
    {
      type: 'fill-blank',
      question: 'Ang mga bata ay ____lalaro sa labas.',
      options: ['um', 'ma', 'in', 'nag'],
      correctAnswer: 'nag'
    },
    {
      type: 'fill-blank',
      question: 'P____unta kami sa parke nag masaya.',
      options: ['nag', 'um', 'i', 'in'],
      correctAnswer: 'um'
    },
    {
      type: 'fill-blank',
      question: '___handa pa ako ng mga damit para sa party.',
      options: ['mag', 'um', 'in', 'i'],
      correctAnswer: 'mag'
    },
    {
      type: 'fill-blank',
      question: '____ganda ang kanyang damit.',
      options: ['ka', 'ma', 'pa', 'um'],
      correctAnswer: 'ma'
    },
    {
      type: 'fill-blank',
      question: '____luto ng masarap na ulam ang aking ina.',
      options: ['nag', 'um', 'ka', 'i'],
      correctAnswer: 'nag'
    },
    {
      type: 'fill-blank',
      question: 'T____akbo siya ng ____bilis.',
      options: ['um/ma', 'ma/i', 'i/pa', 'pa/in'],
      correctAnswer: 'um/ma'
    },
    {
      type: 'fill-blank',
      question: '____akyat ako sa hadgdanan.',
      options: ['um', 'su', 'na', 'an'],
      correctAnswer: 'um'
    },
    {
      type: 'fill-blank',
      question: 'Ang bata ay ____iyak dahil siya ay nadapa.',
      options: ['nag', 'pa', 'in', 'um'],
      correctAnswer: 'um'
    },
    {
      type: 'fill-blank',
      question: 'b____ili ako ng bagong damit.',
      options: ['na', 'um', 'i', 'pa'],
      correctAnswer: 'um'
    },
    {
      type: 'fill-blank',
      question: 'Ang aking ina ay ____luto ng masarap na ulam.',
      options: ['ka', 'um', 'nag', 'i'],
      correctAnswer: 'mag'
    },
    {
      type: 'fill-blank',
      question: 'T__alon ako sa ilog.',
      options: ['um', 'ta', 'pa', 'an'],
      correctAnswer: 'um'
    },
    {
      type: 'fill-blank',
      question: '____saya kaming magkasama.',
      options: ['ma', 'ka', 'um', 'nag'],
      correctAnswer: 'ma'
    },
    {
      type: 'fill-blank',
      question: '____bigay ako ng regalo.',
      options: ['mag', 'in', 'um', 'an'],
      correctAnswer: 'mag'
    },
    {
      type: 'fill-blank',
      question: 'L____akas ang aking katawan!',
      options: ['um', 'mag', 'ma', 'i'],
      correctAnswer: 'um'
    },
    {
      type: 'fill-blank',
      question: 'Saan ka ____punta?',
      options: ['nag', 'in', 'pa', 'um'],
      correctAnswer: 'pa'
    },
    {
      type: 'fill-blank',
      question: 'alam mo ba kung saan ____punta si Maria?',
      options: ['pa', 'um', 'ma', 'ka'],
      correctAnswer: 'pa'
    }

  ];

  let questions = [];


  function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
    gsap.fromTo(screen, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.inOut' });

  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function selectQuestions() {
    const shuffledQuestions = [...allQuestions];
    shuffleArray(shuffledQuestions);
    questions = shuffledQuestions.slice(0, 10);
  }

  function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    selectQuestions();
    showScreen(gameScreen);
    loadQuestion();
  }
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerButtonsContainer.innerHTML = '';
    fillBlankContainer.innerHTML = '';
    confirmButton.style.display = 'none';
    if (currentQuestion.type === 'multiple-choice') {
      currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer-button');
        button.dataset.index = index;
        button.onclick = (event) => selectAnswer(event);
        gsap.fromTo(button, { opacity: 0, y: 20 }, {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: 'power2.out',
          delay: index * 0.05
        });
        answerButtonsContainer.appendChild(button);
      });
    } else if (currentQuestion.type === 'fill-blank') {
      const options = currentQuestion.options;
      const question = currentQuestion.question;
      const sentenceParts = question.split('____');
      fillBlankContainer.innerHTML = sentenceParts[0];
      const select = document.createElement('select');
      select.classList.add('blank-select');
      select.value = '';
      options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
      });
      fillBlankContainer.appendChild(select);
      fillBlankContainer.innerHTML += sentenceParts[1];
      confirmButton.style.display = 'inline-block';
      confirmButton.onclick = (event) => selectAnswer(event);
    }
  }

  function selectAnswer(event) {
    const currentQuestion = questions[currentQuestionIndex];
    let selectedAnswer;
    if (currentQuestion.type === 'multiple-choice') {
      const selectedButton = event.target;
      selectedAnswer = parseInt(selectedButton.dataset.index);
      const correctAnswer = currentQuestion.correctAnswer;
      if (selectedAnswer === correctAnswer) {
        correctSound.play();
        showFeedback('correct');
        score++;
        scoreElement.textContent = score;
      } else {
        incorrectSound.play();
        showFeedback('incorrect');
      }
    }
    else if (currentQuestion.type === 'fill-blank') {
      const selectedSelect = fillBlankContainer.querySelector('.blank-select');
      selectedAnswer = selectedSelect.value;
      const correctAnswer = currentQuestion.correctAnswer;
      if (selectedAnswer === correctAnswer) {
        correctSound.play();
        showFeedback('correct');
        score++;
        scoreElement.textContent = score;
      } else {
        incorrectSound.play();
        showFeedback('incorrect');
      }
    }

    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        endGame();
      }
    }, 1000)
  }


  function showFeedback(type) {
    feedbackIcon.textContent = type === 'correct' ? '✔️' : '❌';
    feedbackIcon.style.color = type === 'correct' ? 'green' : 'red';
    feedbackOverlay.style.display = 'flex';
    gsap.fromTo(feedbackIcon, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out' });
    setTimeout(() => {
      gsap.to(feedbackIcon, { opacity: 0, duration: 0.2 });
      feedbackOverlay.style.display = 'none';
    }, 800);
  }


  function endGame() {
    finalScoreElement.textContent = score;
    endMessageElement.textContent = (score >= questions.length / 2) ? 'Galing mo!' : 'Ano yan.. Subukan mo ulit!';
    showScreen(endScreen);
  }
  startButton.addEventListener('click', startGame);
  replayButton.addEventListener('click', startGame);
});
