import React from 'react';
import photo from '../images/photo.jpg';

const Home = () => {
  return (
    <div className="Home">
      <h1>Welcome to the Mobile Lab</h1>
      <img src={photo} alt="lab-photo" />
    </div>
  )
}

export default Home
