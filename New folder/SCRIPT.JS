unction solve() {
    let chapter = document.getElementById("chapter").value;
    let q = document.getElementById("question").value.trim();
    let output = document.getElementById("output");

    if (chapter === "quadratic") {
        solveQuadratic(q, output);
    }
    else if (chapter === "linear") {
        solveLinear(q, output);
    }
    else if (chapter === "ap") {
        solveAP(output);
    }
    else if (chapter === "probability") {
        solveProbability(output);
    }
}

/* ---------------- QUADRATIC ---------------- */
function solveQuadratic(q, output) {
    // Very simple parser for: ax^2 + bx + c = 0
    let steps = `<b>Quadratic Equation Solver</b><br><br>`;

    steps += `Step 1: Standard form ax² + bx + c = 0<br>`;
    steps += `Given equation: ${q}<br><br>`;

    // Example simple extraction (LIMITED)
    // works for forms like: x^2 + 5x + 6 = 0
    let a = 1, b = 0, c = 0;

    try {
        let cleaned = q.replace("= 0", "").replace("=0", "").replace(/\s/g, "");

        // VERY basic pattern handling
        let matchA = cleaned.match(/([+-]?\d*)x\^2/);
        let matchB = cleaned.match(/([+-]?\d*)x(?!\^)/g);
        let matchC = cleaned.split("x").pop();

        if (matchA) {
            a = matchA[1] === "" || matchA[1] === "+" ? 1 :
                matchA[1] === "-" ? -1 : parseInt(matchA[1]);
        }

        if (matchB) {
            b = parseInt(matchB[0]);
        }

        c = parseInt(matchC) || 0;
    } catch (e) {
        steps += "⚠ Could not fully parse equation.<br>";
    }

    steps += `Step 2: a = ${a}, b = ${b}, c = ${c}<br>`;

    let D = b*b - 4*a*c;
    steps += `Step 3: Discriminant D = b² - 4ac = ${D}<br>`;

    if (D < 0) {
        steps += "Step 4: No real roots (D < 0)<br>";
    } else {
        let root1 = (-b + Math.sqrt(D)) / (2*a);
        let root2 = (-b - Math.sqrt(D)) / (2*a);

        steps += `Step 4: Roots formula x = (-b ± √D)/2a<br>`;
        steps += `x₁ = ${root1}<br>`;
        steps += `x₂ = ${root2}<br>`;
    }

    output.innerHTML = steps;
}

/* ---------------- LINEAR ---------------- */
function solveLinear(q, output) {
    let steps = `<b>Linear Equation Solver</b><br><br>`;
    steps += `Given: ${q}<br><br>`;
    steps += `Step 1: Convert to form ax + b = 0<br>`;
    steps += `Step 2: Move constants to RHS<br>`;
    steps += `Step 3: Divide both sides by coefficient of x<br>`;
    steps += `<br>⚠ Auto solving can be upgraded next using parser engine.`;

    output.innerHTML = steps;
}

/* ---------------- AP ---------------- */
function solveAP(output) {
    output.innerHTML = `
    <b>Arithmetic Progression</b><br><br>
    Step 1: Identify a, d<br>
    Step 2: nth term formula → aₙ = a + (n-1)d<br>
    Step 3: Sum formula → Sₙ = n/2 [2a + (n-1)d]
    `;
}

/* ---------------- PROBABILITY ---------------- */
function solveProbability(output) {
    output.innerHTML = `
    <b>Probability</b><br><br>
    Step 1: Identify outcomes<br>
    Step 2: Apply formula:<br>
    P(E) = Favorable / Total outcomes<br>
    `;
}function solve() {
    let chapter = document.getElementById("chapter").value;
    let q = document.getElementById("question").value.trim();
    let output = document.getElementById("output");

    if (chapter === "quadratic") {
        solveQuadratic(q, output);
    }
    else if (chapter === "linear") {
        solveLinear(q, output);
    }
    else if (chapter === "ap") {
        solveAP(output);
    }
    else if (chapter === "probability") {
        solveProbability(output);
    }
}

/* ---------------- QUADRATIC ---------------- */
function solveQuadratic(q, output) {
    // Very simple parser for: ax^2 + bx + c = 0
    let steps = `<b>Quadratic Equation Solver</b><br><br>`;

    steps += `Step 1: Standard form ax² + bx + c = 0<br>`;
    steps += `Given equation: ${q}<br><br>`;

    // Example simple extraction (LIMITED)
    // works for forms like: x^2 + 5x + 6 = 0
    let a = 1, b = 0, c = 0;

    try {
        let cleaned = q.replace("= 0", "").replace("=0", "").replace(/\s/g, "");

        // VERY basic pattern handling
        let matchA = cleaned.match(/([+-]?\d*)x\^2/);
        let matchB = cleaned.match(/([+-]?\d*)x(?!\^)/g);
        let matchC = cleaned.split("x").pop();

        if (matchA) {
            a = matchA[1] === "" || matchA[1] === "+" ? 1 :
                matchA[1] === "-" ? -1 : parseInt(matchA[1]);
        }

        if (matchB) {
            b = parseInt(matchB[0]);
        }

        c = parseInt(matchC) || 0;
    } catch (e) {
        steps += "⚠ Could not fully parse equation.<br>";
    }

    steps += `Step 2: a = ${a}, b = ${b}, c = ${c}<br>`;

    let D = b*b - 4*a*c;
    steps += `Step 3: Discriminant D = b² - 4ac = ${D}<br>`;

    if (D < 0) {
        steps += "Step 4: No real roots (D < 0)<br>";
    } else {
        let root1 = (-b + Math.sqrt(D)) / (2*a);
        let root2 = (-b - Math.sqrt(D)) / (2*a);

        steps += `Step 4: Roots formula x = (-b ± √D)/2a<br>`;
        steps += `x₁ = ${root1}<br>`;
        steps += `x₂ = ${root2}<br>`;
    }

    output.innerHTML = steps;
}

/* ---------------- LINEAR ---------------- */
function solveLinear(q, output) {
    let steps = `<b>Linear Equation Solver</b><br><br>`;
    steps += `Given: ${q}<br><br>`;
    steps += `Step 1: Convert to form ax + b = 0<br>`;
    steps += `Step 2: Move constants to RHS<br>`;
    steps += `Step 3: Divide both sides by coefficient of x<br>`;
    steps += `<br>⚠ Auto solving can be upgraded next using parser engine.`;

    output.innerHTML = steps;
}

/* ---------------- AP ---------------- */
function solveAP(output) {
    output.innerHTML = `
    <b>Arithmetic Progression</b><br><br>
    Step 1: Identify a, d<br>
    Step 2: nth term formula → aₙ = a + (n-1)d<br>
    Step 3: Sum formula → Sₙ = n/2 [2a + (n-1)d]
    `;
}

/* ---------------- PROBABILITY ---------------- */
function solveProbability(output) {
    output.innerHTML = `
    <b>Probability</b><br><br>
    Step 1: Identify outcomes<br>
    Step 2: Apply formula:<br>
    P(E) = Favorable / Total outcomes<br>
    `;
}