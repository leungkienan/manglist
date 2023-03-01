import React from 'react'
import { useState, useRef } from 'react'
import './style.css'

export default function Search() {
  const [searched, searchWindow] = useState(false)

  // implementing a off click state change

  //   const handleClickOutside = () => {
  //     searchWindow(false)
  //   }

  //   const ref = useOutsideClick(handleClickOutside)

  //   const handleClick = () => {
  //     searchWindow((state) => {
  //       if (state) {
  //         return (
  //           <div>
  //             <input id="searchField" placeholder="Enter a manga..."></input>
  //             <span id="searchButton" className="material-symbols-outlined">
  //               search
  //             </span>
  //           </div>
  //         )
  //       }
  //     })
  //   }

  //   const handleHeaderClick = (e) => {
  //     e.stopPropagation()
  //   }

  //   return (
  //     <div onClick={handleHeaderClick}>
  //       <button ref={ref} id="newSearch" onClick={handleClick}>
  //         Search
  //       </button>
  //     </div>
  //   )

  //   const outsideClick = (callback) => {
  //     const ref = useRef()
  //     useEffect(() => {
  //       const handleClick = (e) => {
  //         if (ref.current && !ref.current.contains(e.target)) callback()
  //       }
  //       document.addEventListener('click', handleClick)
  //       return () => {
  //         document.removeEventListener('click', handleClick)
  //       }
  //     }, [ref])
  //     return ref
  //   }

  if (searched) {
    // send query to backend which taps into jikan api to return results.
    return (
      <div>
        <input id="searchField" placeholder="Enter a manga..."></input>
        <span id="searchButton" className="material-symbols-outlined">
          search
        </span>
      </div>
    )
  }
  return (
    <button id="newSearch" onClick={() => searchWindow(true)}>
      Search
    </button>
  )
}
