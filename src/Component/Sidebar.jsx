import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { EditProfileAction, ProfileSideBar } from '../Redux/Action'
import './Sidebar.css'
// import '../fontawesome-free-6.0.0-web/css/all.css'
const Sidebar = ({ flag }) => {
  const dispatch = useDispatch()
  const CloseSideBar = () => {
    dispatch(ProfileSideBar(false))
  }
  const handleEditProfile = () => {
    dispatch(EditProfileAction(true))
    dispatch(ProfileSideBar(false))
  }
  let number = JSON.parse(localStorage.getItem("TheHindCurrentUser"))
  let email = JSON.parse(localStorage.getItem("HinduEmail"))
  return (
    <div id={flag ? "sidebar" : "sidebar2"}>
      <div style={{ textAlign: "right", color: "white", fontSize: "28px", padding: "5px 20px 0px 0px", backgroundColor: "#011e29" }}><i onClick={CloseSideBar} class="fas fa-times"></i></div>
      <div id='sidebar-1'>
        <div id='sidebar-img'>G</div>
        <h2 className='h23'>Reader</h2>
        <div className='h23'>{number}</div>
        <div className='h23'>{email}</div>
        <Link to="/EditProfile">
          <button onClick={handleEditProfile} id='btn'>Edit Profile</button>
        </Link>
      </div>
      <div id='sidebar-2'>
        <div className='input'>Start 15 Days Free Trial</div>
        <div className='input'>Saved Articles</div>
        <div className='input'>Following</div>
        <div className='input'><Link to='/History' style={{ color: "black" }}>My Reads</Link></div>
        <div className='input'>Sign out</div>
      </div>
    </div>
  )
}

export default Sidebar