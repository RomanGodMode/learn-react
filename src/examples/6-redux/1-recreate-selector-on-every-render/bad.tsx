import { useDispatch } from 'react-redux'
import { doSome, increment, selectCounter } from '../counterSlice'
import { useAppSelector } from '../store'


export const Example1_Bad = () => {
  const counter = useAppSelector(state => {
    console.log('bad selector running...')
    return state.counter.value
  })
  console.log('bad rendered')
  const dispatch = useDispatch()

  const dispatchAction = () => dispatch(doSome())

  return (
    <div>
      <button onClick={dispatchAction}>dispatch action</button>
      <button onClick={() => dispatch(increment())}>{counter}</button>
    </div>
  )
}

