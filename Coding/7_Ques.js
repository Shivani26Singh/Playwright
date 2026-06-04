/*Build a compact summary object from test result labels.

Rules:
- Count total items.
- Count items containing pass, fail, and skip.
- Return an object with total, passed, failed, skipped.*/

function summarizeJsBasicsResults(results) {
    const summary = {
        total: results.length,
        passed: 0,
        failed: 0,
        skipped: 0
    };

    for (let i=0;i<results.length;i++) {
        const result = results[i];
        if (result.includes('pass')) {
            summary.passed++;
        } else if (result.includes('fail')) {
            summary.failed++;
        } else if (result.includes('skip')) {
            summary.skipped++;
        }
    }

    return summary;
}