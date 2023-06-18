import React, { useState } from 'react'

const hardComputation = () => {
  let sum = 0
  for (let i = 0; i < 100_000_000; i++) {
    sum += i
  }
  return sum
}

export const ReactExample3_1_3 = () => {
  // const [counter, setCounter] = useState(hardComputation())
  const [counter, setCounter] = useState(() => hardComputation())

  return (
    <div>
      <button onClick={() =>setCounter(counter + 1)}>{counter}</button>
    </div>
  )
}
