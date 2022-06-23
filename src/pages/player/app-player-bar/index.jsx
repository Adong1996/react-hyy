import React, { memo, useEffect } from 'react'

import { Slider, Switch } from 'antd';

import { getSongDetail } from "@/services/player";

import { 
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
 } from "./style";

export default memo(
  function HYAppPlayerBar() {

    //other hooks
    useEffect(()=>{
      getSongDetail(167877).then((res)=>{
        console.log(res)
      })
    })

    return (
      <PlaybarWrapper className='sprite_player'>
        <div className='content wrap-v2'>
          <Control>
            <button className='sprite_player prev'></button>
            <button className='sprite_player play'></button>
            <button className='sprite_player next'></button>
          </Control>
          <PlayInfo>
            <div className='image'>
              <a href="/#">
                <img src="https://p4.music.126.net/JPgkCD1H2XD7MOkzBjf1ZA==/1697645953293981.jpg?param=34y34" alt="" />
              </a>
            </div>
            <div className='info '>
              <div className='song'>
                <span className='song-name'>红豆</span>
                <a href='#/' className='singer-name'>要不要买菜</a>
              </div>
              <div className='progress'>
              <Slider defaultValue={30}  />
              <div className='time'>
                <span className='now-time'>02:30</span>
                <span className='divider'>/</span>
                <span className='duration'>04:30</span>
              </div>
              </div>
            </div>
          </PlayInfo>
          <Operator>
            <div className='left'>
              <button className='sprite_player btn pip'></button>
              <button className='sprite_player btn favor'></button>
              <button className='sprite_player btn share'></button>
            </div>
            <div className='right sprite_playbar'>
            <button className='sprite_player btn volume'></button>
            <button className='sprite_player btn loop'></button>
            <button className='sprite_player btn playlist'></button>
            </div>
          </Operator>
        </div>
      </PlaybarWrapper>
    )
  }
)