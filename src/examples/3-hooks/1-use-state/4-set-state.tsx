import React, { useState } from 'react'

export const ReactExample3_1_4 = () => {
  const [counter, setCounter] = useState(0)

  const delayedIncrement = () => {
    setTimeout(() => {
      setCounter(counter + 1)
      // setCounter(counter => counter + 1)
    }, 1000)
  }

  return (
    <div>
      <button onClick={delayedIncrement}>{counter}</button>
    </div>
  )
}
