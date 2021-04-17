var questionArry = $(".question")
var quizeLength = questionArry.length

let quizeArry = []
var correctAnswer = ""
var userAnser = ""
var crrectNumber = 0
var currentLevel = 1
var question = 0

for (var i = 1; i < quizeLength + 1; i++) {
    quizeArry.push($("#question" + i))
}

console.log(quizeArry)


function quize() {
    var randomNumber = Math.floor(Math.random() * quizeArry.length + 1)
   
    console.log(quizeArry)
    console.log(randomNumber-1)
    var quizeNumber = quizeArry[randomNumber - 1].attr("id")
    console.log(quizeNumber)
    question = quizeNumber

    var correct = $("#question" + randomNumber).attr("class")
    var correctSplit = correct.split(" ")
    correctAnswer = correctSplit[1]

    $("#" + quizeNumber).show()
    quizeArry.splice(randomNumber - 1, 1)

}

function checkAnswer() {
    if (userAnser === correctAnswer) {
        // console.log("正解")
        $(".right").fadeIn()
        $(".next").fadeIn()

    } else {
        // console.log("不正解")
        $(".wrong").fadeIn()
        $(".next").fadeIn()
    }
}

function answerFadein() {
    // console.log("#answer-" + question)
    $("#answer-" + question).show()
}

function reset() {
    $("#" + question).fadeOut()
    $("#answer-" + question).fadeOut()
    $(".right").fadeOut()
    $(".wrong").fadeOut()
    $(".next").fadeOut()
    correctAnswer = ""
    userAnser = ""
    crrectNumber = 0
    question = 0
}


// game start
$(document).keypress(function () {

    $(".button").fadeIn()

    reset()
    $(".level").fadeIn()

    if ( currentLevel <= 5) {
        
        $(".level").text("第" + currentLevel + "問")
        quize();

        $(".button").click(function () {
            var userChosenButton = $(this).attr("id");
            userAnser = userChosenButton;
            // console.log(userAnser)
            checkAnswer()
            answerFadein()
        })

    } else {
        $(".level").text("end")
    }

    currentLevel++
});






// var randomNumber = Math.floor(Math.random() * quizeLength +1)
// var quizeNumber = $("#question" + randomNumber).attr("id")
// var quizeRandom = questionArry.attr("id")