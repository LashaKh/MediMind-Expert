// Test script for GWTG-HF Risk Score Calculator
// Based on official GWTG-HF algorithm from the medical literature

// Test implementation of the GWTG-HF Risk Score
function calculateGWTGHF(age, sbp, bun, sodium, race, copd, heartRate) {
    let score = 0;
    
    // Age scoring - Based on official GWTG-HF Risk Score
    if (age >= 85) {
        score += 15;
    } else if (age >= 75) {
        score += 13;
    } else if (age >= 65) {
        score += 11;
    } else if (age >= 55) {
        score += 8;
    } else if (age >= 45) {
        score += 6;
    } else if (age >= 18) {
        score += 0;
    }

    // Systolic Blood Pressure - Based on official GWTG-HF algorithm
    if (sbp < 90) {
        score += 22;
    } else if (sbp < 100) {
        score += 18;
    } else if (sbp < 110) {
        score += 15;
    } else if (sbp < 120) {
        score += 11;
    } else if (sbp < 140) {
        score += 8;
    } else if (sbp < 160) {
        score += 6;
    } else if (sbp < 180) {
        score += 4;
    } else if (sbp < 200) {
        score += 2;
    } else {
        score += 0;
    }

    // Blood Urea Nitrogen - Based on official GWTG-HF algorithm
    if (bun >= 80) {
        score += 21;
    } else if (bun >= 60) {
        score += 17;
    } else if (bun >= 40) {
        score += 13;
    } else if (bun >= 30) {
        score += 10;
    } else if (bun >= 20) {
        score += 6;
    } else if (bun >= 15) {
        score += 3;
    } else {
        score += 0;
    }

    // Sodium - Based on official GWTG-HF algorithm
    if (sodium < 130) {
        score += 5;
    } else if (sodium < 135) {
        score += 3;
    } else if (sodium < 140) {
        score += 1;
    } else {
        score += 0;
    }

    // Race - Based on official GWTG-HF algorithm (Non-black = additional risk)
    if (race === 'other') {
        score += 3;
    } else if (race === 'black') {
        score += 0;
    }

    // COPD - Based on official GWTG-HF algorithm
    if (copd) {
        score += 4;
    }

    // Heart Rate - Based on official GWTG-HF algorithm
    if (heartRate >= 120) {
        score += 6;
    } else if (heartRate >= 110) {
        score += 4;
    } else if (heartRate >= 100) {
        score += 3;
    } else if (heartRate >= 90) {
        score += 2;
    } else if (heartRate >= 80) {
        score += 1;
    } else {
        score += 0;
    }

    return score;
}

// Test cases based on the official reference ranges
console.log("=== GWTG-HF Risk Score Calculator Validation ===\n");

// Test Case 1: Low risk patient
console.log("Test Case 1: Low Risk Patient");
console.log("Age: 45, SBP: 150, BUN: 15, Sodium: 140, Race: Black, COPD: No, HR: 70");
const case1 = calculateGWTGHF(45, 150, 15, 140, 'black', false, 70);
console.log(`Calculated Score: ${case1} (Expected: Low risk, ≤30)`);
console.log(`Result: ${case1 <= 30 ? 'PASS - Low Risk' : 'FAIL'}\n`);

// Test Case 2: Intermediate risk patient
console.log("Test Case 2: Intermediate Risk Patient");
console.log("Age: 65, SBP: 120, BUN: 25, Sodium: 135, Race: Other, COPD: No, HR: 90");
const case2 = calculateGWTGHF(65, 120, 25, 135, 'other', false, 90);
console.log(`Calculated Score: ${case2} (Expected: Intermediate risk, 31-40)`);
console.log(`Result: ${case2 > 30 && case2 <= 40 ? 'PASS - Intermediate Risk' : 'FAIL'}\n`);

// Test Case 3: High risk patient
console.log("Test Case 3: High Risk Patient");
console.log("Age: 75, SBP: 100, BUN: 45, Sodium: 130, Race: Other, COPD: Yes, HR: 110");
const case3 = calculateGWTGHF(75, 100, 45, 130, 'other', true, 110);
console.log(`Calculated Score: ${case3} (Expected: High risk, 41-50)`);
console.log(`Result: ${case3 > 40 && case3 <= 50 ? 'PASS - High Risk' : 'FAIL'}\n`);

// Test Case 4: Very high risk patient
console.log("Test Case 4: Very High Risk Patient");
console.log("Age: 85, SBP: 85, BUN: 85, Sodium: 125, Race: Other, COPD: Yes, HR: 125");
const case4 = calculateGWTGHF(85, 85, 85, 125, 'other', true, 125);
console.log(`Calculated Score: ${case4} (Expected: Very high risk, >50)`);
console.log(`Result: ${case4 > 50 ? 'PASS - Very High Risk' : 'FAIL'}\n`);

// Summary
console.log("=== VALIDATION SUMMARY ===");
const results = [
    case1 <= 30,
    case2 > 30 && case2 <= 40,
    case3 > 40 && case3 <= 50,
    case4 > 50
];
const passedTests = results.filter(r => r).length;
console.log(`Tests Passed: ${passedTests}/4`);
console.log(`Overall Result: ${passedTests === 4 ? 'ALL TESTS PASSED ✓' : 'SOME TESTS FAILED ✗'}`);

// Detailed scoring breakdown for verification
console.log("\n=== DETAILED SCORING VERIFICATION ===");
console.log("Formula components based on official GWTG-HF algorithm:");
console.log("- Age: 18-44(0), 45-54(6), 55-64(8), 65-74(11), 75-84(13), 85+(15)");
console.log("- SBP: <90(22), 90-99(18), 100-109(15), 110-119(11), 120-139(8), 140-159(6), 160-179(4), 180-199(2), 200+(0)");
console.log("- BUN: <15(0), 15-19(3), 20-29(6), 30-39(10), 40-59(13), 60-79(17), 80+(21)");
console.log("- Sodium: <130(5), 130-134(3), 135-139(1), 140+(0)");
console.log("- Race: Black(0), Non-black(3)");
console.log("- COPD: No(0), Yes(4)");
console.log("- HR: <80(0), 80-89(1), 90-99(2), 100-109(3), 110-119(4), 120+(6)");