import { Map } from "immutable";

const defaultState = Map({
  currentSong: {}
})

export default function reducer(state = defaultState, action) {
  switch (action.key) {
    case "":
      
      break;
  
    default:
      return state;
      break;
  }
}