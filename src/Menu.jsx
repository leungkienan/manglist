import React from 'react'
import Profile from './Profile'
import Search from './Search'
import MyList from './MyList'
import New from './New'
// import './style.css'

export default function Menu() {
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
