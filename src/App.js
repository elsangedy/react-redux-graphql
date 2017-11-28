import React, { Component } from 'react'

import { Provider } from 'react-redux'

import Root from './containers/Root'

import configStore from './store'

class App extends Component {
  render() {
    const store = configStore()

    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

export default App