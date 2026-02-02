//  Practice 1
function one(){
    let maxValue=10;
    randomValue=Math.floor(Math.random() * maxValue);
    console.log(randomValue);

    let equal=false;
   
    while(equal==false){

        userValue=prompt("Enter a Value: ");
        userValue=Number(userValue);

        if(userValue>randomValue){
            console.log("It is very High.");
        }
        else if(userValue<randomValue){
            console.log("It is very Low.");
        }
        else if(randomValue==userValue){
            equal=true;
            console.log("Your choice is Correct.");
        }
    }


}

//Practice 2
function two(){
    Counter=0;
    step=2;

    do{
        console.log(Counter);
        Counter+=step;
    }while(Counter<100)

}

//Practice 3
function three(){
    myWork=[];
    for(i=0; i<10; i++){
        let lesson;
        lesson={
            name:"lesson " + (i+1),
            status: i%2!=0 ? true : false
        }
        lesson.status=Boolean(lesson.status);
        myWork.push(lesson);
    }
    console.log(myWork);
}

//Practice 4
function four(){
    let myArr=[];
    let rows=3;
    let columns=5;
    let counter=0;

    for(let i=0; i<rows; i++){
        tempArr=[];
        for(let j=0; j<columns; j++){
            counter++;
            tempArr.push(counter);
        }
        myArr.push(tempArr);
    }

    console.table(myArr);
    console.log(myArr);
}

//Practice 5
function five(){
    let grid=[];
    let numberOfCells=64;
    let counter=0;
    var row;
    var column=8;

    for(let i=0; i<numberOfCells+1; i++){
        if(counter%column==0){
            if(row!=undefined){
                grid.push(row);
            }
            row=[];
        }
        counter++;
        tempCounter=counter;
        row.push(tempCounter);

    }

    console.table(grid);
    console.log(grid);
}

//Practice 6
function six(){
    let arr=[];
    let incrementValue=1;

    for(let i=0; i<10; i++){
        arr[i]=incrementValue;
        incrementValue++;
    }

    for(let x of arr){
        console.log(x);
    }
}

//Practice 7
function seven(){
    let car={
        colour: "Red",
        compny: "BMW",
        model: "M5"
    };

    for(property in car){
        console.log(property,":", car[property]);
    }
}

//Practice 8
function eight(){
    str= "";
    num= 3;

    
    for(let i=0; i<10; i++){
        str=i+1;
        if(str===num){
            continue;
        }
        else{
            console.log(str)
        }
    }

    for(let i=0; i<10; i++){
        str=i+1;
        if(str===num){
            break;
        }
        else{
            console.log(str)
        }
    }
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