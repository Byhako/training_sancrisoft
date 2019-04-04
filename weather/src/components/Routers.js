import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './App'
import Results from './Results'

const noFound = () => (<p>Not Found</p>)

function Routers () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/results' component={Results} />
        <Route component={noFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routers
