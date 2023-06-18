const users = [{id: 1, name: 'Чел'}, {id: 2, name: 'Парень'}]
const getName = user => user.name

console.log('users.map(getName)', users.map(getName))
console.log('users.map(user => getName(user))', users.map(user => getName(user)))
