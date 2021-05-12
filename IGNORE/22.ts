
function questions(question:string,answers:any[],Correct:number) {
        this.question = question; //any string
        this.answers = answers; //must be array
        this.Correct = Correct; //index of this array
}
questions.prototype.Display = () => {
    console.log(this.question)
    for(var i=0; i<this.answers; i++) {
        console.log(this.answers[i]);
    }
}
//-
var q1 = new questions("What's my name?",['ahmad','mohammed','saad'],2);
var q2 = new questions("What's my name?",['ahmad','mohammed','saad'],2)
var q3 = new questions("What's my name?",['ahmad','mohammed','saad'],2)
var arrQ = [q1, q2, q3];
//-
arrQ[0].Display();