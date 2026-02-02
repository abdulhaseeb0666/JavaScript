//Practice 1
function one(){
    console.dir(document);
}

//Practice 2
function two(){
    console.log(document.getElementById("name"));
}

//Practice 3
function three(){

    let arr1;
    arr1 = document.getElementsByTagName("div");
    console.log(arr1);
    console.log(arr1[1]);
}

//Practice 4
function four(){
    let arr1=document.getElementsByClassName("same");
    console.log(arr1)
    for(let i=0; i<3; i++){
        console.log(arr1[i]);
    }
}

//Practice 5
function five(){
    let sameClass = document.querySelector(".heading");
    console.log(sameClass)
}

//Practice 6
function six(){
    let sameClass = document.querySelectorAll(".heading");
    console.log(sameClass);
    for(let i=0; i<4; i++){
        console.log(sameClass[i]);
    }
}

//Practice 7
function seven(){
    console.log("Click button for Practice 7.")
}
function message(para){
    console.log("Hello from " + para.innerText);
}

//Practice 8
function eight(){
    let arrNames=["Haseeb", "Ali", "Arshad", "Rashid", "Imran"];
    let html = "<h1>My Table</h1><table>"
    function build(){
        arrNames.forEach((item, index) => {
            html += "<tr data-row='${index+1}' data-names='${item}'> <td>${item}</td>";
            html += "<td>${index+1}</td></tr>";
        })
        html+="</table>";
    }
    document.querySelectorAll("output").innerHTML = html;

    function getData(){
        let temp = el.getAttribute("data-row");
        let tempName = el.getAttribute("data-name");
        message.innerHTML = "${tempName} is a row ${temp}";
    }

    build();
}

//Practice 9
function nine(){
    console.log("Click any button to See Practice 9")
    let buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {console.log("You clicked " + btn.innerText);});
    });
}

//Practice 10
function ten(){
    document.getElementById("addNew").addEventListener("click", ()=>{addone()});
    function addone(){
        let newItem = document.getElementById("addItem");
        let newItemValue = newItem.value;
        let li = document.createElement("li");
        li.innerText = newItemValue;
        document.getElementById("sList").appendChild(li);
        newItem.value = "";
    }
}

console.log("1.Practice 1\n2.Practice 2\n3.Practice 3\n4.Practice 4\n5.Practice 5\n6.Practice 6\n7.Practice 7\n8.Practice 8\n9.Practice 9\n10.Practice 10\n");
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
    case 9:
        nine();
        break;
    case 10:
        ten();
        break;
    default:
        console.log("Invalid Choice.")    
}