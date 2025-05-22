var first = document.getElementById("firstNum"),
    sec = document.getElementById("secNum"),
    //rndmNumber1 = Math.floor((Math.random() * 10)),
    //rndmNumber2 = Math.floor((Math.random() * 10)),
    sButton = document.getElementById("s-button"),
    streakData = document.getElementById("streak-data"),
    usrStreak = 0,
    highScore = 0,
    highScoreData = document.getElementById("high-score-data");

function randomize(){
    // Generate two random numbers between 0 and 9
    var rndmNumber1 = Math.floor((Math.random() * 10));
    var rndmNumber2 = Math.floor((Math.random() * 10));
    //Insert Generated numbers into the page
    first.innerText = rndmNumber1;
    sec.innerText = rndmNumber2;

    //Clears the input field 
    document.getElementById("usr-answer").value = "";
}

var answerIs = {
    'correct': [
        "You're on fire!",
        "Too easy for you!",
        "Absolute slay.",
        "That brain is dangerous!",
        "Unstoppable.",
        "You ate that.",
        "Queen of math.",
        "Big brain energy!",
        "Flawless."
    ],
    'incorrect': "Hmm, try again.",
    streak: 0,
    attempts: 0
}
function updateStreak(){
    //TODO = Randomize answerIs.correct
    currentNumCount = answerIs.correct.length - 1;
    answerIs.streak >= currentNumCount ? answerIs.streak = 0 : answerIs.streak++
}

function updateUsrStreak(x){
    if (x == true){
        usrStreak++;
        streakData.style.color = '#fff';
        streakData.innerHTML = usrStreak;
    }  else {
        usrStreak = 0;
        streakData.style.color = 'red';
        streakData.innerHTML = usrStreak;
    }
}

//Notification

function notify(x){
    var notificationText = document.getElementById("notification-text-data");
    $(".notification-text").fadeOut('fast', function() {
        notificationText.innerText = x;
    });
    $('.notification-text').fadeIn();
    $('.notification').show().animate({
        top: "44%"
    },  
        {
            duration: 400,
            easing: 'easeInCubic'
        })
}

//Button

function updateScore(x){
    if (x == 'true') {
        highScore+=100;
        highScoreData.innerText = highScore;
    } else {
        highScore = highScore - 50;
        highScoreData.innerText = highScore;
    }
}

function answer() {
    var usrAnswer = document.getElementById("usr-answer").value;
    num1 = parseInt(document.getElementById("firstNum").innerText),
    num2 = parseInt(document.getElementById("secNum").innerText),
    sum = num1 + num2;

    if (parseInt(usrAnswer) == sum) {
        //Correct answer
        updateUsrStreak(true);
        updateScore('true');
        notify(answerIs.correct[answerIs.streak]);
        //$('#notification-icon').switchClass('uk-icon-ban', 'uk-icon-thumbs-up', 1, "easeInOutQuad");
        updateStreak();
        randomize(); 
    } else if (usrAnswer == "666") {
        notify("ты опять лезешь в код, дорогая?");
    } else {
        //Incorrect answer
        updateUsrStreak(false);
        updateScore('false');
        answerIs.streak = 0;
        notify(answerIs.incorrect);
        $('#notification-icon').removeClass('uk-icon-thumbs-up');
        $('.card').effect('highlight', { color: 'red' }, 300)
       
    }
}

//Initialize
highScoreData.innerText = highScore;

//start on click
document.getElementById("card-start").addEventListener("click", function (event) {
    event.stopPropagation();
    document.getElementById("card-start").style.display = "none";
    document.querySelector(".question-stack").style.display = "block";
    randomize(); 
});



