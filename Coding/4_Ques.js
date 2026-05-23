/*Build a lookup function for important keywords or terms from this chapter group.

Rules:
- Normalize input by trimming and lowercasing.
- Return the mapped meaning when the term exists.
- Return "unknown" for unmapped terms.*/


function getJsBasicsKeywordMeaning(term) {
  
  term = term.trim().toLowerCase();

  if (term === "node") {
    return "runtime";
  }

  if (term === "v8") {
    return "engine";
  }

  if (term === "npm") {
    return "package-manager";
  }

  return "unknown";
}
