import { Provider } from 'react-redux'
import configureStore from './store'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app'

ReactDOM.render(
    <Provider store={configureStore()}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
