import React from 'react'
import ReactDOM from 'react-dom'

import './config/reactotron'

import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import 'semantic-ui-css/semantic.min.css'
import 'react-activity/dist/react-activity.css'

import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store'

import { ToastContainer } from 'react-toastify'

import MusicsScreen from './pages/MusicsScreen'
import SignupScreen from './pages/SignupScreen'
import SigninScreen from './pages/SigninScreen'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <MusicsScreen />
            </Route>
            <Route exact path='/musics'>
              <MusicsScreen />
            </Route>
            <Route exact path='/signup'>
              <SignupScreen />
            </Route>
            <Route exact path='/signin'>
              <SigninScreen />
            </Route>
          </Switch>
        </Router>
        <ToastContainer />
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>,

  document.getElementById('root')
)
