/*Convert a list of tasks into a numbered checklist.

Rules:
- Keep the original task text after trimming.
- Number items from 1.
- Append " - TODO" to each item.
- Skip blank values.

Case 1
Input: buildJsBasicsChecklist(["Install Node","Create GitHub repo"])
Expected: ["1. Install Node - TODO","2. Create GitHub repo - TODO"]

Case 2
Input: buildJsBasicsChecklist(["Practice switch"," ","Push code"])
Expected: ["1. Practice switch - TODO","2. Push code - TODO"]
*/

function buildJsBasicsChecklist(items) {
  const result = [];
  let counter = 1;

  for (let i = 0; i < items.length; i++) {
    let item = items[i].trim();

    // Skip blank values
    if (item === "") {
      continue;
    }

    result[result.length] =
      counter + ". " + item + " - TODO";

    counter++;
  }

  return result;
}