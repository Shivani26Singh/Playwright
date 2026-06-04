/*Summarize a two-dimensional matrix of suite results.

Rules:
- The input is an array of arrays.
- Each cell is a result string.
- Count total, passed, failed, and collect failedCases. 
Case 1
Input: summarizeJsBasicsMatrix([["login-pass"],["checkout-fail"]])
Expected: {"total":2,"passed":1,"failed":1,"failedCases":["checkout-fail"]}

Case 2
Input: summarizeJsBasicsMatrix([["a-pass","b-pass"],["c-pass"]])
Expected: {"total":3,"passed":3,"failed":0,"failedCases":[]}
*/

function summarizeJsBasicsMatrix(matrix) {
    const result = {
        total: 0,
        passed: 0,
        failed: 0,
        failedCases: []
    };

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const testCase = matrix[i][j];

            result.total++;

            if (testCase.includes("pass")) {
                result.passed++;
            }

            if (testCase.includes("fail")) {
                result.failed++;
                result.failedCases.push(testCase);
            }
        }
    }

    return result;
}