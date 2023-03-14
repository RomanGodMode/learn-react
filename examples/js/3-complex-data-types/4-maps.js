const obj1 = {
  id: 1
}
const obj2 = {
  id: 2
}

// const dict = {
//   [obj1]: true,
//   [obj2]: false
// }
// console.log('dict', dict)
// console.log(dict[obj1]);
// console.log(dict[obj2]);

const map = new Map([
  [obj1, true],
  [obj2, false]
])
map.set('value', 42)

console.log(map.get(obj1))
console.log(map.get(obj2))
console.log(map)