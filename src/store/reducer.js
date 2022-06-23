// import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable";

import {reducer as recommendReducer } from "@/pages/discover/c-pages/recommend/store"
import {reducer as playReducer } from "@/pages/player/store"

const Reducer = combineReducers({
  recommend: recommendReducer,
  player: playReducer
})

export default Reducer