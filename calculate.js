function calculate(num1, num2, op) {
    const add = Number(num1) + Number(num2);
    const mul = num1 * num2;
    const div = num1 / num2;
    const mod = num1 % num2;

    if (op === '-' || op === 'minus') {
        return Number(num1 - num2);
    } else if (op === '+' || op === 'plus') {
        return Number(add);
    } else if (op === 'x' || op === 'times' || op === 'X') {
        return Number(mul);
    } else if (op === '/') {
        return Number(div);
    } else if (op === '%' || op === 'mod' || op === 'modulus')
        return Number(mod);
    else {
        return "Sorry, that's not a mathematical operation!"
    }
}


module.exports = calculate;