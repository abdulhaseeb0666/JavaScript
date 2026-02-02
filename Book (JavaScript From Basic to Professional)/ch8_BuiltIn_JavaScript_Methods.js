//Practice 1
function one(){
    console.log(decodeURIComponent("How's%20it%20going%3F"));
    console.log(encodeURIComponent("How's it going?"));

    let str="It is a variable"
    encodedURL=encodeURIComponent(str);
    decodedURL=decodeURIComponent(encodedURL);

    console.log(encodedURL);
    console.log(decodedURL);

    uRL=encodeURIComponent("http://www.basescripts.com?=Hello World");
    console.log(uRL);
}

//Practice 2
function two(){
    let arr1 = ["Larry", "Mike", "Kim", "Joanne", "Larry", "Mike", "Kim", "Joanne"]; 
    function filterArr(value, index, array) { 
        return array.indexOf(value) === index;
    }
    console.log(arr1.filter(filterArr));
}

//Practice 3
function three(){
    const myArr = [1,4,5,6]; 
    const myArr1 = myArr.map(function(ele){ 
        return ele * 2; 
    }); 
    console.log(myArr1); 
    const myArr2 = myArr.map((ele)=> ele*2); 
    console.log(myArr2); 
    }


//Function 4
function four(){
    let str="thIs will be capiTalized for each word";
    console.log(str);
   
    function capitalization(string){
        let arr = string.split(" ")
        console.log(arr);
        for(let i=0; i<arr.length; i++){
            let arr2=arr[i];
            
            arr2= arr2.slice(0,1).toUpperCase() + arr2.slice(1).toLowerCase();
            console.log(arr2);
        }
    }
    capitalization(str);
}

//Function 5
function five(){
    let str="I love JavaScript"; 
    str = str.toLowerCase(); 
    let vowels = ["a","e","i","o","u"]; 
    vowels.forEach((strings,index) =>{ 
        console.log(strings); 
        str= str.replaceAll(strings,index); 
    }); 
    console.log(str);    
}

//Function 6
function six(){
    console.log(Math.PI);
    console.log(Math.ceil(5.7));
    console.log(Math.floor(5.7));
    console.log(Math.floor(Math.random() * 10));
    console.log(Math.floor(Math.random() + 1 * 10));
    console.log(Math.floor(Math.random() * 100));

    let min=10;
    let max=100;

    function randomNumber (){
        console.log (Math.floor(Math.random() * 100)) ;
    }
    console.log(randomNumber());
    for(let i=0; i<100; i++){
        randomNumber();
    }
}

//Function 7
function seven(){
    let future = new Date(2025, 11, 3); 
    console.log(future); 
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
    let day = future.getDate(); 
    let month = future.getMonth(); 
    let year = future.getFullYear(); 
    let myDate = `${months[month-1]} ${day} ${year}`; 
    console.log(myDate); 
}

console.log("1.Practice 1\n2.Practice 2\n3.Practice 3\n4.Practice 4\n5.Practice 5\n6.Practice 6\n7.Practice 7\n");
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
    default:
        console.log("Invalid Choice.")    
}