import React from 'react'

export const ReactExample1_2 = () => {
  const title = "тайтл из переменной"

  return (
    <div className="названиеКласса">
      <div title={title}>НАВИДИ</div>
      <div title="Статический тайтл">НАВИДИ</div>

      <button
        onClick={() => console.log('НАЖАЛИ!')}
      >
        Кнопка
      </button>
    </div>
  )
}
