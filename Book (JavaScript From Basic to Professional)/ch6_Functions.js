//Practice 1
function one(){

    function add(a,b){
        return a+b;
    }

    let x=5;
    let y=7;
    console.log(add(x,y));
}

//Practice 2
function two(){
    let arr=["I", "am", "Student"]

    function promptUser(){
        let a=prompt("Enter a Word: ");
        return a;
    }

    let index=Math.floor(Math.random(0, 3));
    let randomWord=arr[index];

    console.log(randomWord, promptUser());
}

//Practice 3
function three(){
    let x=Number(prompt("Enter the value of x: "));
    let y=Number(prompt("Enter the value of y: "));

    function add(a,b){
        return a+b;
    }
    function subtract(a,b){
        return a-b;
    }

    let choice=prompt("1. Add\n2. Subtract\nEnter Choice: ");
    
    if(choice == 1){
        console.log(add(x,y));
    }
    else{
        console.log(subtract(x,y));
    }
}

//Practice 4
function four(){
    let arr=[];
    
    
    function add(a,b){
        return a+b;
    }
    function subtract(a,b){
        return a-b;
    }
    
    for(let i=0; i<5; i++){
        let x=prompt("Enter the value of x: ");
        x=Number(x);
        let y=prompt("Enter the value of y: ");
        y=Number(y);
        let choice=prompt("1. Add\n2. Subtract\nEnter Choice: ");
        
        if(choice == 1){
            arr[i] = add(x,y);
        }
        else{
            arr[i] = subtract(x,y);
        }
    }

    console.log(arr);
}

//Practice 5
function five(){
    let varia="1000";

    let result = (()=>{
        let varia="2000";
        return varia
    }) ();
    console.log(result, varia);

    (function(x){
        console.log(x + " is a string in a Anonymous Function.")
    })(10);
}

//Practice 6
function six(){

    function factorial(x){
        if (x==0){
            return 1;
        }
        else{
            return x * factorial(x-1);
        }
    }
    console.log(factorial(3));
}

//Practice 7
function seven(){
    let start=10;
    start=Number(start);

    function countdown(count){
        count=Number(count);
        console.log(count);

        if(count<1){
        return count;
        }
        else{
            return countdown(count - 1);
        }
    }
    countdown(start);
}

//Practice 8
function eight(){
    arg=10;
    anyVariable= function (num){
        console.log(num);
    }

    anyVariable(arg);

    function normal(num){
        console.log(num);
    }
    normal(arg);

}

console.log("1.Practice 1\n2.Practice 2\n3.Practice 3\n4.Practice 4\n5.Practice 5\n6.Practice 6\n7.Practice 7\n8.Practice 8\n");
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
        five();
        break;
    case 6:
        six();
        break;
    case 7:
        seven();
        break;
    case 8:
        eight();
        break;
    default:
        console.log("Invalid Choice.")    
}