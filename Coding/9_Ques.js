/*now give answers this much simple only. Create a standard label for a test run dashboard.

Rules:
- Trim the suite name.
- Lowercase the environment.
- Append build number as build-N.
- Join the three parts with " | ". 
Input
buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42)
Output
"Smoke Suite | staging | build-42"
Explanation:Builds staging smoke label
Input
buildJsBasicsRunLabel("Regression", "PROD", 7)
Output
"Regression | prod | build-7"*/

function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    suiteName = suiteName.trim();
    environment = environment.trim().toLowerCase();
    return suiteName + " | " + environment + " | build-" + buildNumber;
}
