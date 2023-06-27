const obj = {
  a: {
    b: {
      value1: 1,
      value2: 2
    },
    c: {
      value: 42
    }
  }
}

{
  // const { value1, value2  } = obj.a.b
  // const {b, c } = obj.a
  const {b: {value1, value2}, c: {value}} = obj.a
  console.log("value1", value1);
  console.log("value2", value2);
}


//
// {
//   const { a: { b: { value1, value2: renamedValue2, value3: ren = 'Норм' } } } = obj
//   console.log('value1', value1)
//   console.log('value2', renamedValue2)
//   console.log('value3', ren)
// }
