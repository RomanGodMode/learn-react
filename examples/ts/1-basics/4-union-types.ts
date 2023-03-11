type Id = string | 42 | null

type Obj = {
  id: Id
}

const obj1: Obj = {
  id: 42
}
const obj2: Obj = {
  id: '2dasdasdsad'
}
const obj3: Obj = {
  id: null
}

// narrowing(сужение типа)
const checkId = (obj: Obj) => {
  if (obj.id) {// это условие отсекает null
    const a = obj.id
    if (obj.id !== 42) {
      const b = obj.id
      console.log(b)
    }
  }
}