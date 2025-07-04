// Test case matching the MDCalc screenshot
function calculateGWTGHF_Current(age, sbp, bun, sodium, race, copd, heartRate) {
    let score = 0;
    console.log("=== SCORING BREAKDOWN ===");
    
    // Age scoring - Based on official GWTG-HF Risk Score table
    if (age >= 100) {
        score += 15;
        console.log(`Age ${age}: +15 points (100+)`);
    } else if (age >= 90) {
        score += 13;
        console.log(`Age ${age}: +13 points (90-99)`);
    } else if (age >= 80) {
        score += 11;
        console.log(`Age ${age}: +11 points (80-89)`);
    } else if (age >= 70) {
        score += 8;
        console.log(`Age ${age}: +8 points (70-79)`);
    } else if (age >= 60) {
        score += 6;
        console.log(`Age ${age}: +6 points (60-69)`);
    } else if (age >= 50) {
        score += 4;
        console.log(`Age ${age}: +4 points (50-59)`);
    } else {
        score += 2;
        console.log(`Age ${age}: +2 points (<50)`);
    }

    // Systolic Blood Pressure - Based on official GWTG-HF algorithm
    if (sbp < 90) {
        score += 22;
        console.log(`SBP ${sbp}: +22 points (<90)`);
    } else if (sbp < 100) {
        score += 18;
        console.log(`SBP ${sbp}: +18 points (90-99)`);
    } else if (sbp < 110) {
        score += 15;
        console.log(`SBP ${sbp}: +15 points (100-109)`);
    } else if (sbp < 120) {
        score += 11;
        console.log(`SBP ${sbp}: +11 points (110-119)`);
    } else if (sbp < 140) {
        score += 8;
        console.log(`SBP ${sbp}: +8 points (120-139)`);
    } else if (sbp < 160) {
        score += 6;
        console.log(`SBP ${sbp}: +6 points (140-159)`);
    } else if (sbp < 180) {
        score += 4;
        console.log(`SBP ${sbp}: +4 points (160-179)`);
    } else if (sbp < 200) {
        score += 2;
        console.log(`SBP ${sbp}: +2 points (180-199)`);
    } else {
        score += 0;
        console.log(`SBP ${sbp}: +0 points (200+)`);
    }

    // Blood Urea Nitrogen - Based on official GWTG-HF algorithm
    if (bun >= 80) {
        score += 21;
        console.log(`BUN ${bun}: +21 points (80+)`);
    } else if (bun >= 60) {
        score += 17;
        console.log(`BUN ${bun}: +17 points (60-79)`);
    } else if (bun >= 40) {
        score += 13;
        console.log(`BUN ${bun}: +13 points (40-59)`);
    } else if (bun >= 30) {
        score += 10;
        console.log(`BUN ${bun}: +10 points (30-39)`);
    } else if (bun >= 20) {
        score += 6;
        console.log(`BUN ${bun}: +6 points (20-29)`);
    } else if (bun >= 15) {
        score += 3;
        console.log(`BUN ${bun}: +3 points (15-19)`);
    } else {
        score += 0;
        console.log(`BUN ${bun}: +0 points (<15)`);
    }

    // Sodium - Based on official GWTG-HF algorithm
    if (sodium < 130) {
        score += 5;
        console.log(`Sodium ${sodium}: +5 points (<130)`);
    } else if (sodium < 135) {
        score += 3;
        console.log(`Sodium ${sodium}: +3 points (130-134)`);
    } else if (sodium < 140) {
        score += 1;
        console.log(`Sodium ${sodium}: +1 point (135-139)`);
    } else {
        score += 0;
        console.log(`Sodium ${sodium}: +0 points (140+)`);
    }

    // Race - Based on official GWTG-HF algorithm (Non-black = additional risk)
    if (race === 'other') {
        score += 3;
        console.log(`Race Non-black: +3 points`);
    } else if (race === 'black') {
        score += 0;
        console.log(`Race Black: +0 points`);
    }

    // COPD - Based on official GWTG-HF algorithm
    if (copd) {
        score += 2;
        console.log(`COPD Yes: +2 points`);
    } else {
        console.log(`COPD No: +0 points`);
    }

    // Heart Rate - Based on official GWTG-HF algorithm
    if (heartRate >= 120) {
        score += 6;
        console.log(`HR ${heartRate}: +6 points (120+)`);
    } else if (heartRate >= 110) {
        score += 4;
        console.log(`HR ${heartRate}: +4 points (110-119)`);
    } else if (heartRate >= 100) {
        score += 3;
        console.log(`HR ${heartRate}: +3 points (100-109)`);
    } else if (heartRate >= 90) {
        score += 2;
        console.log(`HR ${heartRate}: +2 points (90-99)`);
    } else if (heartRate >= 80) {
        score += 1;
        console.log(`HR ${heartRate}: +1 point (80-89)`);
    } else {
        score += 0;
        console.log(`HR ${heartRate}: +0 points (<80)`);
    }

    console.log(`\nTOTAL SCORE: ${score} points`);
    return score;
}

console.log("=== MDCalc Case Validation ===");
console.log("Inputs: Age 50, SBP 100, BUN 10, Sodium 135, Non-black, COPD Yes, HR 100");
console.log("Expected: 45 points (per MDCalc)");
console.log("Your calculator: 29 points\n");

const calculatedScore = calculateGWTGHF_Current(50, 100, 10, 135, 'other', true, 100);
console.log(`\nDiscrepancy: Expected 45, Got ${calculatedScore}`);
console.log(`Difference: ${45 - calculatedScore} points`);

// Let's check what MDCalc might be using differently
console.log("\n=== POSSIBLE MDCalc SCORING ===");
console.log("If MDCalc uses different age brackets or COPD scoring:");
console.log("Age 50: Could be 6 points (our current) or different");
console.log("SBP 100: Could be 15 points (our current) or different");  
console.log("BUN 10: Could be 0 points (our current) or different");
console.log("Sodium 135: Could be 1 point (our current) or different");
console.log("Non-black: Could be 3 points (our current) or different");
console.log("COPD: Could be 4 points (our current) or could be 2 points");
console.log("HR 100: Could be 3 points (our current) or different");

// Test with potential different COPD scoring
console.log("\n=== TEST WITH COPD = 2 POINTS ===");
const testScore = 6 + 15 + 0 + 1 + 3 + 2 + 3; // All our values but COPD = 2
console.log(`Total with COPD=2: ${testScore} points`);

// Test if MDCalc uses different ranges
console.log("\n=== CHECKING ALTERNATIVE SCORING ===");
console.log("If Age 50 gets different points...");
console.log("If COPD is worth different points...");
console.log("If race scoring is different...");