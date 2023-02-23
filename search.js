'use strict'

function SearchPortal() {
  const [searched, searchWindow] = React.useState(false)

  if (searched) {
    return (
      <div>
        <input id="searchField"></input>
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
