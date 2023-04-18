import React from 'react'
import { useCounter } from './use-counter';

export const ReactExample3_7_1 = () => {
  const { count, increment } = useCounter();

  return (
    <div>
      <button onClick={increment}>increment</button>
    </div>
  )
}
