'use strict';
let score = 0;

function fiveQustions (question, answer, shortAnswer, correctAnswer, wrongAnswer) {
  let userAnswer;
  do {
    alert('Enter Yes/Y or No/N');
    userAnswer = prompt(question).toLowerCase();
  } while (userAnswer !== 'y' && userAnswer !== 'yes' && userAnswer !== 'no' &&userAnswer !== 'n');
  if (userAnswer === answer || userAnswer === shortAnswer ) {
    alert(correctAnswer);
    score++;
  } else {
    alert(wrongAnswer);
  }
}

function countries () {
  let takeGuess;
  let attempts = 0;
  do {
    takeGuess = prompt('how many countries I have visited in my life?');
    attempts++;
    // eslint-disable-next-line eqeqeq
    if (takeGuess == 3) {
      alert('Correct Answer');
      score++;
      break;
    }
    else if (takeGuess < 3) {
      alert('too low');
    }
    else if (takeGuess > 3) {
      alert('too high');
    }
    else {
      alert('please Enter a number');
    }
  } while (typeof(parseInt(takeGuess)) !== 'number' || attempts <4);
}

function liveLanguage () {
  let language = ['chinese', 'english', 'french', 'arabic', 'spanish', 'japanese', 'russian'];
  let userInput;
  outerloop : for (let i = 0; i<6; i++){
    userInput = prompt ('Enter one of the currently used language in the world').toLowerCase();
    for (let j = 0; j<language.length; j++){
      if (userInput === language[j]) {
        alert('Good Job ,Correct Answer!');
        score++;
        break outerloop;
      }
    }
    alert('Try Again!');
  }
}

let userName = prompt('could you please tell me what is your name?');
alert(' Welcome ' + userName + ' to our website');
fiveQustions('do you think I am  graduated from the university?','yes','y','you all right! I already finished my study ', 'Actually I did 😇 ');
fiveQustions('Am I over 18 years?','yes','y',' ofcourse I am, we already said i finished the university ','Wrong I am over 18');
fiveQustions('can u tell if i am a programmer?', 'yes', 'y', 'correct! ^_^ ', 'well Im just in the beginning of my journey into programming,, so its yes ');
fiveQustions('do you think I am a gamer?', 'yes', 'y', 'ofcourse ,, I love playng games', 'I do');
fiveQustions('do I like reading?', 'no' , 'n', 'Correct  ', 'Actually I don\'t  ');
countries();
liveLanguage();
alert (' congrats!' + userName + ' your score is ' + score + '  out of 7' );
alert (' thanks for your time ' + userName + ' see you soon 😍 ');
