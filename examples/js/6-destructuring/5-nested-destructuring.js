const obj = {
  a: {
    b: {
      value1: 1,
      value2: 2
    }
  }
}

const {a: { b: {value1, value2: renamedValue2} }} = obj
console.log('value1', value1)
console.log('value2', renamedValue2)