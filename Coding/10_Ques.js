/*Find the first critical bug title from a bug list.

Rules:
- Each bug has title and severity.
- Return the title of the first bug with severity "critical".
- Return "No critical bug" when none exists. 
Case 1
Input: findFirstCriticalJsBasicsBug([{"title":"Typo","severity":"low"},{"title":"Login crash","severity":"critical"}])
Expected: "Login crash"

Case 2
Input: findFirstCriticalJsBasicsBug([{"title":"Spacing issue","severity":"low"}])
Expected: "No critical bug"
*/



function findFirstCriticalJsBasicsBug(bugs) {
  for (let i = 0; i < bugs.length; i++) {
        if (bugs[i].severity === "critical") {
            return bugs[i].title;
        }
    }

    return "No critical bug";
}