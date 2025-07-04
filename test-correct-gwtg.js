// Test the corrected GWTG-HF calculator with exact scoring from the official table
function calculateGWTG_Corrected(age, sbp, bun, sodium, race, copd, heartRate) {
    let score = 0;
    console.log("=== CORRECTED GWTG-HF SCORING ===");
    
    // Age scoring - from official table
    if (age >= 110) {
        score += 28;
        console.log(`Age ${age}: +28 points (≥110)`);
    } else if (age >= 100) {
        score += 25;
        console.log(`Age ${age}: +25 points (100-109)`);
    } else if (age >= 90) {
        score += 22;
        console.log(`Age ${age}: +22 points (90-99)`);
    } else if (age >= 80) {
        score += 19;
        console.log(`Age ${age}: +19 points (80-89)`);
    } else if (age >= 70) {
        score += 17;
        console.log(`Age ${age}: +17 points (70-79)`);
    } else if (age >= 60) {
        score += 14;
        console.log(`Age ${age}: +14 points (60-69)`);
    } else if (age >= 50) {
        score += 11;
        console.log(`Age ${age}: +11 points (50-59)`);
    } else if (age >= 40) {
        score += 8;
        console.log(`Age ${age}: +8 points (40-49)`);
    } else if (age >= 30) {
        score += 6;
        console.log(`Age ${age}: +6 points (30-39)`);
    } else if (age >= 20) {
        score += 3;
        console.log(`Age ${age}: +3 points (20-29)`);
    } else {
        score += 0;
        console.log(`Age ${age}: +0 points (≤19)`);
    }

    // SBP scoring - from official table
    if (sbp >= 200) {
        score += 0;
        console.log(`SBP ${sbp}: +0 points (≥200)`);
    } else if (sbp >= 190) {
        score += 2;
        console.log(`SBP ${sbp}: +2 points (190-199)`);
    } else if (sbp >= 180) {
        score += 4;
        console.log(`SBP ${sbp}: +4 points (180-189)`);
    } else if (sbp >= 170) {
        score += 6;
        console.log(`SBP ${sbp}: +6 points (170-179)`);
    } else if (sbp >= 160) {
        score += 8;
        console.log(`SBP ${sbp}: +8 points (160-169)`);
    } else if (sbp >= 150) {
        score += 9;
        console.log(`SBP ${sbp}: +9 points (150-159)`);
    } else if (sbp >= 140) {
        score += 11;
        console.log(`SBP ${sbp}: +11 points (140-149)`);
    } else if (sbp >= 130) {
        score += 13;
        console.log(`SBP ${sbp}: +13 points (130-139)`);
    } else if (sbp >= 120) {
        score += 15;
        console.log(`SBP ${sbp}: +15 points (120-129)`);
    } else if (sbp >= 110) {
        score += 17;
        console.log(`SBP ${sbp}: +17 points (110-119)`);
    } else if (sbp >= 100) {
        score += 19;
        console.log(`SBP ${sbp}: +19 points (100-109)`);
    } else if (sbp >= 90) {
        score += 21;
        console.log(`SBP ${sbp}: +21 points (90-99)`);
    } else if (sbp >= 80) {
        score += 23;
        console.log(`SBP ${sbp}: +23 points (80-89)`);
    } else if (sbp >= 70) {
        score += 24;
        console.log(`SBP ${sbp}: +24 points (70-79)`);
    } else if (sbp >= 60) {
        score += 26;
        console.log(`SBP ${sbp}: +26 points (60-69)`);
    } else {
        score += 28;
        console.log(`SBP ${sbp}: +28 points (<60)`);
    }

    // BUN scoring - from official table
    if (bun >= 150) {
        score += 28;
        console.log(`BUN ${bun}: +28 points (≥150)`);
    } else if (bun >= 140) {
        score += 27;
        console.log(`BUN ${bun}: +27 points (140-149)`);
    } else if (bun >= 130) {
        score += 25;
        console.log(`BUN ${bun}: +25 points (130-139)`);
    } else if (bun >= 120) {
        score += 23;
        console.log(`BUN ${bun}: +23 points (120-129)`);
    } else if (bun >= 110) {
        score += 21;
        console.log(`BUN ${bun}: +21 points (110-119)`);
    } else if (bun >= 100) {
        score += 19;
        console.log(`BUN ${bun}: +19 points (100-109)`);
    } else if (bun >= 90) {
        score += 17;
        console.log(`BUN ${bun}: +17 points (90-99)`);
    } else if (bun >= 80) {
        score += 15;
        console.log(`BUN ${bun}: +15 points (80-89)`);
    } else if (bun >= 70) {
        score += 13;
        console.log(`BUN ${bun}: +13 points (70-79)`);
    } else if (bun >= 60) {
        score += 11;
        console.log(`BUN ${bun}: +11 points (60-69)`);
    } else if (bun >= 50) {
        score += 9;
        console.log(`BUN ${bun}: +9 points (50-59)`);
    } else if (bun >= 40) {
        score += 8;
        console.log(`BUN ${bun}: +8 points (40-49)`);
    } else if (bun >= 30) {
        score += 6;
        console.log(`BUN ${bun}: +6 points (30-39)`);
    } else if (bun >= 20) {
        score += 4;
        console.log(`BUN ${bun}: +4 points (20-29)`);
    } else if (bun >= 10) {
        score += 2;
        console.log(`BUN ${bun}: +2 points (10-19)`);
    } else {
        score += 0;
        console.log(`BUN ${bun}: +0 points (<10)`);
    }

    // Sodium scoring - from official table
    if (sodium >= 139) {
        score += 0;
        console.log(`Sodium ${sodium}: +0 points (≥139)`);
    } else if (sodium >= 138) {
        score += 1;
        console.log(`Sodium ${sodium}: +1 point (138)`);
    } else if (sodium >= 137) {
        score += 1;
        console.log(`Sodium ${sodium}: +1 point (137)`);
    } else if (sodium >= 136) {
        score += 2;
        console.log(`Sodium ${sodium}: +2 points (136)`);
    } else if (sodium >= 135) {
        score += 2;
        console.log(`Sodium ${sodium}: +2 points (135)`);
    } else if (sodium >= 134) {
        score += 2;
        console.log(`Sodium ${sodium}: +2 points (134)`);
    } else if (sodium >= 133) {
        score += 3;
        console.log(`Sodium ${sodium}: +3 points (133)`);
    } else if (sodium >= 131) {
        score += 3;
        console.log(`Sodium ${sodium}: +3 points (131)`);
    } else {
        score += 4;
        console.log(`Sodium ${sodium}: +4 points (≤130)`);
    }

    // Race - from official table
    if (race === 'black') {
        score += 0;
        console.log(`Black Race: +0 points`);
    } else {
        score += 3;
        console.log(`Non-Black Race: +3 points`);
    }

    // COPD - from official table
    if (copd) {
        score += 2;
        console.log(`COPD Yes: +2 points`);
    } else {
        score += 0;
        console.log(`COPD No: +0 points`);
    }

    // Heart Rate - from official table
    if (heartRate >= 105) {
        score += 8;
        console.log(`HR ${heartRate}: +8 points (≥105)`);
    } else if (heartRate >= 100) {
        score += 6;
        console.log(`HR ${heartRate}: +6 points (100-104)`);
    } else if (heartRate >= 95) {
        score += 5;
        console.log(`HR ${heartRate}: +5 points (95-99)`);
    } else if (heartRate >= 90) {
        score += 4;
        console.log(`HR ${heartRate}: +4 points (90-94)`);
    } else if (heartRate >= 85) {
        score += 3;
        console.log(`HR ${heartRate}: +3 points (85-89)`);
    } else if (heartRate >= 80) {
        score += 1;
        console.log(`HR ${heartRate}: +1 point (80-84)`);
    } else {
        score += 0;
        console.log(`HR ${heartRate}: +0 points (≤79)`);
    }

    console.log(`\nTOTAL SCORE: ${score} points`);
    return score;
}

console.log("=== MDCalc Test Case ===");
console.log("Age: 50, SBP: 100, BUN: 10, Sodium: 135, Non-black, COPD: Yes, HR: 100");
console.log("Expected: 45 points");

const result = calculateGWTG_Corrected(50, 100, 10, 135, 'other', true, 100);
console.log(`\nResult: ${result === 45 ? 'PERFECT MATCH ✅' : `MISMATCH - Got ${result}, Expected 45`}`);

// Manual calculation verification
console.log("\n=== MANUAL VERIFICATION ===");
console.log("Age 50: 11 points");
console.log("SBP 100: 19 points"); 
console.log("BUN 10: 2 points");
console.log("Sodium 135: 2 points");
console.log("Non-black: 3 points");
console.log("COPD: 2 points");
console.log("HR 100: 6 points");
console.log("Total: 11 + 19 + 2 + 2 + 3 + 2 + 6 = 45 points");