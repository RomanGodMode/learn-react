const obj = {
  value: 42,
  name: 'Абьект'
}

console.log('Values:')
for (const key in obj) {
  console.log(obj[key])
}
Object.values(obj).forEach(console.log)
