var _this = this;
function questions(question, answers, Correct) {
    this.question = question; //any string
    this.answers = answers; //must be array
    this.Correct = Correct;}//index of this array
questions.prototype.Display = function () {console.log(this.question);for (var i = 0; i < this.answers.length; i++) {console.log(this.answers[i]);}};
var q1 = new questions("Q-What's my name?", ['0-ahmad', '1-mohammed', '2-saad'], 2);var q2 = new questions("Q2-What's my name?", ['0-ahmad', '1-mohammed', '2-saad'], 2);var q3 = new questions("Q-3What's my name?", ['0-ahmad', '1-mohammed', '2-saad'], 2);var arrQ = [q1, q2, q3];var score = 0;
do {if(answersA == -1) break;var Random = Math.floor(Math.random() *3);arrQ[Random].Display();console.log("-1 -to quit");var answersA = parseInt(prompt("Enter your Answer here."));parseInt(check(answersA));}while(answersA != -1);
function check(ans) {if(ans == -1 || ans == "exit") {console.log("GoodBye!");console.log("your score is: " +score);}else if(arrQ[Random].Correct == ans) {console.log("Correct");score++;}else{console.log("Wrong");console.log("----------------");}}
