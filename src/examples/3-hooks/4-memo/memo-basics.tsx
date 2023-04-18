import React, { memo, useState } from 'react'


type ButtonProps = {
  text: string
  onClick: () => void
}

// const Button = memo(({text}: ButtonProps) => {
//   console.log("render Button")
//   return (
//     <button>
//       {text}
//     </button>
//   )
// })

const Button = ({text, onClick}: ButtonProps) => {
  console.log("render Button")
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const onClick = () => {
  console.log('click')
}

export const ReactExample3_4_1 = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)

  console.log('render parent')

  // const onClick = () => {
  //   console.log('click')
  // }

  return (
    <div>
      <button onClick={increment}>{count}</button>
      <Button text="Кнопка" onClick={onClick}/>
    </div>
  )
}
