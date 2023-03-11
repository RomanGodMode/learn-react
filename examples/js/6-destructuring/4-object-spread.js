const obj = {
  a: 1,
  b: 2,
  c: 3
}
const obj2 = {
  c: 42
}

const newObj = {
  ...obj,
  ...obj2,
  value: 10
}
console.log('newObj', newObj)