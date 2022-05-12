import React, { memo } from 'react'

import { HashRouter as Router } from 'react-router-dom';

import GetRoutes from './router'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
export default memo(
  function App() {
    return (
      <div>
        <Router>
          <AppHeader/>
            <GetRoutes/>
          <AppFooter/>
        </Router>
      </div>
    )
  }
)

