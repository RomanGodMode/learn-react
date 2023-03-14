const createMinLengthValidator = minLength => {
  return str => str.length >= minLength
}

const min2LengthValidator = createMinLengthValidator(2)
console.log(min2LengthValidator('12'))
// console.log(min2LengthValidator('2'))

// const goodStrings = ['', '2342', '213123', 'dsada'].filter(createMinLengthValidator(3).validate)
// console.log(goodStrings)

