/*Calculate a simple weighted practice score.

Rules:
- Each passed item gives 2 points.
- Each failed item subtracts 1 point.
- Skipped items are 0 points.
- Return the final number.  
Case 1
Input: calculateJsBasicsWeightedScore(5, 2, 1)
Expected: 8

Case 2
Input: calculateJsBasicsWeightedScore(3, 0, 0)
Expected: 6

Case 3
Input: calculateJsBasicsWeightedScore(1, 4, 3)
Expected: -2
*/

function calculateJsBasicsWeightedScore(passed, failed, skipped) {
    let score = 0;
    score += passed * 2;
    score -= failed;
    score += skipped * 0;
    return score;
}