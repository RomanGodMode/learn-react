
type ButtonVariant = 'red' | 'green' | 'yellow'

const buttonVariantsToStyle: Record<ButtonVariant, number> = {
  red: 1,
  green: 2,
  yellow: 3
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