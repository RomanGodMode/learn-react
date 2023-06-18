let b = 42
const uselessIncrement = (value) => {
  value++
  // value = value + 1
  // value += 1
}
uselessIncrement(b)
console.log('b', b)


const obj = {value: 42}
const incrementObject = (obj) => {
  obj.value++
  // obj.value = obj.value + 1
}
incrementObject(obj)
console.log('obj', obj)

