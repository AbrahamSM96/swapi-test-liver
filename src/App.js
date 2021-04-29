import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cards from './pages/Cards'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/cards" component={Cards} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
