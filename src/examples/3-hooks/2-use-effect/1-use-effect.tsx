import React, { useEffect, useState } from 'react'

export const ReactExample3_2_1 = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('effect')
  }, [counter])// когда значение counter поменяется относительно предыдущего рендера
  console.log('render')

  useEffect(() => {
    console.log('после КАЖДОГО ререндера')
  })

  useEffect(() => {
    console.log('При маунте')
  }, [])

  const increment = () => setCounter(counter + 1)

  return (
    <div>
      <button onClick={increment}>{counter}</button>
    </div>
  )
}
