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

  // UI variables
  const timeLeft = document.querySelector('.time-left');
  const triviaForm = document.querySelector('#trivia-form');

  // UI Function
  loadUI = trivia => {
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
        const input = `<input type="radio" name="question-${questionIndex}" id="question-${questionIndex}" value="${option}"> ${option}
        `;

        inputMount.innerHTML += input;
      });
      // mount all the content created from our object
      debugger;
      questionMount.innerHTML = question;
      questionMount.append(inputMount);
      triviaForm.firstElementChild.appendChild(questionMount);
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('clicked');
  };

  loadUI(trivia);

  triviaForm.addEventListener('click', handleSubmit);
});
