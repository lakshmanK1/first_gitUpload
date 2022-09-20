class Student{
    static student_count = 0;
    constructor(name,age,phone_number,board_marks){
        this.name=name;
        this.age=age;
        this.phone_number=phone_number;
        this.board_marks=board_marks;
        Student.student_count++;
    }
}
function validateStudent(){
        if(this.board_marks>40){
            console.log(this.name+" is Eligible to join college");
        }
        else if(this.board_marks<40){
            console.log(this.name+" is Not Eligible to join college");
        }
    }

var student1 = new Student("Rahul",22,"91705260000",39);
var student2 = new Student("Vishnu",25,"9188888888",41);
var student3 = new Student("Kiran",20,"917789554220",45);
var student4 = new Student("Nihal",19,"9178956465546",24);
var student5 = new Student("Vinay",22,"9126452654",50);

validateStudent.call(student1);
validateStudent.call(student2);
validateStudent.call(student3);
validateStudent.call(student4);
validateStudent.call(student5);
console.log(Student.student_count);