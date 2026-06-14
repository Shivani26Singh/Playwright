/*
=========================================
PROMISE WITH .catch()
=========================================

Scenario:
An API call fails and returns an error.

reject() is used when something goes wrong.

.catch() executes only when the Promise
is rejected (fails).
*/

let apiCall = new Promise(function (resolve, reject) {

    reject("500 Error");

});

apiCall
    .then(function (data) {

        console.log("Success or Resolve");

    })
    .catch(function (error) {

        console.log(error);

    });

/*
OUTPUT:
500 Error

Explanation:
1. Promise is created.
2. reject("500 Error") is called.
3. Promise state becomes REJECTED.
4. .then() is skipped.
5. .catch() executes.
6. Error message is printed.
*/