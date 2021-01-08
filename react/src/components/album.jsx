import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getalbum, addAlbum, updateAlbum  } from "../actions";

const Album = () => {
  const albums = useSelector((state) => state.album);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getalbum());
  }, [dispatch]);

  let input;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input.value)
    dispatch(addAlbum(input.value))
  };

  
  let value;
  const handleChange = (e) => {
    value = e.target.value;
  }
 const handleClick = (album) => {
   console.log(album)
  album.title = value;
  dispatch(updateAlbum(album))
 }

  return (
    <div>
      <div>
        <h1>Our Latest Albums</h1>
        <form onSubmit={handleSubmit}>
          <input ref={node => input = node} id="add" type="text"/>
          <button type="submit" className="btn btn-primary m-2">Add</button>
        </form>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Album Title</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>
                <Link to={`/albumphotos/${album._id}`}>{album.title}</Link>
                </td>
                <td>
                  <div>
                <input type="text" placeholder="Updates" onChange={handleChange}></input>
                <button className="btn btn-sm btn-danger m-2" onClick={()=>handleClick(album)}>Update</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Album;