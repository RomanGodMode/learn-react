const obj = {
  name: "obj",
  func () {
    function nestedFunction () {
      console.log(this)
    }
    nestedFunction()
  },
}
obj.func()
