import React, { memo, useEffect, useRef, useCallback, useState } from 'react'

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { Carousel } from 'antd';

import { getTopBannerAction } from "../../store/actionCreators";
import { 
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
 } from "./style";
export default memo(
  function HYTopBanner() {
    // state
    const [currentIndex, setCurrentIndex] = useState(0)
     // 关联redux
    const { topBanners } = useSelector(state => ({
      topBanners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual)

    const dispathch = useDispatch()
    // 其他的Hooks
    const bannerRef = useRef()
    useEffect(()=>{
      dispathch(getTopBannerAction())
    },[dispathch])
    const bannersChange = useCallback((from, to)=>{
      setCurrentIndex(to)
    }, [])
    // 其他业务逻辑
    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl) + "?imageView&blur=40x20"
    return (
      <BannerWrapper bgImage={bgImage}>
        <div className='banner wrap-v2'>
          <BannerLeft>
          <Carousel effect="fade" autoplay ref={ bannerRef } beforeChange={bannersChange}>
            {
              topBanners.map((item, index)=>{
                return (
                  <div className='banner-item' key={item.imageUrl}>
                    <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button className='btn left' onClick={(e)=>{ bannerRef.current.prev() }}></button>
            <button className='btn right' onClick={(e)=>{ bannerRef.current.next() }}></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    )
  }
)