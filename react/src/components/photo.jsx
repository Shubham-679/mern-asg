import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux"
import { addPhoto, getphotos } from '../actions'

const Photo = () => {
  const photos = useSelector(state => state.photos)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getphotos())
  },[dispatch])

  let input;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input.value)
    dispatch(addPhoto(input.value))
  };

  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input ref={node => input = node} id="add" type="text"/>
          <button type="submit" className="btn btn-primary m-2">Add</button>
        </form>
        <div className="container">
          <div className="row">
            {photos.map((photo, index) => (
              <div className="col-sm-2" key={index }>
                <img className="img-thumbnail" src={photo.url} alt=""></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Photo;
