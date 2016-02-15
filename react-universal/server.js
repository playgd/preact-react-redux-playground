'use strict'

import path from 'path'
import express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from './reducers'
import App from './containers/app'
import { fetchCounter } from './api/counter'
import { renderToString } from 'react-dom/server'

const app = express()
const port = 3000

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(handleRender)

function handleRender(req, res) {
  fetchCounter((apiResult) => {
    const params = req.query && req.query.counter
    const initialState = params || [ apiResult ]

    const store = createStore(counterApp, initialState)
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const finalState = store.getState()
    res.send(renderFullPage(html, finalState))
  })
}



function renderFullPage(html, initialState) {
  return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div data-js="main">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>`
}

app.listen(port, () => console.log('Server listening on port', port))
