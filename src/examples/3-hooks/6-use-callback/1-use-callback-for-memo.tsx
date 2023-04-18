import React, { memo, useCallback, useState } from 'react'


type ButtonProps = {
  text: string
  onClick: () => void
}

export const Button = memo(({text, onClick}: ButtonProps) => {
  console.log('render Button')
  return (
    <button onClick={onClick}>{text}</button>
  )
})

export const ReactExample3_6_1 = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  console.log('render Parent')

  // const onClick = () => {
  //   console.log('КЛИК')
  // }
  const onClick = useCallback(() => {
    console.log('КЛИК')
  }, [])

  return (
    <div>
      <button onClick={increment}>increment</button>
      <Button text="Текст" onClick={onClick}/>
    </div>
  )
}
