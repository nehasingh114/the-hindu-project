import React from 'react'
import './Editprofile.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { EditProfileAction } from '../Redux/Action'
const EditProfile = () => {
  // const EditProfilevalue = useSelector((Store) => Store.EditProfile)
  const dispatch = useDispatch()
  const handleHome = () => {
    dispatch(EditProfileAction(false))
  }
  return (
    <>
      <div id='Profile-page-header'>
        <img id='Profile-page-header-img' src="https://www.thehindu.com/theme/images/th-online/logo.png" alt="" />
      </div>
      <div id='Profile-page-header-2'>

        <div id='go'><Link to='/' onClick={handleHome}><i class="fa-solid fa-arrow-left"></i></Link><Link to='/' onClick={handleHome}><span>Go Back</span></Link></div>
        <div><h1 id='EditProfileH1'>Edit Profile</h1></div>
        <div id='profile-content'>
          <div className='edit-sec'>Add Your Name<i class="fa-solid fa-pen"></i></div>
          <div className='edit-sec'>Add Email</div>
          <div className='edit-sec'>Add Contact Number<i class="fa-solid fa-plus"></i></div>
          <div className='edit-sec'>Add Gender<i class="fa-solid fa-pen"></i></div>

        </div>

      </div>





    </>
  )
}

export default EditProfile
