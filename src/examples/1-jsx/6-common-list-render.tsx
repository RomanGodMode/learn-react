import React from 'react'

export const ReactExample1_5 = () => {
  const list = [
    { id: 1, value: 2 },
    { id: 2, value: "бывает ли такое" },
    { id: 3, value: 2 },
  ]

  return (
    <div>
      {list.map(item => <div key={item.id}>{item.value}</div>)}
      <hr/>
      {list.map(({id, value}) => <div key={id}>{value}</div>)}
    </div>
  )
}
