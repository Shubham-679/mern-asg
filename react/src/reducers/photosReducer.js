const photosReducer = (state = [], action) => {
  switch (action.type) {
    case "PHOTOS":
      return state = action.payload;
    case "ADD_PHOTO":
      return state = [
        action.payload,
        ...state        
      ]
    case "ALBUM_PHOTOS" :
      return state = action.payload;
    default:
      return state;
  }
};
export default photosReducer;
