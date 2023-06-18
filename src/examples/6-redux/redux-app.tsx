import { Provider } from 'react-redux'
import { store } from './store'
import { Example1_Good } from './1-recreate-selector-on-every-render/good'
import { Example1_Bad } from './1-recreate-selector-on-every-render/bad'

export const ReduxApp = () => {
  return (
    <Provider store={store}>
      {/*<Example1_Good />*/}
      {/*<Example1_Bad />*/}
    </Provider>
  )
}
