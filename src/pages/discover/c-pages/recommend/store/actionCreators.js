import * as actionType from "./constants";

import { getTopBanners } from "@/services/recommend"
export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      console.log(res);
    })
  }
} 