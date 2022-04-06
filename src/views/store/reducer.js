const defaultState = {
  counter: 0
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "add":
      return {...state, counter: state.counter + action.num}
      break;
    case "inc":
      return {...state, counter: state.counter - action.num}
      break;
  
    default:
      return state
      break;
  }
}

export default reducer