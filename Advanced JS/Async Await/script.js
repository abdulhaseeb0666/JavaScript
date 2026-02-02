let pr = new Promise(function(resolve, reject){
    setTimeout(() => {
        let randomNumber = Math.floor(Math.random() * 10);
        if(randomNumber > 5)
            resolve(randomNumber);
        else
            reject(randomNumber);
    }, 2000);
});

async function abcd(){
    try{
        let newPr = await pr;
        console.log("Resolved with number: " + newPr);
    }
    catch(err){
        console.log("Rejected with number: " + err);
    }
}

abcd();