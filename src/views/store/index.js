import redex from "redux"

import reducer from './reducer.js'

const store = redex.createStore(reducer)

export default store