class user {
    constructor(subject,marks) {
        this.subject=subject;
        this._marks=marks;
    }
    get marks(){
        return this._marks;
    }
    set marks(marks){
        this._marks=marks;
    }
}
const ans= new user("Maths",100);
console.log(ans.marks);