{
  const a = { value: 42 }
  const b = a

  b.value = 'Испортил значение'

  console.log('Обьекты:')
  console.log('a', a)
  console.log('b', b)
}


{
  const a = 42
  let b = a

  b = 'Испортил значение'

  console.log('Тупа цифры:')
  console.log('a', a)
  console.log('b', b)
}
