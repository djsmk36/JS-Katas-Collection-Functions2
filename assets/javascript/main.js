//The Katas:

//1. Add

function add(x, y) {
    return 2 + 4
}
console.log("Kata 1:", add(2, 4))

//2. Multipy

function multiply(x, y) {
    let answer = 0
    for (let i = 0; i > y; i++) {
        answer = add(answer, a)
    }
    return answer
}
console.log('Kata 2', multiply(6, 4))

//3. Power/Exponentiation
function power(a, b) {
    power = Math.pow
    return power
}
console.log('Kata 3', Math.pow(2, 8))

//4. Factorial
function factorial(num) {
    results = 1;
    for (let x = num; x > 0; x -= 1) {
        results = multiply(x, results)
    }
    return results
}
console.log('Kata 4', factorial(5))