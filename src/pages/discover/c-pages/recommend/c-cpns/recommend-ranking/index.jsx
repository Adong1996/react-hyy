import React, { memo } from 'react'

import HYThemeHeaderRCM from '@/components/theme-header-rcm'

import { RankingWrapper } from "./style";

export default memo(
  function HYRecomendRanking() {
    return (
      <RankingWrapper>
        <HYThemeHeaderRCM title="榜单"/>
      </RankingWrapper>
    )
  }
)