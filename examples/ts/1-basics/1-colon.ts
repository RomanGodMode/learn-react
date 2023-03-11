let num: number = 42
// num = 'строчка'

let num2 = 42
// num = 'строчка'

let classic: any = 42
classic = 'string'

const func = (num: number) => {
  console.log(num)
}
// func('sda')
// func()
func(classic)
func(num)

// это не как в c#
// не меняет рантайм никак
// просто утверждаём что эта штука полюбому такого типа
func('string' as unknown as number)

let shit: unknown = ''
shit = 2

func(shit as number)


// бесполезными являются(namespace, interface, enum)
// слишком сложные и редко используемые(infer, conditional types)