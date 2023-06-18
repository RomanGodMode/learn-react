import { ReactNode } from 'react'

type NumeratedListProps<T> = {
  items: T[]
  renderItem: (item: T) => ReactNode
}
//кринжовая запятая нужна потому-что глупый jsx-парсер иначе бы думал что это тег
export const NumeratedList = <T,>({items, renderItem}: NumeratedListProps<T>) => {
  return (
    <div>
      {items.map((item, index) => <div>
        <span>{index + 1}</span>
        {renderItem(item)}
      </div>)}
    </div>
  )
}

export const ReactExample4_2_1 = () => {
  return (
    <div>
      <NumeratedList
        items={[{name: 'Чел'}, {name: 'Мужик'}]}
        renderItem={item => <div>{item.name}</div>}
      />
    </div>
  )
}
