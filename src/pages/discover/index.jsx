import React, {memo, useEffect} from 'react';
import { NavLink, Outlet } from "react-router-dom";

import { 
  dicoverMenu
} from "@/common/local-data";

import request from "@/services/axios.js"
import {
  DiscoverWrapper,
  TopMenu
} from "./style";

export default memo(function HYDiscover(props) {

  useEffect(()=>{
    request({
      url: "/banner"
    }).then(res => {
      console.log(res,"333");
    })
  })

  const { route } = props;

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              );
            })
          }
        </TopMenu>
        
      </div>
      <Outlet/>
    </DiscoverWrapper>
  )
})
