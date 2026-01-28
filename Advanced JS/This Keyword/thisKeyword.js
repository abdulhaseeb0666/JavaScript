let form = document.getElementById("form")
let username = document.getElementById("username")
let bio = document.getElementById("bio")
let description = document.getElementById("description")
let image = document.getElementById("photoURL")
let userList = document.getElementById("userList")

userManager = {
    users : [],
    currentIndex : null,

    init : function(){
        form.addEventListener("submit", this.submitForm.bind(this))
        
    },

    submitForm : function(e){
        e.preventDefault();
        this.addUsers();

    },

    addUsers : function(){
        this.users.push({
            username : username.value,
            bio : bio.value,
            description : description.value,
            image : image.value,
        });

        form.reset();
        this.renderUser();
    },

    renderUser : function (){ 
        document.getElementById("userList").innerHTML="";
        this.users.forEach(function(user){
            const card = document.createElement("div");
            card.className = "user-card";

            //Adding Image
            const img = document.createElement("img");
            img.id = "user-img"
            img.src = user.image;
            card.appendChild(img);

            //Adding Name
            const name = document.createElement("h2");
            name.id = "user-name";
            name.textContent = user.username;
            name.style.overflow = "hidden";
            card.appendChild(name);

            //Adding Role
            const role = document.createElement("h2");
            role.id = "user-bio";
            role.textContent = user.bio;
            role.style.overflow = "hidden";
            card.appendChild(role);

            //Adding Description
            const desc = document.createElement("h2");
            desc.id = "user-desc";
            desc.textContent = user.description;
            desc.style.overflow = "hidden";
            card.appendChild(desc);

            document.getElementById("userList").appendChild(card);
        });
    }, 

    removeUser : function(){

    }
}

userManager.init();
