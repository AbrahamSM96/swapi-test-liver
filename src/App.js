import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import './App.css'
import Detail from './pages/Detail'
import Favorites from './pages/Favorites'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
