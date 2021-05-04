const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    case 'SET_FAVORITE':
      return {
        ...state,
        favoriteCharacters: [...state.favoriteCharacters, action.payload]
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        favoriteCharacters: state.favoriteCharacters.filter(
          (items) => items.data.id !== action.payload
        )
      }
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload
      }
    default:
      return state
  }
}

export default reducer
