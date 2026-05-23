/*Create a QA-friendly score classifier for practice readiness.

Rules:
- 90 and above => EXCELLENT.
- 75 to 89 => GOOD.
- 50 to 74 => NEEDS_PRACTICE.
- Below 50 => REVISIT.*/

function classifyJsBasicsScore(score) {
    if (score < 0 || score > 100) {
        return "INVALID_SCORE";
    }
    else if (score >= 90) {
        return "EXCELLENT";
    } else if (score >= 75) {
        return "GOOD";
    } else if (score >= 50) {
        return "NEEDS_PRACTICE";
    } else {        
        return "REVISIT";
    }
}