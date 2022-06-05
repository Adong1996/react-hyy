import * as actionType from "./constants";

import { getTopBanners } from "@/services/recommend"

// 改变状态
const changeToBannerAction = (res) => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

//异步网络请求
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeToBannerAction(res))
    })
  }
} 