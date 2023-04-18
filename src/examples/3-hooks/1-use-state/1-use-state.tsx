import React, { useState } from 'react'

export const ReactExample3_1_1 = () => {
  const [counter, setCounter] = useState(0)

  console.log('counter', counter)

  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}
// реактовский компонент это всего лишь функция которая возвращает jsx
// , то как мы вызываем его `<Component/>` всего лишь сахар
// рендер компонента - это вызов функции(компонента)

// функция `setCounter` -> заставляет компонент заререндерится с заданным значением `counter`

// virtual dom это
//   легковесная версия обычного дом, которая по структуре является деревом javascriptовых обьектов описывающих каждую ноду
//   реакт каждый рендер генерит новый virtal-dom
//   сравнивает его со старым -> разницу применяет на браузерный dom чтобы он соответсвовал новому виртуальному дому
