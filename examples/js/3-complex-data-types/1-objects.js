const key = {a: 2}

const obj = {
  // value: null,
  // deleteMe: 0,
  // func: () => console.log(42)
  DYNAMIC_KEY_NAME: "value",
  42: 2,
  [key]: 42
}
console.log(obj)

// obj.value = 42
// console.log(obj.value)
// obj.newField = 'Ура новое поле'
// delete obj.deleteMe
// console.log(obj)

// const DYNAMIC_KEY_NAME = 'DYNAMIC_KEY_NAME'
// obj[DYNAMIC_KEY_NAME] = 'Значение'
// console.log(obj[DYNAMIC_KEY_NAME])
// console.log(obj)

console.log(Object.entries({ a: 1, b: 2 }));
