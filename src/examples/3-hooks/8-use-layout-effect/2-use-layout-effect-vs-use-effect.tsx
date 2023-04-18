import { useEffect, useLayoutEffect, useState } from 'react'

type Props = {}


export const ReactExample3_8_2 = (props: Props) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (value === 0) {
      setValue(9999999999)
    }
  }, [value])
  // useLayoutEffect(() => {
  //   if (value === 0) {
  //     setValue(9999999999)
  //   }
  // }, [value])

  const onClick = () => setValue(0)

  console.log('render')

  return (
    <div>
      <button onClick={onClick}>
        {value}
      </button>
    </div>
  )
}
