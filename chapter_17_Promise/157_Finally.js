/*
=========================================
PROMISE WITH .then(), .catch(), .finally()
=========================================

Scenario:
A test run performs an API call.

If the API call succeeds:
    resolve() is called.

If the API call fails:
    reject() is called.

.finally() executes regardless of success
or failure.
*/

let testRun = new Promise(function (resolve, reject) {

    let apiCall = true;

    if (apiCall) {

        resolve({
            status: "done"
        });

    } else {

        reject("Assertion Failed");

    }

});

testRun
    .then(function (data) {

        console.log(data);

    })
    .catch(function (error) {

        console.log(error);

    })
    .finally(function () {

        console.log("I will be executed anyhow!");

    });

/*
OUTPUT:

{ status: 'done' }

I will be executed anyhow!

Explanation:
1. Promise is created.
2. apiCall = true.
3. Condition is TRUE.
4. resolve({ status: "done" }) is executed.
5. Promise state becomes FULFILLED.
6. .then() receives the resolved object.
7. Object is printed.
8. .catch() is skipped.
9. .finally() executes.
*/