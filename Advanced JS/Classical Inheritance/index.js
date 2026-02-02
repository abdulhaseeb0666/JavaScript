class User {
    constructor(name, city, age, username, password) {
        this.name = name;
        this.city = city;
        this.age = age;
        this.role = "User";
        this.username = username;
        this.password = password;
    }

    write(text){
        let h1 = document.createElement('h1');
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User {
    constructor(name, city, age, username, password) {
        super(name, city, age, username, password);
        this.role = "Admin";
    }

    erase(){
        let h1 = document.querySelectorAll('h1');
        h1.forEach(element => {
            element.remove();
        });
    }
}

let user1 = new User('John Doe', 'New York', 30, 'admin', 'johndoe', 'password123');
let user2 = new User('Jane Smith', 'Los Angeles', 25, 'user', 'janesmith', 'password456');
let admin = new Admin('Alice Johnson', 'Chicago', 35, 'superadmin', 'alicejohnson', 'adminpass'); 
