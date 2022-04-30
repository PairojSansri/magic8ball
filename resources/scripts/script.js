//This connects the javascript elements with the html
const userName = document.getElementById('userName');
const question = document.getElementById('question');

//Eight-ball functionality
console.log(`${userName} ask the 8-ball ${question}?`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
    case (1):
        console.log('It is certain');
        break;
    case 2:
        console.log('It is decidedly so');
        break;
    case 3:
        console.log('Reply hazy try again');
        break;
    case 4:
        console.log('Cannot predict now');
        break;
    case 5:
        console.log('Do not count on it');
        break;
    case 6:
        console.log('My sources say no');
        break;
    case 7:
        console.log('Outlook not so good');
        break;
    case 0:
        console.log('Signs point to yes');
        break;
    default:
        console.log('Please try again');
}

//Answers 

//Event Listeners
const submitBut = document.getElementById('submitBut');
submitBut.onclick = alert('clicked');