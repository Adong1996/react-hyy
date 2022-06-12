import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HOT_RECOMMEND_LIMIT } from "@/common/contants";
import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import HYSongsCover from '@/components/songs-cover'

import { getHotRecommendAction } from '../../store/actionCreators';

import { RecommendWrapper } from "./style";

export default memo(
  function HYHotRecommend() {

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispathch = useDispatch()

  // other hooks
  useEffect(()=>{
    dispathch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispathch])
    return (
      <RecommendWrapper>
        <HYThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子",]}/>
        <div className='recommend-list'>
          {
            hotRecommends.map((item)=>{
              return <HYSongsCover key={item.id} info={item} />
            })
          }
        </div>
      </RecommendWrapper>
    )
  }
)