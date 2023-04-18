import React from 'react'

// react может рендерить списки цифр, строк и jsx элементов
export const ReactExample1_4 = () => {
  const numbers = [1, 2, 3]
  const strings = ['вопросы', 'будут', 'заданы']
  const listOfJsx = [<div>42</div>, <h5>Жавасикс</h5>, <button>Кнопка</button>]

  return (
    <div>
      <p>{numbers}</p>
      <p>{strings}</p>

      <div style={{display: "flex", alignItems: "center", gap: 10}}>
        {listOfJsx}
      </div>
    </div>
  )
}
