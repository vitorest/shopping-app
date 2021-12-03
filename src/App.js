import React, { Component } from 'react'
import { Routes, Route } from 'react-router'
import MenPage from './pages/MenPage'
import WomenPage from './pages/WomenPage'
import KidsPage from './pages/KidsPage'
import MainNavigation from './components/layout/MainNavigation'

export default class App extends Component {
  render() {
    return (
      <div>
        <MainNavigation />

        <Routes>
          <Route path='/' element={<WomenPage />}>
          </Route>
          <Route exact path='/men' element={<MenPage />}>
          </Route>
          <Route path='/kids' element={<KidsPage />}>
          </Route>
        </Routes>
      </div>
    )
  }
}
