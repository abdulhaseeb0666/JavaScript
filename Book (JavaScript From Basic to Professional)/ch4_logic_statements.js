//Practice 1
function one(){
    var value=true;
    console.log(value);

    if(value==true){
        console.log("THe variable is True.");
    }
    if(value!=true){
        console.log("The variable is not true.");
    }
}

//Practice 2
function two(){
    let age=prompt("Enter Age: ");
    age=Number(age);
    console.log(typeof(age))
    console.log(age);

    if(age>21){
        console.log("You can enter the venue an buy Alcohol.");
    }
    else if(age>19){
        console.log("You can enter the venue but cannot purchase alcohol.");
    }
    else{
        console.log("You can neither enter the venue nor purchase alcohol. ")
    }
}

//Practice 3
function three(){
    let age=prompt("Enter Age: ");
    age=Number(age);
    console.log(typeof(age))
    console.log(age);

    let check = age<18 ? "Denied" : age>=20 ? "Allowed" : "Unknown"
    console.log(check)
}

//Practice 4
function four(){
    let variable=Math.floor(Math.random() * 5);
    console.log(variable);

    switch(variable){
        case 0:
            console.log("Zero.");
            break;
        case 1:
            console.log("One.");
            break;
        case 2:
            console.log("Two.");
            break;
        case 3:
            console.log("Three.");
            break;
        case 4:
            console.log("Four.");
            break;
        case 5:
            console.log("Five.");
            break;
        default:
            console.log("Number is greater than 5");
            break;
    }

}

//Practice 5
function five(){
    let prize="";
    let userSelection=prompt("Enter a number between 1 and 5: ");
    userSelection=Number(userSelection);

    switch(userSelection){
        case 1:
            prize="toffee";
            break;
        case 2:
            prize="candy";
            break;
        case 3:
            prize="Lays";
            break;
        case 4:
            prize="Biscuits";
            break;
        case 5:
            prize="Nimko";
            break;
        default:
            prize="Nothing";
            break;
    }

    console.log("You Selected the number "+ userSelection + " and you prize is " + prize);
}

//Friend Checker Game
function project(){
    let name=prompt("Enter a name: ");
    console.log(name);

    switch(name){
        case "Imran":
        case "Kamran":
        case "Farhan":
            console.log("He is Friend. ");
            break;
        default:
            console.log("Unknown Name. ");
            break;
    }
}

console.log("1.Practice 1\n2.Practice 2\n3.Practice 3\n4.Practice 4\n5.Practice 5\n6.Chapter Project");
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
        project();
        break;
    default:
        console.log("Invalid Choice.")    
}