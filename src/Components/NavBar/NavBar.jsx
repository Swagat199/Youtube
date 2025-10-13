import React from 'react'
import './NavBar.css'
import menuIcon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search.png'
import uploadIcon from '../../assets/upload.png'
import moreIcon from '../../assets/more.png'
import notificationIcon from '../../assets/notification.png'
import profileIcon from '../../assets/user_profile.jpg'
import { Link } from 'react-router-dom'

function NavBar({setSidebar}) {
  
  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img className='menu-icon' src={menuIcon} alt=''  onClick={()=>{setSidebar(prev=>prev===false?true:false)}}/>
            <Link to='/'><img className='logo' src={logo} alt=''/></Link>
            
        </div>
         <div className="nav-middle flex-div">
            <div className="search-box flex-div">
            <input className='search-bar' type="text" placeholder='Search' />
            <img className='' src={searchIcon} alt=''/>
            </div>
         </div>
          <div className="nav-right flex-div">
            <img src={uploadIcon} alt='' />
            <img src={moreIcon} alt='' />
            <img src={notificationIcon} alt='' />
            <img src={profileIcon} alt='' className='user-icon' />
          </div>
    </nav>
  )
}

export default NavBar