let name = calculator
runcalculator()
function calculator() {
    let x = 20;
    let y = 30;

    function add(a, b) {
        return a + b;
    }
    function sub(a, b) {
        return a - b;
    }
    function mul(a, b) {
        return a * b;
    }
    function div(a, b) {
        return a / b;
    }

    function runCalculator() {
        console.log("Addition:", add(x, y));
        console.log("Subtraction:", sub(x, y));
        console.log("Multiplication:", mul(x, y));
        console.log("Division:", div(x, y));
    }

    runCalculator();
}

calculator();