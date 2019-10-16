var Calculator = require('little-calculator')
const calculator = new Calculator(true)

const exp = '( 3 + 13) / 2 + 5 - 3 * 2'
calculator.compute(exp) // 返回7

const exp1 = '3 + -2 * 2 + 2^2 + abs(-2)'
calculator.compute(exp1) // 返回5

const exp2 = '-1 + 5*5 - 3 + sqrt(4)'
calculator.compute(exp2) // 返回5
let result = calculator.compute(exp2)
console.log(result)