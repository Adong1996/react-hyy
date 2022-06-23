import React, { memo, useEffect } from 'react'

import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import HYTopRanking from '@/components/top-ranking'

import { getTopList } from "@/services/recommend";

import { RankingWrapper } from "./style";

export default memo(
  function HYRecomendRanking() {

    useEffect(()=>{
      // getTopList(0).then((res)=>{
      // })
    })

    return (
      <RankingWrapper>
        <HYThemeHeaderRCM title="榜单"/>
        <div className='tops'>
          <HYTopRanking/>
        </div>
      </RankingWrapper>
    )
  }
)