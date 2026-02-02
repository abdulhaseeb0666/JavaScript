let user1 = {
    name : 'John Doe',
    city : 'New York',
    age : 30,
    role : 'User',
    username : 'johndoe',
    password : 'password123',
    write: function(text){ 
        let h1 = document.createElement('h1');
        h1.textContent = `${this.name} : ${text}`;
        document.body.appendChild(h1);
    },
    checkRole: function(){
        if(this.role === 'Admin'){
            console.log('You have admin privileges.');
        } else {
            console.log('You are a regular user.');
        }
    }
}

let user2 = Object.create(user1);
user2.name = 'Jane Smith';
user2.city = 'Los Angeles';
user2.age = 25;
user2.role = 'User';
user2.username = 'janesmith';
user2.password = 'mypassword';

let admin = Object.create(user1);
admin.name = 'Alice Johnson';
admin.city = 'Chicago';
admin.role = 'Admin';
admin.username = 'alicejohnson';
admin.password = 'adminpass';
admin.erase = function(){
    let h1 = document.querySelectorAll('h1');
    h1.forEach(element => {
        element.remove();
    });
}

