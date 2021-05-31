import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const localStorageList = localStorage.getItem('favoritesStorage')

const initialState = {
  favoriteCharacters: [],
  data: [],
  search: ''
}
if (localStorageList) {
  initialState.favoriteCharacters = JSON.parse(localStorageList)
}
const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
