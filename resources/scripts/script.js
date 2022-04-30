//This connects the javascript elements with the html
const userName = document.getElementById('userName');
const question = document.getElementById('question');
const userQuestion = document.getElementById('userQuestion');
const magicReply = document.getElementById('magicReply');

//Eight-ball functionality
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
    case 1:
        eightBall = 'It is certain';
        break;
    case 2:
        eightBall = 'It is decidedly so';
        break;
    case 3:
        eightBall = 'Reply hazy try again';
        break;
    case 4:
        eightBall = 'Cannot predict now';
        break;
    case 5:
        eightBall = 'Do not count on it';
        break;
    case 6:
        eightBall = 'My sources say no';
        break;
    case 7:
        eightBall = 'Outlook not so good';
        break;
    case 0:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = 'Please try again';
}

//Event Listeners
const submitBut = document.getElementById('submitBut');
submitBut.onclick = () => {
    userQuestion.innerHTML = `${userName.value} asked the 8-ball: ${question.value}?`;
    magicReply.innerHTML = `The magic 8-ball says: ${eightBall}`;
}