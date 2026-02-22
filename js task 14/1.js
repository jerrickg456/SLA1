function fetchData() {
    return new Promise(function(resolve, reject) {
        let success = true;

        setTimeout(function() {
            if (success) {
                resolve("Data received successfully");
            } else {
                reject("Error while fetching data");
            }
        }, 1000);
    });
}

async function getData() {
    try {
        let result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getData();