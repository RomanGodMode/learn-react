const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time)
  })
};

(async () => {
  console.log('начали ждать')
  await wait(1000)
  console.log('Подождали')
})()