import React, { memo, Suspense } from 'react'

import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';

import GetRoutes from './router'
import store from './store'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppPlayerBar from './pages/player/app-player-bar'

export default memo(
  function App() {
    return (
      <div>
        {/* store 共享数据 */}
        <Provider store={store}>
          <HashRouter>
            <Suspense fallback={
              <div>路由懒加载。。。 </div>
            }>
              <AppHeader/>
                <GetRoutes/>
              <AppFooter/>
              <AppPlayerBar/>
            </Suspense>
          </HashRouter>
        </Provider>
      </div>
    )
  }
)

