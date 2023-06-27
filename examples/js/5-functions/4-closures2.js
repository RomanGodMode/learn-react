
const add = (num) => {
  let sum = 0

  const innerAdd = num => {
    if (num === undefined) {
      return sum
    }
    sum += num
    return innerAdd
  }
  return innerAdd(num)
}

console.log(add());
console.log(add(1)());
console.log(add(2)(3)(5)());
