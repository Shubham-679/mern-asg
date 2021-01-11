import axios from "axios";

export const getuser = () => async (dispatch) => {
  const { data : users } = await axios.get("http://localhost:3000/users");
   dispatch({
     type: 'USER',
     payload : users
   });
}

export const getalbum = () => async (dispatch) => {
  const { data : albums } = await axios.get("http://localhost:3000/albums");
  dispatch({
    type: 'ALBUM',
    payload : albums
  });
};

export const getphotos = () => async (dispatch) => {
  const { data : photos } = await axios.get("http://localhost:3000/photos");
  dispatch({
    type: 'PHOTOS',
    payload : photos
  });
};

export const addAlbum = (text) => async (dispatch) => {
  const obj = { title : text }
  const { data : newAlbum } = await axios.post("http://localhost:3000/albums",obj);
  dispatch({
    type: 'ADD_ALBUM',
    payload : newAlbum
  });
};
export const addUserAlbum = (obj) => async (dispatch) => {
  const { data : newAlbum } = await axios.post("http://localhost:3000/albums/"+obj.user,obj);
  console.log(newAlbum);
  dispatch({
    type: 'ADD_ALBUM',
    payload : newAlbum
  });
};
export const addPhoto = (data) => async (dispatch) => {
  const { data : newPhoto } = await axios.post("http://localhost:3000/photos", data , {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  dispatch({
    type: 'ADD_PHOTO',
    payload : newPhoto
  });
};
export const getuserAlbum = (userId) => async (dispatch) => {
  const { data: userAlbum } = await axios.get("http://localhost:3000/albums/" + userId);
  dispatch({
    type: 'USER_ALBUM',
    payload : userAlbum
  });
}
export const getalbumPhotos = (albumId) => async (dispatch) => {
  const { data: albumPhotos } = await axios.get("http://localhost:3000/photos/" + albumId);
  dispatch({
    type: 'ALBUM_PHOTOS',
    payload : albumPhotos
  });
}

export const updateAlbum = (album) => async (dispatch) => {
  await axios.put("http://localhost:3000/albums/" + album._id, album); 
  dispatch({
    type: 'UPDATED_USER_ALBUM',
    album   
  });
}



