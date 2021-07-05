import React, { Component } from 'react'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import AppRouter from './router/appRouter.js'


class App extends Component {
    render() {
        return (
            <div>
              <HashRouter>
                 <AppRouter/>
              </HashRouter>
            </div>
        )
    }
}
export default App