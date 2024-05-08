import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import './home.css'

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <div className="profileSide">Rightside</div>
    </div>
  )
}

export default Home
