import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getuserAlbum } from '../actions/index';


const UserAlbum = (props) => {
  let useralbums = useSelector(state=>state.album)
  const dispatch = useDispatch();
  const userId = props.match.params.id;


  useEffect(() => {
    dispatch(getuserAlbum(userId))
  },[dispatch, userId]);

//   let value;
//   const handleChange = (e) => {
//     value = e.target.value;
//   }
//  const handleClick = (album) => {
//    console.log(album);
//   album.title = value;
//   dispatch(updateAlbum(album))
//  }
        return ( 
            <div>
           <div><h1>user Albums</h1></div>
           
           <div>
            <table className="table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Album Title</th>
                </tr>
              </thead>
              <tbody>
                {useralbums.map((useralbum, index) => (
                  <tr key={useralbum._id}>
                    <td>{index+1}</td>  
                    <td>{useralbum.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       </div>
         );
    }

export default UserAlbum;