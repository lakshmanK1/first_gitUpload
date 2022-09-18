//for call()
var object = {val1:10, val2:15};
function callFunc(a,b){
    return  ("value 1: "+(this.val1+a)+" ,"+"value 2 :"+(this.val2+b)); 
}
var callmethod = callFunc.call(object, 15,20);
console.log(callmethod);


//for apply()
var applyObj = {n1:10, n2:15};
function applyFunc(x,y){
    return  ("value 1: "+(this.n1+x)+" ,"+"value 2 :"+(this.n2+y)); 
}
var arr  = [15, 20];
var applymethod = applyFunc.apply(applyObj, arr);
console.log(applymethod);


//for bind()
var bindObj = {m1:10, m2:15};
function bindFunc(i1,i2){
    return  ("value 1: "+(this.m1+i1)+" ,"+"value 2 :"+(this.m2+i2)); 
}
var bindmethod = bindFunc.bind(bindObj);
console.log(bindmethod(15,20));



//student object
var Student = {age:22};
function studentFunc(){
    return ("Student Age :" + this.age);
}
var bound = studentFunc.bind(Student);
console.log(bound());



//Currying 
let hello = function(x){
    return function(y){
        console.log(x*y);
        }
    }
let heybuddy = hello(2);
heybuddy(3);

let heydude = hello(3);
heydude(10);