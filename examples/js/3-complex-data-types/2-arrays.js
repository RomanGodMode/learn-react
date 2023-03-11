const list = [1, 'Неплохо сыграно!', 3]
list.push(42)
console.log(list)

const mappedList = list
  .filter(item => typeof item !== 'string')
  .map((item, index) => item + index)

console.log(mappedList)