document.addEventListener('DOMContentLoaded', e => {
  const trivia = [
    {
      question: 'Which animal is a bird?',
      options: ['doberman', 'lion', 'anaconda', 'blue jay'],
      answer: 'blue jay'
    },
    {
      question: 'Which animal is a reptile?',
      options: ['doberman', 'lion', 'anaconda', 'blue jay'],
      answer: 'anaconda'
    }
  ];
  const correctAnswers = trivia.map(item => item.answer);
  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;
  let counter = 240;

  // UI variables
  const timeLeft = document.querySelector('.time-left');
  const triviaForm = document.querySelector('#trivia-form');

  // UI Function
  startQuiz = trivia => {
    timer = setInterval(countdown, 1000);
    clearPrevResults();
    loadUI(trivia);
  };

  countdown = () => {
    counter--;
    document.querySelector('.time-left').innerHTML = counter;
    if (counter === 0) {
      document.querySelector('.submit').click();
      console.log('ran out of time');
    }
  };

  clearPrevResults = () => {
    // Clear the previous quiz
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    document.querySelector('.container').classList.remove('hide');
    document.querySelector('.questions-body').innerHTML = '';

    const prevResults = document.querySelector('.results');
    prevResults.innerHTML = '';
  };

  loadUI = trivia => {
    document.querySelector('.timer').innerHTML = `<h5>Time Remaining:
    <span class="time-left">${counter}</span> Seconds </h5>`;

    trivia.forEach((item, index) => {
      const questionIndex = index;

      //set up the UI mounting points
      const questionMount = document.createElement('div');
      questionMount.setAttribute('class', 'question');
      const inputMount = document.createElement('div');
      inputMount.setAttribute('id', `qnum${questionIndex}`);

      // create the form contents
      const question = ` <br>
      <label for="question-${questionIndex}">${item.question}</label>`;

      item.options.forEach(option => {
        const input = `<input type="radio" name="${questionIndex}" class="question-${questionIndex}" value="${option}"> ${option}
        `;
        inputMount.innerHTML += input;
      });
      // mount all the content created from our object
      questionMount.innerHTML = question;
      questionMount.append(inputMount);
      triviaForm.firstElementChild.appendChild(questionMount);
      document.querySelector('.submit').classList.remove('hide');
    });
  };

  // GAME LOGIC
  checkAnswers = () => {
    trivia.forEach((item, index) => {
      currentIndex = index;
      [
        ...document.querySelectorAll(`input.question-${currentIndex}:checked`)
      ].forEach(input => {
        if (input.value === trivia[currentIndex].answer) {
          correct++;
        } else {
          incorrect++;
        }
      });
      unanswered = trivia.length - (incorrect + correct);
    });
  };

  showResults = () => {
    clearInterval(timer);
    // clear the container
    const container = document.querySelector('.container');
    container.classList.add('hide');
    // Grab and inster to the results div
    const result = document.querySelector('.results');
    result.innerHTML = `
    <div>
      <h3>Correct Answers: ${correct}</h3>
      <h3>Incorrect Answers: ${incorrect}</h3>
      <h3>Unanswered Questions: ${unanswered}</h3>
    </div>
    `;

    document.querySelector('.start').classList.remove('hide');

    console.log(
      `correct ${correct}, incorrect ${incorrect}, unanswered ${unanswered}`
    );
  };

  // Handle Submit
  handleSubmit = e => {
    e.preventDefault();
    checkAnswers();
    showResults();
  };

  // Load the Quiz-APP
  document.querySelector('.start').addEventListener('click', e => {
    e.preventDefault();
    e.target.classList.add('hide');
    clearPrevResults();
    startQuiz(trivia);
  });

  // Check for the answers submitted when done
  triviaForm.addEventListener('submit', handleSubmit);
});
