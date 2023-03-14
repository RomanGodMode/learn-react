const list = [1, 'Неплохо сыграно!', 3]
list.push(42)
console.log(list)

const mappedList = list
  .filter(item => typeof item !== 'string')
  .map((item, index) => item + index)

console.log(list.find(item => item === 3))
console.log(list.find(_ => false))

console.log(mappedList)

const array = [{value: 4}, {value: 5}, {value: 2}]
console.log([...array].sort((a, b) => b.value - a.value))
// console.log(array)