// Difference between:
// if(response)
// and
// if(response != null)

console.log('--- Example 1: Using if(response) ---');

let response1 = 0;

if (response1) {
    console.log('Valid response');
} else {
    console.log('Invalid response');
}

// Output:
// Invalid response
// Because 0 is treated as a falsy value in JavaScript.


console.log('\n--- Example 2: Using if(response != null) ---');

let response2 = 0;

if (response2 != null) {
    console.log('Valid response');
} else {
    console.log('Response is null or undefined');
}

// Output:
// Valid response
// Because 0 is not null and not undefined.


console.log('\n--- QA Automation Example ---');

const apiResponse = false;

if (apiResponse != null) {
    console.log('API returned a valid value');
} else {
    console.log('API response missing');
}

// Output:
// API returned a valid value
// false is a valid value, so the condition passes.


console.log('\n--- Comparison Table ---');

const testValues = [0, false, '', null, undefined, 'hello'];

for (const value of testValues) {
    console.log(`\nTesting value:`, value);

    console.log('if(value):', !!value);
    console.log('if(value != null):', value != null);
}

/*
Expected behavior:

Value        if(value)     if(value != null)
------------------------------------------------
0            false         true
false        false         true
""           false         true
null         false         false
undefined    false         false
"hello"      true          true
*/


console.log('\n--- Recommended QA Practice ---');
console.log('Use if(response != null) when checking API/test data existence.');
console.log('It safely handles valid falsy values like 0, false, and empty strings.');