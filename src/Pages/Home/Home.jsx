import React, { useState } from 'react'
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar'
import Feed from '../../Components/Feed/Feed'

function Home({sidebar}) {
  const[category,setCategory] = useState(0)
  return (
    <div className='main-container'>
        <SideBar sidebar={sidebar} category={category} setCategory={setCategory} />
        <div className={`'container' ${sidebar?'small-container':'container'}`}>
          <Feed category={category} />
        </div>
    </div>
  )
}

export default Home