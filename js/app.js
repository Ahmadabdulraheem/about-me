  
'use strict';

let userName = prompt('could you please tell me what is your name?');

alert(' Welcome ' + userName + ' to our website');

let study = prompt('do you think I am still studying in university?').toLowerCase();

//console.log('Im graduted');

if(study === 'yes' || study === 'y') {
  alert('you all right! I already finished my study ');
} else if (study === 'no' || study === 'n') {
  alert('Actually I did 😇 ');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

let age = prompt('Am I underage?').toLowerCase();

//console.log('Im 25');

if(age === 'yes' || age === 'y') {
  alert('Wrong I am over 18 ');
} else if (age === 'no' || age === 'n') {
  alert('ofcourse Im not, we already said i finished the university ');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}



let field = prompt('can u tell if i am a programmer?').toLowerCase();

//console.log('yes I am');

if(field === 'yes' || field === 'y') {
  alert('correct! ^_^ ');
} else if (field === 'no' || field === 'n') {
  alert('well Im just in the begining of my journy into programming,, so its yes ');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}





let game = prompt('do you think I am a gamer?').toLowerCase();

//console.log('yes');

if(game === 'yes' || game === 'y') {
  alert('ofcourse ,, I love playng games');
} else if (game === 'no' || game === 'n') {
  alert('I do ');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}




let hobby = prompt('do I like reading?').toLowerCase();

//console.log('yes I do');

if(hobby === 'yes' || hobby === 'y') {
  alert('yes I do ');
} else if (hobby === 'no' || hobby === 'n') {
  alert('Actually I do  ');
} else {
  alert('Pease type (yes) or (no) or (y) or (n)');
}

alert ('thanks for your time ' + userName + 'see you soon 😍 ')
