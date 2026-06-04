/*Given a noisy list of topic labels, keep only supported chapter terms and remove duplicates.

Rules:
- Trim and lowercase each item.
- Allow known aliases from the chapter group.
- Return canonical topic keys in first-seen order.
- Skip unsupported values.*/
/*
Case1:
Input: filterSupportedJsBasicsTopics(["NODE"," v8 ","unknown"])

Expected: ["node","v8"]

Case 2
Input: filterSupportedJsBasicsTopics(["node","runtime","node"])

Expected: ["node"]

Case 3
Input: filterSupportedJsBasicsTopics(["npm","node","v8"])

Expected: ["npm","node","v8"]*/

function filterSupportedJsBasicsTopics(topics) {
    const result = [];

    for (let i = 0; i < topics.length; i++) {
        let topic = topics[i].trim().toLowerCase();

        // Convert alias
        if (topic === "runtime") {
            topic = "node";
        }

        // Check supported topics
        if (
            topic === "node" ||
            topic === "v8" ||
            topic === "npm"
        ) {
            // Avoid duplicates
            if (!result.includes(topic)) {
                result.push(topic);
            }
        }
    }

    return result;
}