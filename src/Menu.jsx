import React from 'react'
import Profile from './Profile'
import Search from './Search'
import MyList from './MyList'
import New from './New'

function Menu() {
  return (
    <div id="menu">
      <div id="menu-items">
        <Profile />
        <Search />
        <MyList />
        <New />
      </div>
      <div id="menu-background-image"></div>
    </div>
  )
}

export default Menu

// <div id="profile" className="menu-item">
//   Profile
// </div>
// <div id="search" className="menu-item"></div>
// <div id="myList" className="menu-item">
//   My List
// </div>
// <div id="new" className="menu-item">
//   New & Trending
// </div>
