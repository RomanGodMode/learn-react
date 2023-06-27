const obj = {
  name: 'Абьект',
  value: 42,
  field1: 'value1',
  field2: 'value2'
}

const { name, value: renamedValue, ...other } = obj
console.log('name', name)
console.log('value', renamedValue)
console.log('other', other)

// const printObj = ({name, value = 'default', ...rest}) => {
//   console.log('rest', rest)
//   console.log('Абеькт')
//   console.log('name', name)
//   console.log('value', value)
// }
// printObj({ name: 'an', name2: '' })
