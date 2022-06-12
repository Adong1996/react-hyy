import { Map } from "immutable";

import * as actionType from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: []
})
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionType.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    case actionType.CHANGE_New_ALBUM:
      return state.set("newAlbums", action.newAlbums)
    default:
      
      return state
  }
}

export default reducer