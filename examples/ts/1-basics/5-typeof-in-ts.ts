const obj = {
  a: 42,
  b: 'dsadas',
  func: (value: string | null) => value && value + 42
}

type Obj = typeof obj