const albumReducer = (state = [], action) => {
  switch (action.type) {
    case "ALBUM":
      return state = action.payload;
    case "ADD_ALBUM":
      return [
        action.payload,
        ...state        
      ]
    case "USER_ALBUM":
      return state = action.payload;
    
    case "UPDATED_USER_ALBUM":
      return state.map(a =>(a._id === action.album._id) ? { ...a, title : action.album.title} : a)

    default:
      return state;
  }
};
export default albumReducer;
