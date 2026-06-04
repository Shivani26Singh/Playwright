/*Normalize and deduplicate tags used for organizing tests.

Rules:
- Trim each tag.
- Lowercase each tag.
- Remove blank values.
- Keep first-seen order.
Case 1
Input: createUniqueJsBasicsTags([" Smoke ","smoke","Regression"])
Expected: ["smoke","regression"]

Case 2
Input: createUniqueJsBasicsTags([""," API "," ","api"])
Expected: ["api"]
*/

function createUniqueJsBasicsTags(tags) {
  const result = [];

    for (let i = 0; i < tags.length; i++) {
        let tag = tags[i].trim().toLowerCase();

        // Skip blank values
        if (tag === "") {
            continue;
        }

        // Avoid duplicates
        if (!result.includes(tag)) {
            result.push(tag);
        }
    }

    return result;
}