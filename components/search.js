'use strict'

function SearchPortal() {
  const [searched, searchWindow] = React.useState(false)

  if (searched) {
    // send query to backend which taps into jikan api to return results.
    return (
      <div>
        <input id="searchField" placeholder="Enter a manga..."></input>
      </div>
    )
  }
  return (
    <button id="newSearch" onClick={() => searchWindow(true)}>
      Search
    </button>
  )
}

const rootNode = document.getElementById('search')
const root = ReactDOM.createRoot(rootNode)
root.render(React.createElement(SearchPortal))
