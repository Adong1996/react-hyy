import React, { memo } from 'react'
import { connect, useDispatch } from "react-redux";
function HYRecommend() {
  const dispathch = useDispatch()
  return (
    <div>
      HYRecommend
    </div>
  )
}

export default memo(HYRecommend)

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend))