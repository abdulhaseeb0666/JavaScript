let pr = new Promise(function(resolve, reject) {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber % 2 === 0) {
        resolve(`Success! The number ${randomNumber} is even.`);
    } else {
        reject(`Failure! The number ${randomNumber} is odd.`);
    }
});

pr.then((message) => {
    console.log("Resolved:", message);
}).catch((error) => {
    console.log("Rejected:", error);
}).finally(() => {
    console.log("Promise has been settled (either resolved or rejected).");
});