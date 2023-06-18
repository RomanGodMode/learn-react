let num = 42
// num = 'строчка'

let num2 = 42
// num = 'строчка'

let classic: 42 | string = 42
classic = 'string'

const func = (num: number) => {
  console.log(num)
}
// func('sda')
// func()
// func(classic)
func(num)

// это не как в c#
// не меняет рантайм никак
// просто утверждаём что эта штука полюбому такого типа
func('string' as any as number)

func('string' as any)
func('string' as unknown)

let shit: unknown = ''
shit = 2

if (typeof shit === 'number') {
  func(shit)
}

type A = {a: string} extends { a: number } ? number : string


// бесполезными являются(namespace, interface, enum)
// слишком сложные и редко используемые(infer, conditional types)
