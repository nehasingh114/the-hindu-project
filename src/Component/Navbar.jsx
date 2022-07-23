import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import '../fontawesome-free-6.0.0-web/css/all.css'
import New_page from '../Pages/New_page'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { LeftSideBarAction, LoginFunction, ProfileSideBar } from '../Redux/Action'
import { LeftSideBar } from './LeftSideBar'

export const Navbar = () => {
  const logValue = useSelector((Store) => Store.loginStatus)
  const profileBarVal = useSelector((Store) => Store.ProfileSideBar)
  const LeftBarVal = useSelector((Store) => Store.LeftSideBar)
  const dispatch = useDispatch()
  const showsidebar = () => {
    dispatch(ProfileSideBar(true))
  }
  const loginfun = () => {
    dispatch(LoginFunction(true))
  }
  const OpenLeftSideBar = () => {
    dispatch(LeftSideBarAction(true))
  }
  return (
    <>
      <header id='header-1'>
        <div id='header-2'>

          <div className='header-3'>
            <div id='header-search'>
              <span><i onClick={OpenLeftSideBar} class="fa-solid fa-bars" style={{ color: "grey" }}></i> <strong>Explore</strong></span>
              {LeftBarVal ? <LeftSideBar flag={true} /> : <LeftSideBar flag={false} />}
              {/* {openmode && <New_page closemodel={setopenmode} />} */}
              <div style={{ marginLeft: "80px" }}><span><i class="fa-solid fa-magnifying-glass" style={{ color: "white" }}></i>
                <Link to="/Search"><strong>Search</strong></Link></span>
              </div>
            </div>
            <div id='free-trial-1'><p>Tuesday, May 03, 2022 New Delhi 37C</p><span><i class="fa-solid fa-cloud"></i></span></div>
          </div>
          <div className='header-3'>
            <img id='header-3-img' src="https://www.thehindu.com/theme/images/th-online/logo.png" alt="" />
          </div>
          <div className='header-3'>
            <div id='header-search-2'>
              <span><i class="fa-solid fa-gamepad" style={{ color: "grey" }}></i> <strong>Games</strong></span>

              <div><span><i class="fa-regular fa-newspaper" style={{ color: "white" }}></i>
                <strong>E-Paper</strong></span> </div>

              <div><span><i class="fa-solid fa-user-large"></i>
                {logValue ? <strong onClick={showsidebar}>Profile</strong> : <Link to={'/login'}><strong onClick={loginfun}>Log In</strong></Link>}
              </span>
              </div>
            </div>

            <div id='free-trial'><p>Start 15 Days Free Trial</p><button>Subscribe Now</button></div>
          </div>
        </div>
      </header>
      {profileBarVal ? <Sidebar flag={true} /> : <Sidebar flag={false} />}

      {/* /////////////////////////////////////////////////////////////////////////////// */}
      <div id='list-item'>
        <div id='list-item-2'>

          <div> <Link to="/" className='Link'>Home</Link>   </div>

          <div><Link to="/Latest" className='Link'>Today'sPaper</Link></div>
          <div><Link to="/India" className='Link'>News</Link></div>
          <div><Link to="/World" className='Link'>Business</Link></div>
          <div><Link to="/Cities" className='Link'>Crisis</Link></div>
          <div><Link to="/Entertainment" className='Link'>Entertainment</Link></div>
          <div><Link to="/Cricket" className='Link'>Sport</Link></div>

          <div><Link to="/LifeStyle" className='Link'>Lifestyles</Link></div>
          <div><Link to="/Astrology" className='Link'>Science</Link></div>
          <div><Link to="/Editorials" className='Link'>Editorials</Link></div>
          <div><Link to="/ForYou" className='Link'>Get Trial</Link></div>
          <div><Link to="/Saved" className='Link'>Subscrine Now</Link></div>

        </div>
      </div>
    </>
  );
};
