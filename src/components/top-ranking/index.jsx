import React, { memo } from 'react'

import { getSizeImage } from "@/utils/format-utils";

import { TopRankingWrapper } from "./style";



export default memo(
  function HYTopRanking(props) {
    const { info={} } = props
    return (
      <TopRankingWrapper>
        <div className='header'>
          <div className='image'>
            <img src={getSizeImage(info?.coverImgUrl)} alt="" />
            <a href="/todo" className='image_cover'></a>
          </div>
          <div className='info'>
            <a href="/todo">{info.name}</a>
            <div>
              <div className='btn play sprite_02'></div>
              <div className='btn favor sprite_02'></div>
            </div>
          </div>
        </div>
        <div className='list'>
          
        </div>
        <div className='footer'></div>
      </TopRankingWrapper>
    )
  }
)