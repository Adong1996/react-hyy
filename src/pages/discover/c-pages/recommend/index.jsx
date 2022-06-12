import React, { memo, useEffect, useState } from 'react'

import HYHotRecommend from './c-cpns/hot-recommend'
import HYTopBanner from './c-cpns/top-banner'
import HYRecomendRanking from './c-cpns/recommend-ranking'
import HYNewAlbum from './c-cpns/new-album'
import { 
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
 } from "./style";

function HYRecommend(props) {

  return (
    <RecommendWrapper>
      <HYTopBanner/>
      <Content className='wrap-v2'>
        <RecommendLeft>
        <HYHotRecommend/>
        <HYNewAlbum/>
        <HYRecomendRanking/>
        </RecommendLeft>
        <RecommendRight>
        </RecommendRight>
      </Content>
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