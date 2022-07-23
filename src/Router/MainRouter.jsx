import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { BelowNavBar } from '../Component/styles'
import '../Component/common.css'
import { Sports } from '../Pages/Sports'
import { LifeStyle } from '../Pages/LifeStyle'
import { Astrology } from '../Pages/Astrology'
import { Editorial } from '../Pages/Editorial'
import { ForYou } from '../Pages/ForYou'
import { Home } from '../Pages/Home'
import { LeftSideNewsContainer } from '../Pages/LeftSideNewsContainer'
import { RightSideNewsContainer } from '../Pages/RightSideNewsContainer'
import { Entertainment } from '../Pages/Entertainment'
import { Latest } from '../Pages/Latest'
import { India } from '../Pages/India'
import { World } from '../Pages/World'
import { Cities } from '../Pages/Cities'
import { Search } from '../Pages/Search'
import { SavedNews } from '../Pages/SavedNews'
import { SingleNews } from '../Pages/SingleNews'
import EditProfile from '../Component/EditProfile'
import { Login } from '../Component/Login'
import { History } from '../Pages/Histoty'
export const MainRouter = () => {
  return (
    <>
      <BelowNavBar id='BelowNavBar'>
        <LeftSideNewsContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/History' element={<History />} />
          <Route path='/Latest' element={<Latest />} />
          <Route path='/India' element={<India />} />
          <Route path='/World' element={<World />} />
          <Route path='/Cities' element={<Cities />} />
          <Route path='/Entertainment' element={<Entertainment />} />
          <Route path='/Cricket' element={<Sports />} />
          <Route path='/LifeStyle' element={<LifeStyle />} />
          <Route path='/Astrology' element={<Astrology />} />
          <Route path='/Editorial' element={<Editorial />} />
          <Route path='/ForYou' element={<ForYou />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/SingleNews' element={<SingleNews />} />
          <Route path='/Saved' element={<SavedNews />} />
        </Routes>
        <RightSideNewsContainer />
      </BelowNavBar>
    </>
  )
}
