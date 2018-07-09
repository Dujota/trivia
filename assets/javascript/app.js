document.addEventListener('DOMContentLoaded', (e) => {
  
  const trivia = [{
    queston: "Which animal is a bird?",
    options: ["doberman", "lion", "anaconda", "blue jay"],
    answer: "blue jay"
  }];

  let userAnswers = [];

  // UI variables
  const timeLeft = document.querySelector('.time-left');
  const triviaForm = document.querySelector('#trivia-form');
 
  // UI Functions

  loadUI = (trivia) => {
  trivia.forEach((question, index) => {
    console.log(question);
    console.log(index);
    
    
  });
  }

  
  loadUI(trivia)


});