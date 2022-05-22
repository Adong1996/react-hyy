import { combineReducers } from "redux";

import {reducer as recommendReducer } from "@/pages/discover/c-pages/recommend/store"
const Reducer = combineReducers({
  recommend: recommendReducer
})

export default Reducer