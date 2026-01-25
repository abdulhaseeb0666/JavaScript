// SetTimeout side stack me chla jata he aur uss ki processing chalti rehti he lekin baad me execute hota he
// Jab callback function call hota he to us waqt jo variables hote he wo us scope ke hote he jahan se wo call ho raha hota he
// Lekin agar wo variable us scope me define nahi hota to wo global scope me dekhta he


function profileDataLekarAao(username, callback) {
    // console.log("Fetching Profile Data...");
    setTimeout(function() { callback({ name: username, age: 25, location: "Pakistan" }); }, 5000);
}

function SaariPostsLekarAao(username, callback) {
    // console.log("Fetching Posts...");
    setTimeout(function() { callback(["Post1", "Post2", "Post3"]); }, 5000);
}

function SaariStoriesLekarAao(username, callback) {
    // console.log("Fetching Stories...");
    setTimeout(function(){callback(["Story1", "Story2", "Story3"]);}, 5000);
}

data = {};

profileDataLekarAao("Haseeb", function(userdata) {
    console.log("User Data:", userdata);
    data = userdata;
});  
SaariPostsLekarAao(data.name, function(posts) {
    console.log("User Posts:", posts);
});
SaariStoriesLekarAao(data.name, function(stories) {
    console.log("User Stories:", stories);
});
