type Id = string | number
type Item = {
  id: Id
}
type PaginatedItems<T extends Item> = {
  items: T[]
  count: number
}

const func = <T extends Item>(paginatedItems: PaginatedItems<T>) => {
  paginatedItems.items.forEach(item => console.log(item.id))
}

func({count: 1, items: [{id: 1}, {id: 2}]})