/*
====================================================
08_Promise_AllSettled.js
====================================================

Definition:

Promise.allSettled() waits for ALL Promises
to finish, regardless of whether they
resolve or reject.

Unlike Promise.all():

✓ Does NOT fail when one Promise rejects
✓ Returns result of every Promise
✓ Useful when you want all outcomes

Syntax:

Promise.allSettled([
    promise1,
    promise2,
    promise3
])

====================================================
EXAMPLE
====================================================
*/

Promise.allSettled([

    Promise.resolve("Test A Passed!"),

    Promise.reject("Test B failed"),

    Promise.resolve("Test C passed")

])

.then(function (results) {

    results.forEach(function (r, i) {

        console.log(
            "Test " + (i + 1) + ":",
            r.status,
            "-",
            r.value || r.reason
        );

    });

});


/*
====================================================
OUTPUT
====================================================

Test 1: fulfilled - Test A Passed!

Test 2: rejected - Test B failed

Test 3: fulfilled - Test C passed

====================================================
WHAT IS RETURNED?
====================================================

[
  {
    status: "fulfilled",
    value: "Test A Passed!"
  },

  {
    status: "rejected",
    reason: "Test B failed"
  },

  {
    status: "fulfilled",
    value: "Test C passed"
  }
]

====================================================
EXPLANATION
====================================================

Promise 1 -> SUCCESS

Promise 2 -> FAILED

Promise 3 -> SUCCESS

Promise.allSettled() waits for
all three Promises.

It never jumps to .catch()
because failures are reported
inside the results array.

====================================================
FLOW DIAGRAM
====================================================

Test A -----> SUCCESS
Test B -----> FAILED
Test C -----> SUCCESS
                  |
                  v
       Promise.allSettled()
                  |
                  v
              .then()
                  |
                  v
      Return all results

====================================================
ACCESS INDIVIDUAL RESULTS
====================================================
*/

Promise.allSettled([

    Promise.resolve("API Success"),

    Promise.reject("DB Error"),

    Promise.resolve("Cache Success")

])

.then(function (results) {

    console.log(results[0]);

    console.log(results[1]);

    console.log(results[2]);

});

/*

OUTPUT:

{
  status: 'fulfilled',
  value: 'API Success'
}

{
  status: 'rejected',
  reason: 'DB Error'
}

{
  status: 'fulfilled',
  value: 'Cache Success'
}

====================================================
PROMISE.ALL VS ALLSETTLED
====================================================

Promise.all()

✓ Waits for all Promises
✗ Fails if one Promise fails

Example:

Promise.all([
    Promise.resolve("A"),
    Promise.reject("B"),
    Promise.resolve("C")
])

OUTPUT:

B

.catch() executes


----------------------------------------------------

Promise.allSettled()

✓ Waits for all Promises
✓ Returns success and failure results

Example:

Promise.allSettled([
    Promise.resolve("A"),
    Promise.reject("B"),
    Promise.resolve("C")
])

OUTPUT:

fulfilled A

rejected B

fulfilled C

====================================================
PLAYWRIGHT EXAMPLE
====================================================

Imagine executing multiple API checks.

*/

async function healthCheck() {

    const results = await Promise.allSettled([

        page.request.get("/users"),

        page.request.get("/products"),

        page.request.get("/orders")

    ]);

    console.log(results);

}

/*

Even if one API fails,

Promise.allSettled()

still returns results for all APIs.

====================================================
REAL-WORLD USE CASES
====================================================

✓ Health Checks

✓ Multiple API Validation

✓ Batch Processing

✓ Dashboard Data Loading

✓ Running Independent Tests

✓ Collecting Success and Failure Results

====================================================
INTERVIEW NOTES
====================================================

Promise.allSettled()

✓ Waits for all Promises

✓ Never fails because of one rejection

✓ Returns array of result objects

✓ Each object contains:

    status

    value (for success)

    reason (for failure)

✓ Useful when all results matter

====================================================
MEMORY TRICK
====================================================

Promise.all()

One Fail
    ↓
Entire Operation Fails


Promise.allSettled()

One Fail
    ↓
Continue
    ↓
Collect All Results

====================================================
COMPARISON
====================================================

Promise
    → One async task

Promise Chaining
    → Sequential execution

Promise.all()
    → Parallel execution
      (all must pass)

Promise.allSettled()
    → Parallel execution
      (collect all results)

====================================================
END OF FILE
====================================================
*/