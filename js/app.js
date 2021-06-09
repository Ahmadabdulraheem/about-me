'use strict';
let score = 0;
// let userName = prompt('could you please tell me what is your name?');

// alert(' Welcome ' + userName + ' to our website');

// let study = prompt('do you think I am  graduated from the university?').toLowerCase();

// //console.log('Im graduted');
// let score = 0;
// if(study === 'yes' || study === 'y') {
//   alert('you all right! I already finished my study ');
//   score = 1;
// } else if (study === 'no' || study === 'n') {
//   alert('Actually I did 😇 ');
// } else {
//   alert('Pease type (yes) or (no) or (y) or (n)');
// }

// let age = prompt('Am I over 18 years?').toLowerCase();

// //console.log('Im 25');

// if(age === 'yes' || age === 'y') {
//   alert(' ofcourse I am, we already said i finished the university ');
//   score++;
// } else if (age === 'no' || age === 'n') {
//   alert('Wrong I am over 18');
// } else {
//   alert('Pease type (yes) or (no) or (y) or (n)');
// }



// let field = prompt('can u tell if i am a programmer?').toLowerCase();

// //console.log('yes I am');

// if(field === 'yes' || field === 'y') {
//   alert('correct! ^_^ ');
//   score++;
// } else if (field === 'no' || field === 'n') {
//   alert('well Im just in the begining of my journy into programming,, so its yes ');
// } else {
//   alert('Pease type (yes) or (no) or (y) or (n)');
// }





// let game = prompt('do you think I am a gamer?').toLowerCase();

// //console.log('yes');

// if(game === 'yes' || game === 'y') {
//   alert('ofcourse ,, I love playng games');
//   score++;
// } else if (game === 'no' || game === 'n') {
//   alert('I do ');
// } else {
//   alert('Pease type (yes) or (no) or (y) or (n)');
// }




// let hobby = prompt('do I like reading?').toLowerCase();

// //console.log('yes I do');

// if(hobby === 'yes' || hobby === 'y') {
//   alert('yes I do ');
//   score++;
// } else if (hobby === 'no' || hobby === 'n') {
//   alert('Actually I do  ');
// } else {
//   alert('Pease type (yes) or (no) or (y) or (n)');
// }



// //console.log('3');

// for(let i = 0; i < 4 ; i++) {
//   let countries = prompt('how many countries I have visted in my life?').toLowerCase();
//   console.log('3 countries');

//   if (countries == 3) {
//     alert ('  Yes,, its correct ' );
//     score++;
//     break;
//   } else {
//     if (countries < 3 ) { alert ('too low');

//     }
//     else { if (countries < 3) {

//     } alert('too high'); }

//   }
// }
// alert (' the correct answer was 3' );

// let favLanguage = ['1.Chinese', '2.english', '3.french', '4.Arabic', '5.spanish', '6.japanese', '7.russian'];

// for(let j = 1; j < 7 ; j++) {
//   favLanguage = prompt('choose the language you think I like the most : 1.Chinese 2.English 3.French 4.Arabic 5.spanish 6.japanese 7.russian?').toLowerCase();
//   console.log('french');
//   if(favLanguage === 'french') { alert (' yes,, it is the correct answer' );
//     score++;
//     break;

//   } else { alert ('can you please guess again? ');

//   }
// }
// alert ('It was French ^_^ ');
// alert (' congrats!' + userName + ' your score is ' + score + '  out of 7' );
// alert (' thanks for your time ' + userName + ' see you soon 😍 ');

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
