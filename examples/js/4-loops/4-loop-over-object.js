const obj = {
  value: 42,
  name: 'Абьект'
}

console.log('Values:')
for (const key in obj) {
  console.log(obj[key])
}
// console.log("Object.values(obj)", Object.values(obj));
// console.log("Object.keys(obj)", Object.keys(obj));
// console.log("Object.entries(obj)", Object.entries(obj));

// Object.values(obj).forEach(value => console.log(value))

// console.log("Object.entries(obj)", Object.fromEntries([
//   ["key1", 1],
//   ["key2", 2],
// ]))
