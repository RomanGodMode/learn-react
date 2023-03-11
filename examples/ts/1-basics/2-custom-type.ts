type Obj = {
  name: string
  value: number
  gigaConst: 'secretConst'
  func: (arg1: number, arg2: string) => boolean
  optionalField?: string
}

const obj: Obj = {
  name: '',
  value: 2,
  gigaConst: 'secretConst',
  func: (arg1, arg2) => arg1 === Number(arg2),
  optionalField: ''
}