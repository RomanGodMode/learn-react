import React, { memo, useMemo, useState } from 'react'


type ButtonProps = {
  obj: {
    value: number,
    name: string
  }
}

const Button = memo(({obj}: ButtonProps) => {
  console.log('render button')
  console.log('obj', obj)
  return (
    <button>Текст</button>
  )
})


export const ReactExample3_5_2 = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)

  const obj = {
    value: 42,
    name: 'button'
  }
  // новый обьект будет создаваться каждый рендер
  // пусть он и будет содержать одинаковые значения, обьекты сравниваются по ссылке
  // memo всегда будет ререндерить button поскольку пропс obj меняется

  // const obj = useMemo(() => ({
  //   value: 42,
  //   name: 'button'
  // }), [])
  // единожды создадим обьект при первом рендере


  return (
    <div>
      <button onClick={increment}>increment</button>
      <Button obj={obj}/>
    </div>
  )
}
