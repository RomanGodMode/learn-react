type Id = string | number
type Item = {
  id: Id
}
type PaginatedItems<T> = {
  items: T[]
  count: number
}

const func = <P extends Item>(paginatedItems: PaginatedItems<P>) => {
  paginatedItems.items.forEach(item => console.log(item.id))
}

func({ count: 1, items: [{ id: 1 }, { id: 2 }] })


// type Obj = {
//   a: number
// }
//
// const a = (a: Obj) => {
//
// }
// a({a: 2, b: ''})
