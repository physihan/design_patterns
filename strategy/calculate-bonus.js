/**
 * 这里strategies的函数要用数组的形式，'S'、'B'、'A'
 */
var strategies = {
  'S': function (salary) {
    return salary * 4
  },
  'A': function (salary) {
    return salary * 3
  },
  'B': function (salary) {
    return salary * 2
  }
}
var calculateBonus=function(level,salary){
console.log(strategies[level](salary))
}
calculateBonus('A',1000)
// console.log(strategies.S(1000))
