document.addEventListener("DOMContentLoaded", e => {
  const trivia = [
    {
      question: "Which animal is a bird?",
      options: ["doberman", "lion", "anaconda", "blue jay"],
      answer: "blue jay"
    },
    {
      question: "Which animal is a bird?",
      options: ["doberman", "lion", "anaconda", "blue jay"],
      answer: "blue jay"
    }
  ];

  let userAnswers = [];

  // UI variables
  const timeLeft = document.querySelector(".time-left");
  const triviaForm = document.querySelector("#trivia-form");
  const question = document.querySelector(".question");

  // UI Functions

  loadUI = trivia => {
    trivia.forEach((item, index) => {
      questionIndex = index;
      label = `<div id='${}' >
        <label htmlFor="trivia">${item.question}</label> <br>
        ${item.options.forEach(option => {
          debugger;

          document.querySelector(
            `#${questionIndex}`
          ).innerHTML += `<input type="radio" name=${questionIndex} value=${option} /> ${option}`;
        })}
        </div> `;
      question.innerHTML += label;

      debugger;
    });
  };

  loadUI(trivia);
});
