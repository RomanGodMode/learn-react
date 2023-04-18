import { useMemo, useState } from 'react'


export const ReactExample3_5_1 = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)

  const [list, setList] = useState<number[]>([])
  const addItem = () => setList([...list, count])

  // const totalSum = list.reduce((num1, num2) => num1 + num2, 0)
  const totalSum = useMemo(
    () => list.reduce((num1, num2) => num1 + num2, 0),
    []
  )

  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={addItem}>add item</button>
      {list.map((item, index) => <div key={index}>{item}</div>)}
      <div>
        Сумма: {totalSum}
      </div>
    </div>
  )
}
