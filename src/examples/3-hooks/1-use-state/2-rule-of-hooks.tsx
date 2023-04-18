import React, { useState } from 'react'

useState()

export const ReactExample3_1_2 = () => {
  if (true) {
    useState()
  }
  for (let i = 0; i < 1; i++) {
    useState()
  }
  return (
    <div>
      <button onClick={() => useState()}>
        кнопка
      </button>
    </div>
  )
}

//существуют правила хуков их нарушение приводит к крашу -> вместо приложения просто пустая html
// 1) нельзя вызывать хуки вне реакт компонентов или кастомных хуков
// 2) нельзя чтобы в рамках разных рендеров один и тот же компонент вызывал разные хуки или разный порядок хуков
