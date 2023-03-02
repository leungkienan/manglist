import React, { useRef, useEffect } from 'react'
import { useState, useRef } from 'react'
import './style.css'

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

export default function Search() {
  const [searched, searchWindow] = useState(false)

  if (searched) {
    return (
      <div id="search" className="menu-item">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            alert('sending')
          }}
        >
          <input id="searchField" placeholder="Enter a manga..."></input>
        </form>
      </div>
    )
  }
  return (
    <div id="search" className="menu-item">
      <button id="newSearch" onClick={() => searchWindow(true)}>
        Search
      </button>
    </div>
  )
}
