setTimeout(() => {
  console.log('Таймаут 2')
}, 100)

setTimeout(() => {
  console.log('Таймаут 1')
}, 0)

console.log('Самый первый лог')