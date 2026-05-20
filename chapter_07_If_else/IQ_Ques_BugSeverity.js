// Bug Severity Classifier
//Given a bug's impact score (1–10), classify the severity.

let impactScore = 9;  // Output: Severity: Critical — Block release

if (impactScore >= 9 && impactScore <= 10) {
    console.log("Severity: Critical — Block release");
} else if (impactScore >= 7 && impactScore <= 8) {
    console.log("Severity: High");
} else if (impactScore >= 4 && impactScore <= 6) {
    console.log("Severity: Medium");
} else if (impactScore >= 1 && impactScore <= 3) {
    console.log("Severity: Low");
} else {
    console.log("Invalid score");
}

impactScore = 5;  // Output: Severity: Medium

if (impactScore >= 9 && impactScore <= 10) {
    console.log("Severity: Critical — Block release");
} else if (impactScore >= 7 && impactScore <= 8) {
    console.log("Severity: High");
} else if (impactScore >= 4 && impactScore <= 6) {
    console.log("Severity: Medium");
} else if (impactScore >= 1 && impactScore <= 3) {
    console.log("Severity: Low");
} else {
    console.log("Invalid score");
}