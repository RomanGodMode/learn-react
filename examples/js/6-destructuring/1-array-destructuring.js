const array = [1, 2, 3, 4, 5]

const [first, second, ...other] = array
console.log('first', first)
console.log('second', second)
console.log('other', other)

// const printArr = ([first, second, ...other], value) => {
//   console.log('Массив')
//   console.log('first', first)
//   console.log('second', second)
//   console.log('other', other)
// }
// printArr(array, 42)

// const func = (first, ...args) => {
//   console.log('first', first)
//   console.log('args', args)
// }
//
// func(1, 2, 3)


// const obj = {
//   0: 42
// }
// console.log('obj', obj)
// console.log(obj[0]);