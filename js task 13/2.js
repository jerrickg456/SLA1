let myPromise = new Promise(function(resolve, reject) {
    let success = true;

    if (success) {
        resolve("Operation Successful!");
    } else {
        reject("Operation Failed!");
    }
});

myPromise.then(function(message) {
    console.log(message);
}).catch(function(error) {
    console.log(error);
});