fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    console.log(err)
  })
  .finally(() => console.log('Отработает в любом случае'))


const fetchTodo = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    console.log('data', data)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('Отработает в любом случае')
  }
}