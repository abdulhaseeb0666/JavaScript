fetch("https://randomuser.me/api/")
.then(rawData => rawData.json())
.then(data => {
        console.log("All Data: ", data);
        console.log("Person's Info: ", data.results[0]);
        console.log("First Name: ", data.results[0].name.first);
        console.log("Last Name: ", data.results[0].name.last);
        console.log("Email: ", data.results[0].email);
    }
)
.catch((error) => console.error('Error:', error));
