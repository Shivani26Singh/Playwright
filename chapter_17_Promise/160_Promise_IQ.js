/*
====================================================
PROMISE.ALLSETTLED()
====================================================

Definition:

Promise.allSettled() waits for ALL Promises
to finish, regardless of success or failure.

Unlike Promise.all():

✓ Doesn't stop when one Promise fails
✓ Returns result of every Promise
✓ Useful when you want complete reporting

Each result contains:

status = fulfilled | rejected

If fulfilled:
    value

If rejected:
    reason

====================================================
EXAMPLE
====================================================

Scenario:

API 1 -> Success
API 2 -> Failure
API 3 -> Success

Promise.allSettled() will wait for all
three APIs and return every result.

====================================================
*/

Promise.allSettled([

    Promise.resolve("API 200"),

    Promise.reject("API 500"),

    Promise.resolve("API 201")

])

.then(function (results) {

    /*
    results =

    [
        {
            status: 'fulfilled',
            value: 'API 200'
        },

        {
            status: 'rejected',
            reason: 'API 500'
        },

        {
            status: 'fulfilled',
            value: 'API 201'
        }
    ]
    */

    results.forEach(function (r) {

        /*
        If Promise succeeded:
            use r.value

        If Promise failed:
            use r.reason
        */

        let val =
            r.status === "fulfilled"
                ? r.value
                : r.reason;

        console.log(r.status + " → " + val);

    });

});


/*
====================================================
OUTPUT
====================================================

fulfilled → API 200

rejected → API 500

fulfilled → API 201

====================================================
STEP-BY-STEP EXECUTION
====================================================

1. Promise 1 resolves
       API 200

2. Promise 2 rejects
       API 500

3. Promise 3 resolves
       API 201

4. allSettled() waits for ALL

5. Results returned as array

6. forEach() loops through results

7. Status and value/reason printed

====================================================
PLAYWRIGHT RELATION
====================================================

Useful when running multiple API checks.

Example:

const results = await Promise.allSettled([

    page.request.get("/users"),

    page.request.get("/products"),

    page.request.get("/orders")

]);

Even if one API fails,
you still get results for all APIs.

====================================================
INTERVIEW QUESTION
====================================================

Difference between:

Promise.all()
and
Promise.allSettled()

Promise.all()

✓ All must pass
✗ One failure stops everything

Promise.allSettled()

✓ Waits for all Promises
✓ Returns success and failure results
✓ Never fails because one Promise failed

====================================================
MEMORY TRICK
====================================================

Promise.all()

ALL SUCCESS
      ↓
   .then()

ONE FAILURE
      ↓
   .catch()


Promise.allSettled()

SUCCESS
FAILURE
SUCCESS
FAILURE
      ↓
Collect Everything
      ↓
   .then()

====================================================
*/