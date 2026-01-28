function profileDataLekarAao(username, callback) {
    console.log("Fetching Profile Data...");
    setTimeout(function() { callback({ name: username, age: 25, location: "Pakistan" }); }, 5000);
}

function SaariPostsLekarAao(username, callback) {
    console.log("Fetching Posts...");
    setTimeout(function() { callback(["Post1", "Post2", "Post3"]); }, 5000);
}

function SaariStoriesLekarAao(username, callback) {
    console.log("Fetching Stories...");
    setTimeout(function(){callback(["Story1", "Story2", "Story3"]);}, 5000);
}

data = {};

profileDataLekarAao("Haseeb", function(data) {
    console.log("User Data:", data);
    SaariPostsLekarAao(data.name, function(posts) {
        console.log("User Posts:", posts);
        SaariStoriesLekarAao(data.name, function(stories) {
            console.log("User Stories:", stories);
        });  
    });
});
