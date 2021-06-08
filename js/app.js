  
'use strict';

let userName = prompt('could you please tell me what is your name?');

alert(' Welcome ' + userName + ' to our website');

let study = prompt('do you think I am  graduated from the university?').toLowerCase();

//console.log('Im graduted');
let score = 0;
if(study === 'yes' || study === 'y') {
  alert('you all right! I already finished my study ');
   score = 1;
} else if (study === 'no' || study === 'n') {
  alert('Actually I did 😇 ');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

let age = prompt('Am I over 18 years?').toLowerCase();

//console.log('Im 25');

if(age === 'yes' || age === 'y') {
  alert(' ofcourse Im not, we already said i finished the university '); 
  score++;
} else if (age === 'no' || age === 'n') {
  alert('Wrong I am over 18');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}



let field = prompt('can u tell if i am a programmer?').toLowerCase();

//console.log('yes I am');

if(field === 'yes' || field === 'y') {
  alert('correct! ^_^ ');
  score++;
} else if (field === 'no' || field === 'n') {
  alert('well Im just in the begining of my journy into programming,, so its yes ');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}





let game = prompt('do you think I am a gamer?').toLowerCase();

//console.log('yes');

if(game === 'yes' || game === 'y') {
  alert('ofcourse ,, I love playng games');
  score++;
} else if (game === 'no' || game === 'n') {
  alert('I do ');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}




let hobby = prompt('do I like reading?').toLowerCase();

//console.log('yes I do');

if(hobby === 'yes' || hobby === 'y') {
  alert('yes I do ');
  score++;
} else if (hobby === 'no' || hobby === 'n') {
  alert('Actually I do  ');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}



//console.log('3');

for(let i = 0; i < 4 ; i++) {
  let countries = prompt('how many countries I have visted in my life?').toLowerCase();
  console.log('3 countries');

  if (countries == 3) {
  alert ('  Yes,, its correct ' );
  score++;
  break;
} else {
  if (countries < 3 ) { alert ('too low')
  
 } 
else { if (countries < 3) {
  
   } alert('too high'); }
  
 }
}
alert (' the correct answer was 3' );

var favLanguage = ['1.Chinese', '2.english', '3.french', '4.Arabic', '5.spanish', '6.japanese', '7.russian'];

for(let j = 1; j < 7 ; j++) {
   var favLanguage = prompt('choose the language you think I like the most : 1.Chinese 2.English 3.French 4.Arabic 5.spanish 6.japanese 7.russian?').toLowerCase();
  console.log('french');
  if(favLanguage === 'french') { alert ('yes,, it is the correct answer' );
  score++;
break;
    
  } else {  alert ('can you please guess again? ');
    
  }
}
alert ('It was French ^_^ ');
alert ('congrats!' + userName + 'your score is ' + score + ' out of 7' )
alert ('thanks for your time ' + userName + 'see you soon 😍 ');