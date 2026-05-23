/*Create a small readiness gate for students before they move to the next practice step.

Rules:
- Return READY only when all three flags are true.
- Return BLOCKED otherwise.
- Do not coerce strings like "true"; use boolean values.

Case 1
Input: checkJsBasicsReadinessGate(true, true, true)
Expected: "READY"

Case 2
Input: checkJsBasicsReadinessGate(true, false, true)
Expected: "BLOCKED"

Case 3
Input: checkJsBasicsReadinessGate("true", true, true)
Expected: "BLOCKED"
*/

function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {
    if (hasSetup === true && hasPractice === true && hasNotes === true) {
        return "READY";
    }
    return "BLOCKED";
}
