import * as actionType from "./constants";

import { 
  getTopBanners,
  getHotRecommend,
  getNewAlbum
 } from "@/services/recommend"

// 改变状态
const changeToBannerAction = (res) => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeToRecommendAction = (res) => ({
  type: actionType.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

const changeToNewAlbumAction = res => ({
  type: actionType.CHANGE_New_ALBUM,
  newAlbums: res.albums
})
//异步网络请求
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeToBannerAction(res))
    })
  }
} 

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommend(limit).then(res => {
      dispatch(changeToRecommendAction(res))
    })
  }
}

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(res => {
      dispatch(changeToNewAlbumAction(res))
    })
  }
}

