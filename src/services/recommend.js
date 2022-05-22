import request from "./axios.js";

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}