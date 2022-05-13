//This connects the javascript elements with the html
const userName = document.getElementById('userName');
const userInput = document.getElementById('userInput');
const question = document.getElementById('question');
const userQuestion = document.getElementById('userQuestion');
const magicReply = document.getElementById('magicReply');
const queryBox = document.getElementById('queryBox');
const answerBox = document.getElementById('answerBox');
const eightBallImg = document.getElementById('eightBallImg');


//Eight-ball functionality
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

//Event Listeners
const submitBut = document.getElementById('submitBut');
submitBut.onclick = () => {
    switch (randomNumber) {
        case 1:
            eightBall = 'It is certain';
            eightBallImg.src = "./resources/images/magic/magic8ball_certain.png";
            break;
        case 2:
            eightBall = 'It is decidedly so';
            eightBallImg.src = "./resources/images/magic/magic8ball_decidely.png";
            break;
        case 3:
            eightBall = 'Reply hazy try again';
            eightBallImg.src = "./resources/images/magic/magic8ball_hazyTryAgain.png";
            break;
        case 4:
            eightBall = 'Cannot predict now';
            eightBallImg.src = "./resources/images/magic/magic8ball_cannotPredict.png";
            break;
        case 5:
            eightBall = 'Do not count on it';
            eightBallImg.src = "./resources/images/magic/magic8ball_dontCount.png";
            break;
        case 6:
            eightBall = 'My sources say no';
            eightBallImg.src = "./resources/images/magic/magic8ball_sourcesNo.png";
            break;
        case 7:
            eightBall = 'Outlook not so good';
            eightBallImg.src = "./resources/images/magic/magic8ball_outlookNotGood.png";
            break;
        case 0:
            eightBall = 'Signs point to yes';
            eightBallImg.src = "./resources/images/magic/magic8ball_pointYes.png";
            break;
        default:
            eightBall = 'Concentrate and try again';
            eightBallImg.src = "./resources/images/magic/magic8ball_againLater.png";
    }
    userQuestion.innerHTML = `${userName.value} asked the 8-ball: ${question.value}?`;
    magicReply.innerHTML = `The magic 8-ball says: ${eightBall}`;
    function hideInput() {
        userInput.style.display = 'none'
    };
    function showAnsBox() {
        answerBox.style.display = 'flex';
        queryBox.style.display = 'none';
    }
    showAnsBox();
    hideInput();
}