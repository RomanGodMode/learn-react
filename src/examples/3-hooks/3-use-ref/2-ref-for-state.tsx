import React, { useRef } from 'react'


export const ReactExample3_3_2 = () => {
  const valueRef = useRef(0)

  const increment = () => {
    valueRef.current++
    console.log(valueRef.current)
  }
  console.log('render')

  return (
    <div>
      <button onClick={increment}>Кнопка</button>
    </div>
  )
}
