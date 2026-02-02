//Practice 3.1
function one(){
    let shopingList=["Milk", "Bread", "Apple"];
    console.log(shopingList);
    console.log(shopingList.length);

    shopingList[1]="Banana";
    shopingList.splice(1,0, "Bread")
    console.log(shopingList);
}

//Practice 3.2
function two(){
    console.log("Step 1: ")
    let emptyArr=[];

    console.log("Step 2: ");
    emptyArr.push("Milk", "Bread", "Apple");
    console.log(emptyArr);

    console.log("Step 3: ");
    emptyArr.splice(1,1, "Bananas", "Eggs");

    console.log("Step 4: ");
    emptyArr.pop();
    console.log(emptyArr);

    console.log("Step 5: ");
    emptyArr.sort();
    console.log(emptyArr);

    console.log("Step 6: ");
    for(i=0; i<emptyArr.length; i++){
        if(emptyArr[i]==="Milk"){
            console.log("Milk is found at index of " + i);
            break;
        }
    }

    console.log("Step 7: ");
    emptyArr.splice(1,0, "Carrots", "Letuce");
    console.log(emptyArr);

    console.log("Step 8: ");
    newList=["Juice", "Pop"];
    console.log(newList);
    
    console.log("Step 9: ");
    addedList=[];
    addedList=emptyArr.concat(newList, newList)
    console.log(addedList);

    console.log("Step 10: ");
    let findIndex = addedList.length - 1;
    console.log(findIndex);

    console.log("Step 11: ");
    console.log(addedList);
}

//Practice 3.3
function three(){
    arr=[1,2,3];
    newArray=[arr, arr, arr];
    console.log(newArray);
    console.log(newArray[0][1]);
}

//Practice 3.4
function four(){
    myCar={
        make: 2000,
        model:"BMW",
        colour:"Black",
        engine:"V12 Twin Turbo",
        forsale:false
    }
    
    colourOfCar="colour";
    myCar[colourOfCar]="Blue"
    console.log(myCar);

    salestatus="forsale";
    myCar[salestatus]=true;
    console.log(myCar);

    console.log(myCar.make, myCar.model)
}

//Practice 3.5
function five(){
    people={
        friends:[]
    }
    let v1={
            firstname:"f1",
            lastname:"l1",
            id:1
        }
    let v2={
            firstname:"f2",
            lastname:"l2",
            id:2
        }
    let v3={
            firstname:"f3",
            lastname:"l3",
            id:3
        }
    friend="friends";
    people[friend].push(v1, v2, v3)

    console.log(people);
    console.log(people[friend]);
}

//Chapter Project
function project(){
    storeItems=[];
    item1={
        name:"Item 1",
        model:2000,
        cost:100,
        quantity:5
    }
    item2={
        name:"Item 2",
        model:2012,
        cost:200,
        quantity:10
    }
    item3={
        name:"Item 3",
        model:2020,
        cost:300,
        quantity:15
    }
    storeItems.push(item1, item2, item3);
    console.log(storeItems);

    console.log(storeItems[2].quantity);
}

//Calling Functions
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