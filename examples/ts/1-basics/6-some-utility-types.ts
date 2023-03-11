import { CSSProperties } from 'react'

type ButtonVariant = 'red' | 'green' | 'yellow'

const buttonVariantsToStyle: Record<ButtonVariant, CSSProperties> = {
  red: {background: "red"},
  green: {background: "green"},
  yellow: {background: "yellow"}
}

const variant: ButtonVariant = 'red'
console.log(buttonVariantsToStyle[variant])


type Obj1 = {
  a: string,
  b: string,
  c: number
}
type Obj2 = Pick<Obj1, 'a' | 'b'>

const obj2: Obj2 = {a: '', b: ''}