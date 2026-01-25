
//Practice 2.1
function one(){
    let str1 = 'Laurence';  
    let str2 = "Svekis";  
    let val1 = undefined ; 
    let val2 = null; 
    let myNum = 1000; 

    console.log(typeof(str1))
    console.log(typeof(str2))
    console.log(typeof(val1))
    console.log(typeof(val2))
    console.log(typeof(myNum))
}

//Practice 2.2
function two(){
    var name="Haseeb";
    let age=20;
    console.log("Hi! My name is "+ name + " and I am "+ age + " years old.");
}

//Practice 2.3
function three(){
    let a = prompt("Enter value of a: ");
    let b = prompt("Enter value of b: ");

    let a_2=a*a;
    let b_2=b*b;
    let c_2=a_2+b_2;
    
    console.log("The value of a= " + a);
    console.log("The value of b= " + b);
    console.log("The value of c= " + Math.sqrt(c_2) );
}

//Practice 2.4
function four(){
    let a=2;
    let b=3;
    let c=5;

    console.log(b+a);
    console.log(a/c);

    c=c%b;
    console.log(c);
}

//Chapter Project 1
function project1(){
    let miles=prompt("Enter value in Miles: ")
    let kilometers= miles*1.60934;
    console.log("The distance of " + kilometers +"km in miles is " + miles + "m.")
}

//Calling Functions
console.log("1.Practice 1\n2.Practice 2\n3.Practice 3\n4.Practice 4\n5.Chapter Project 1");
var choice = prompt("Enter Choice: ");
choice=Number(choice);
switch(choice){
    case 1:
        one();
        break;
    case 2:
        two();
        break;
    case 3:
        three();
        break;
    case 4:
        four();
        break;
    case 5:
        project1();
        break;
    default:
        console.log("Invalid Choice.")
        
}