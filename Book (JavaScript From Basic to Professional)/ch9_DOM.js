//Practice 1
function one(){
    console.dir(window.document);
    console.dir(window.innerHeight);
    console.dir(window.outerHeight);

}

//Practice 2
function two(){
    console.dir(window.document.location);
    console.dir(window.document.location.protocol);
    console.dir(window.document.location.href);
}

function three(){
    document.querySelector(".output").textContent = "Haseeb";
    document.querySelector(".output").classList.add("Red");
    document.querySelector(".output").id="Tester";
    document.querySelector(".output").style.backgroundColor="Red";
    console.log(document.URL);
    document.querySelector(".output").textContent=document.URL;
}

console.log("1.Practice 1\n2.Practice 2\n3.Practice 3\n");
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
    default:
        console.log("Invalid Choice.")   
}
