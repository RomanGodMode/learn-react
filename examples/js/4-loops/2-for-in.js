// const list = ['one', 'two', 'tree']
// for(const index in list) {
//   console.log(index)
//   console.log(list[index])
// }

const obj = {
  a: 1,
  b: 2
}

obj.a = 2

for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}
