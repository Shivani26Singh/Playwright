/*Merge default and override configuration values for a test helper.

Rules:
- Override values must win.
- If retries is missing from both objects, default it to 0.
- Do not mutate the input objects.

Case 1
Input: mergeJsBasicsConfig({"retries":1,"env":"dev"}, {"retries":3})
Expected: {"retries":3,"env":"dev"}

Case 2
Input: mergeJsBasicsConfig({"env":"qa"}, {"timeout":5000})
Expected: {"env":"qa","timeout":5000,"retries":0}

Case 3
Input: mergeJsBasicsConfig({"env":"dev","retries":2}, {"env":"stage"})
Expected: {"env":"stage","retries":2}
*/

function mergeJsBasicsConfig(defaultConfig, overrideConfig) {
    const result = {};

    result.env = defaultConfig.env;
    result.retries = defaultConfig.retries;

    if (overrideConfig.env !== undefined) {
        result.env = overrideConfig.env;
    }

    if (overrideConfig.retries !== undefined) {
        result.retries = overrideConfig.retries;
    }

    if (overrideConfig.timeout !== undefined) {
        result.timeout = overrideConfig.timeout;
    }

    if (result.retries === undefined) {
        result.retries = 0;
    }

    return result;
}

const defaultConfig = {"retries":1,"env":"dev"};
const overrideConfig = {"retries":3};   
console.log(mergeJsBasicsConfig(defaultConfig, overrideConfig));