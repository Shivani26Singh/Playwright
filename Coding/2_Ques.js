/*Write a validator for names used in helper functions, variables, or test data keys.

Rules:
- Value must be a non-empty string after trimming.
- It must start with a letter, underscore, or dollar sign.
- Remaining characters may include letters, digits, underscore, or dollar sign.
- Reject reserved words used in this chapter: let, const, var, class, function, return.
*/

function isValidJsBasicsIdentifier(name) {
    const reservedWords = ['let', 'const', 'var', 'class', 'function', 'return'];

    if (typeof name !== 'string') {
        return false;
    }

    name = name.trim();

    if (name.length === 0) {
        return false;
    }

    if (reservedWords.includes(name)) {
        return false;
    }

    const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return pattern.test(name);

}