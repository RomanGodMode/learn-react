import { useEffect, useLayoutEffect } from 'react'

type Props = {}


export const ReactExample3_8_1 = (props: Props) => {
  console.log('render before effects')
  useEffect(() => {
    console.log('1 useEffect')
  }, [])

  useLayoutEffect(() => {
    console.log('2 useLayoutEffect')
  }, [])

  useEffect(() => {
    console.log('3 useEffect')
  }, [])
  console.log('render after effects')

  return (
    <div>
      Эффекты!!!
    </div>
  )
}
