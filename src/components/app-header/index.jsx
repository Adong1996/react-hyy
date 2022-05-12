import { NavLink } from "react-router-dom";

import React, { memo } from 'react'

export default memo(
  function AppHeader() {
    return (
      <div>
        <NavLink to="/">发现音乐</NavLink>
        <NavLink to="/mine">我的音乐</NavLink>
        <NavLink to="/friend">我的朋友</NavLink>
      </div>
    )
  }
)