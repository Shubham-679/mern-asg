import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPhoto, getphotos } from '../actions';
import axios from 'axios';

const Photo = () => {
  const photos = useSelector(state => state.photos)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getphotos())
  }, [dispatch])

  // let input;
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(input.value)
  //   dispatch(addPhoto(input.value))
  // };

  let image;
  const onChangeHandler = event => {
    console.log(event.target.files[0]);
    image = event.target.files[0];
    console.log(image);
  }

  const onClickHandler = event => {
    const data = new FormData()
    data.append('url', image)
    dispatch(addPhoto(data))
    console.log("submitted")
  }


  return (
    <div>
      <div className="row justify-content-center mb-5">
        <div className="col-md-6">
          <form method="post" action="#" id="#">
            <label>Upload Your File </label>
            <input type="file" className="form-control" multiple="" onChange={onChangeHandler} />
            <button type="button" className="btn btn-success btn-sm m-2" onClick={onClickHandler}>Upload</button>
          </form>
        </div>
      </div>

      {/* <form onSubmit={handleSubmit}>
          <input ref={node => input = node} id="add" type="text"/>
          <button type="submit" className="btn btn-primary m-2">Add</button>
        </form> */}
      <div className="container">
        <div className="row">
          {photos.map((photo, index) => (
            <div className="col-sm-2" key={index}>
              <img className="img-thumbnail" src={photo.url} alt=""></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Photo;
