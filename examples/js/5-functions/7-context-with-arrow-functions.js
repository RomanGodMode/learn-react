

const obj = {
  name: "obj",
  // func: () => {
  //   console.log(this)
  // },
  nestedFunctions(){
    const nestedArrowFunction = () => {
      console.log(this)
    }
    nestedArrowFunction()
  }
}

// obj.func()
obj.nestedFunctions()
