fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    console.log(err)
  })
  .finally(() => console.log('Отработает в любом случае'))


const fetchTodo = async id => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data = await res.json()
    console.log('data', data)
  } catch (e) {
    console.log(e)
  } finally {
    console.log('Отработает в любом случае')
  }
}

const fetchMultipleTodos = async () => {
  const [todo1, todo2, todo3] = await Promise.all([
    fetchTodo(1),
    fetchTodo(2),
    fetchTodo(3)
  ])
}
