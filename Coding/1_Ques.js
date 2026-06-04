/*Create a reusable label normalizer for JavaScript QA utilities.

Rules:
- Trim leading and trailing spaces.
- Convert text to lowercase.
- Replace non-alphanumeric groups with a single hyphen.
- Prefix the result with "js-basic-".
Case 1
Input: normalizeJsBasicsLabel(" Login Button ")
Expected: "js-basic-login-button"

Case 2
Input: normalizeJsBasicsLabel("User Profile: Edit!")
Expected: "js-basic-user-profile-edit"

Case 3
Input: normalizeJsBasicsLabel("---Search@@Box---")
Expected: "js-basic-search-box"

Case 4
Input: normalizeJsBasicsLabel(" ")
Expected: "js-basic"

*/

function normalizeJsBasicsLabel(label) {
    label = label.trim().toLowerCase();
    label = label.replace(/[^a-z0-9]+/g, '-');
    label = label.replace(/^-|-$/g, "");
    if (label === "") {
        return "js-basic";
    }
   return "js-basic-" + label;
}

