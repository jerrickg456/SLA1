let myPromise = new Promise(function(resolve, reject) {
    let success = true;

    if (success) {
        resolve("Operation Successful!");
    } else {
        reject("Operation Failed!");
    }
});

myPromise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });