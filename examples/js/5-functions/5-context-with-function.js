const obj = {
  name: "obj",
  func () {
    console.log(this)
  },
  // func: function () {
  //   console.log(this)
  // }
}


// obj.func()

const otherObject = {name: "otherobj"}

otherObject.func = obj.func
otherObject.func()

// otherObject.func = obj.func.bind(obj)
// otherObject.func()
//
// otherObject.func = obj.func
// otherObject.func.call(obj)
//
// otherObject.func = obj.func
// otherObject.func.apply(obj)
