import React from 'react'

export const ReactExample1_3 = () => {
  const num = 42

  const reactElementInVariable = <div>
    <p>ЫЫ эта верстка прямо внутри переменной!!!</p>
    цифирка - {num}
  </div>

  return (
    <div>
      {reactElementInVariable}
    </div>
  )
}
