import React, { useCallback, useEffect, useState } from 'react'
import { unstable_batchedUpdates } from 'react-dom'


export const ReactExample3_1_6 = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  console.log('render', count, count2)

  const onClick = () => {
    setTimeout(() => {
      unstable_batchedUpdates(() => {
        setCount(10)
        setCount2(10)
      })
    })
  }

  return (
    <div>
      <button
        onClick={onClick}
      >{count} {count2}</button>
    </div>
  )
}
