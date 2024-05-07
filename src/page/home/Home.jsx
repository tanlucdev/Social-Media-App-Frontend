import React from 'react'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import './home.css'

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <div className="profileSide">Posts</div>
      <div className="profileSide">Rightside</div>
    </div>
  )
}

export default Home
