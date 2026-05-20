// =====================================================
// Can we use else if without a final else?
// =====================================================

// YES.
// In JavaScript, the final else block is optional.
// But in QA automation, it is recommended to always include
// a final else block to catch unexpected conditions.


console.log('--- Example 1: else if without final else ---');

let marks = 40;

if (marks > 90) {
    console.log('Grade A');
} else if (marks > 60) {
    console.log('Grade B');
}

// Output:
// Nothing happens.

// Why?
// Because:
// marks > 90  => false
// marks > 60  => false
// No condition matched.
// Since there is no final else block,
// JavaScript simply skips the entire if-else structure.


console.log('\n--- Example 2: Using final else block ---');

let score = 40;

if (score > 90) {
    console.log('Excellent');
} else if (score > 60) {
    console.log('Good');
} else {
    console.log('Needs Improvement');
}

// Output:
// Needs Improvement

// The final else acts as a default condition.
// It runs when all previous conditions fail.


console.log('\n--- QA Automation Risk Example ---');

let apiStatus = 'Pending';

if (apiStatus === 'Approved') {
    console.log('Test Passed');
} else if (apiStatus === 'Rejected') {
    console.log('Test Failed');
}

// Output:
// Nothing happens.

// Problem in QA Automation:
// The status 'Pending' was unexpected.
// But because there is no final else block,
// the test silently continues.
// This can create false-positive test results.


console.log('\n--- Recommended QA Automation Practice ---');

let responseStatus = 'Pending';

if (responseStatus === 'Approved') {
    console.log('Test Passed');
} else if (responseStatus === 'Rejected') {
    console.log('Test Failed');
} else {
    throw new Error(`Unexpected status received: ${responseStatus}`);
}

// Output:
// Error: Unexpected status received: Pending

// Why this is better:
// - Catches unexpected API/UI behavior
// - Prevents silent failures
// - Makes debugging easier
// - Prevents false-positive automation results


console.log('\n--- Real QA Automation Benefit ---');
console.log('Always use a final else block when handling API responses, UI states, or test conditions.');
console.log('It ensures unexpected values are detected immediately instead of silently ignored.');
