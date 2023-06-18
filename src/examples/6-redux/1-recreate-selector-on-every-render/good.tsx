import { useDispatch, useSelector } from 'react-redux'
import { doSome, increment, selectCounter } from '../counterSlice'


export const Example1_Good = () => {
  const counter = useSelector(selectCounter)
  console.log('good rendered')
  const dispatch = useDispatch()

  const dispatchAction = () => dispatch(doSome())

  return (
    <div>
      <button onClick={dispatchAction}>dispatch action</button>
      <button onClick={() => dispatch(increment())}>{counter}</button>
    </div>
  )
}
