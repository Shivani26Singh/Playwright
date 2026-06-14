/*
=========================================
PROMISE WITH .then()
=========================================

Scenario:
An API call returns user data.

resolve() returns an object containing:
- status
- body

.then() executes only when the Promise
is resolved successfully.
*/

let apiCall = new Promise(function (resolve, reject) {

    resolve({
        status: 200,
        body: "User data"
    });

});

apiCall.then(function (response) {

    console.log(response.status);
    console.log(response.body);

});

/*
OUTPUT:
200
User data

Explanation:
1. Promise is created.
2. resolve() is called immediately.
3. An object is returned:
   {
      status: 200,
      body: "User data"
   }
4. .then() receives that object as 'response'.
5. response.status prints 200.
*/