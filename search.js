'use strict'

function Search() {
  const [liked, setLiked] = React.useState(false)

  if (liked) {
    // need to change the text to a search bar with the same properties as the text
    // or create a search page with the same css
    return 'You liked this!'
  }

  return React.createElement(
    'button',
    {
      onClick: () => setLiked(true),
    },
    'Like'
  )
}

const rootNode = document.getElementById('like-button-root')
const root = ReactDOM.createRoot(rootNode)
root.render(React.createElement(LikeButton))
