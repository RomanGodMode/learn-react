import React, { useEffect, useState } from 'react'
import { createLogger } from 'vite'

type Props = {
  counter: number
  increment: () => void
}

export const Counter = ({counter, increment}: Props) => {
  useEffect(() => {
    console.log('Маунт')
    return () => console.log("анмаунт")
  }, [])

  return (
    <div>
      <button onClick={increment}>{counter}</button>
    </div>
  )
}

export const ReactExample3_2_2 = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)

  // useEffect(() => {
  //   console.log('Делаем грязюку')
  //   return () => {
  //     console.log('Убираем грязюку')
  //   }
  // }, [counter])

  const isEven = counter % 2 === 0

  return (
    <div>
      <button onClick={decrement}>Говоришь спасибо</button>
      <button onClick={increment}>Говоришь да</button>
      {isEven && <Counter counter={counter} increment={increment}/>}
    </div>
  )
}
