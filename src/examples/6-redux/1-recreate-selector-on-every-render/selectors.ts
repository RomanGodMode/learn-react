import { createSelector } from '@reduxjs/toolkit'

type Item = {
  id: number,
  value: string
}

type State = {
  list: Item[]
}

const state: State = {
  list: [{id: 1, value: 'Первый'}, {id: 2, value: "Второй"}, {id: 3, value: "Третий"}]
}


const getItemsList = (state: State) => {
  console.log('Получили лист')
  return state.list
}
//
// const getItem = createSelector(
//   [getItemsList, (_, id) => id],
//   (listItems, id) => {
//     console.log('find')
//     return listItems.find(item => item.id === id)
//   }
// );
//
// console.log('Результат', getItem(state, 2))
// console.log('Результат', getItem(state, 2))
// console.log('Результат', getItem(state, 3))
// console.log('Результат', getItem(state, 2))


const makeGetItem = (id: number) => createSelector(
  getItemsList,
  () => id,
  (listItems, id) => {
    console.log('find')
    return listItems.find(item => item.id === id)
  }
);

const getItem = makeGetItem(2)

console.log('getItem(state)', getItem(state))
console.log('getItem(state)', getItem(state))
console.log('getItem(state)', getItem(state))
