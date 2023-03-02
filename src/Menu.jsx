import React from 'react'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import Profile from './Profile'
import Search from './Search'
import MyList from './MyList'
import New from './New'
import './style.css'

export default function Menu() {
  return (
    <div id="menu">
      <div id="menu-items">
        <Link to="/">Profile</Link>
        <Search />
        <Link to="/myList" />
        <Link to="/new" />
      </div>
      <div id="menu-background-image"></div>
    </div>
  )
}
