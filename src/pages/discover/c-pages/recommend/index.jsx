import React, { memo, useEffect, useState } from 'react'

import HYTopBanner from './c-cpns/top-banner/index'
import { RecommendWrapper } from "./style";

function HYRecommend(props) {

  return (
    <RecommendWrapper>
      <HYTopBanner/>
    </RecommendWrapper>
  )
}

export default memo(HYRecommend)


// function HYRecommend(props) {
//   const {getBanners, topBanners} = props
//   // const dispathch = useDispatch()
//   useEffect(()=>{
//     getBanners()
//   },[getBanners])
//   return (
//     <div>
//       HYRecommend
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// // export default memo(HYRecommend)

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend))