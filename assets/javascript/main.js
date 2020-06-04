//The Katas:

//1. Add

function add(x, y) {
    return x + y
}
console.log("Kata 1:", add(4, 8))

//2. Multipy

function multiply(x, y) {
    let answer = 0
    for (let i = 0; i < y; i++) {
        answer = add(answer, x)
    }
    return answer
}
console.log('Kata 2', multiply(6, 4))

//3. Power/Exponentiation
function power(a, b) {
    let answer = 1
    for (let x = 1; x <= b; x++) {
        answer = multiply(answer, a)

    } return answer
}
console.log('Kata 3', power(2, 6))

//4. Factorial
function factorial(num) {
    results = 1;
    for (let x = num; x > 0; x -= 1) {
        results = multiply(x, results)
    }
    return results
}
console.log('Kata 4', factorial(5))