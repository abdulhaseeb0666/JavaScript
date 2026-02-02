//Practice 1
function one(){

    class Person {
        constructor(firstname, lastname) {
            this.Firstname=firstname;
            this.Lastname=lastname;
        }
    }

    let person= new Person("Abdul", "Haseeb");

    console.log(person.Firstname);
    console.log(person.Lastname);

}

//Practice 2
function two(){
    class Person {

        constructor(firstname, lastname) {
            this.Firstname=firstname;
            this.Lastname=lastname;
        }
        fullname(){
            let name= this.Firstname + " " + this.Lastname
            return name;
        }
    }

    let person= new Person("Abdul", "Haseeb");

    console.log(person.Firstname);
    console.log(person.Lastname);
    console.log(person.fullname());
}

//Practice 3
function three(){
    class Animal{
        constructor(species, sound){
            this.species = species;
            this.sound = sound;
        }
        voice(){
            console.log(this.species + " " + this.sound)
        }
    }
    Animal.prototype.running = function(){
        console.log(this.species + " is Running.");
    }

    let cat = new Animal("Cat", "Meow");
    let birds = new Animal("Bird", "Chirping");

    console.log(birds.species);
    console.log(birds.sound);
    birds.voice();
    birds.running();
    console.log(cat);
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