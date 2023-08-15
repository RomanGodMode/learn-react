import React, { useCallback, useEffect, useState } from 'react'


export const ReactExample3_1_5 = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState()
  // console.log("count in render", count);
  // const onClick = () => {
  //   console.log("count", count);
  //   setCount(count + 1)
  //   console.log("count after set", count);
  //   setCount(count + 1)
  // }
  useEffect(() => {
    setCount(count + 1)
    console.log("count", count);
    setCount(count + 1)
    // setCount(count => count + 1)
    // setCount(count + 1)
  }, [])
  // const onClick = useCallback(
  //   () => {
  //     // console.log("count", count);
  //     // setCount(count + 1)
  //     // setCount(count + 1)
  //     // setCount(count => count + 1)
  //     // setCount(count => count + 1)
  //   },
  //   []
  // )

  return (
    <div>
      <button
        // onClick={onClick}
      >КНОПКА {count}</button>
    </div>
  )
}
