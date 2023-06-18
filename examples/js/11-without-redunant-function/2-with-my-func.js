const logSelected = (data, selector) => {
  console.log(selector(data))
}

const data = {value: 42, a: ''}

const getValue = data => data.value

logSelected(data, getValue)
logSelected(data, data => getValue(data))
