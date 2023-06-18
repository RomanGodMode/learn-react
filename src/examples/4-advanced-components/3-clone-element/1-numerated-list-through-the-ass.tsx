import { Children, cloneElement, ReactNode } from 'react'

type NumeratedListProps = {
  children: ReactNode
}


export const NumeratedList =({children}: NumeratedListProps) => {
  return (
    <div>
      {Children.map(children, ((child, index) => <div>
        <span>{index + 1}</span>
        {cloneElement(child as any, {num: index + 1})}
      </div>))}
    </div>
  )
}


type ItemProps = {
  title: string
  num: number
}

export const Item = ({title, num}: ItemProps) => {
  return (
    <div>
      {title}
      {num}
    </div>
  )
}

export const ReactExample4_3_1 = () => {
  const items = ['Дота', 'Марс', 'Никс']

  /*  чтобы typescript не ругался приходится смешно прокидывать */
  return (
    <NumeratedList>
      <Item title="айтем" num={0}/>
      {/*<Item title="айтем 2" num={0}/>*/}
      {/*{items.map(item => <Item key={item} title={item} num={0}/>)}*/}
    </NumeratedList>
  )
}
