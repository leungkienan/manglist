import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'
import './style.css'

export default function Search() {
  const [searched, searchWindow] = useState(false)

  // useEffect(() => {
  //   let unSearched = false
  //   // do stuff
  //   if (!unSearched) {
  //     searchWindow(false)
  //   }

  //   return () => {
  //     unSearched = true
  //   }
  // }, [searched])

  if (searched) {
    console.log(searched + ' it works!')
    return (
      <div id="search" className="menu-item">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            // need this to send a query to jikan api
            return <div>hello world</div>
          }}
        >
          <input id="searchField" placeholder="Enter a manga..."></input>
        </form>
      </div>
    )
  }
  // console.log(searched + 'this is else')
  return (
    <div id="search" className="menu-item">
      <button id="newSearch" onClick={() => searchWindow(true)}>
        Search
      </button>
    </div>
  )
}

// function useOutside(ref) {
//   useEffect(() => {
//     function handleOutsideClick(e) {
//       if (ref.current && !ref.current.contains(e.target)) {
//         return (
//           <div id="search" className="menu-item">
//             <button id="newSearch" onClick={() => searchWindow(true)}>
//               Search
//             </button>
//           </div>
//         )
//       }
//     }
//     // Bind the event listener
//     document.addEventListener('mousedown', handleOutsideClick)
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener('mousedown', handleOutsideClick)
//     }
//   }, [ref])
// }
