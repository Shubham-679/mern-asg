import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getalbumPhotos } from '../actions/index';

const AlbumPhoto = (props) => {
    let albumphotos = useSelector(state=>state.photos)
    const dispatch = useDispatch();
    const albumId = props.match.params.id;
  
  useEffect(() => {
    dispatch(getalbumPhotos(albumId))
  }, [dispatch, albumId ]);


  return (
    <div>
      <div className="container">
        <div className="row">
          {albumphotos.map((photo) => (
            <div className="col-sm-2" key={photo._id}>
              <img className="img-thumbnail" src={photo.url} alt=""></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPhoto;