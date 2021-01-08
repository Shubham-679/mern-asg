import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getuser, addUserAlbum } from "../actions/index";
import { Link } from 'react-router-dom';

const Home = (props) => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let addNewAlbum = React.createRef()

  useEffect(() => {
    dispatch(getuser());
  }, [dispatch]);

 

  const handleChange = (e) => {
    addNewAlbum = e.target.value;
  }

  const handleAdd =( user, e) => {
    e.preventDefault();
    const userId = user._id;
    const obj = {
      title : addNewAlbum,
      user : userId
    }
    dispatch(addUserAlbum(obj))
    addNewAlbum = "";
  }

  return (
    <div>
      <div>
        <h1>Users Details</h1>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>UserName</th>
              <th>E-mail</th>
              <th>City</th>
              <th>Phone No.</th>
              <th>Add Album</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td> <Link to={`/useralbums/${user._id}`}>{user.username}</Link></td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>
                  <form>

                    <input ref={addNewAlbum} 
                    id="add" type="text" 
                    onChange={handleChange}></input>

                    <button onClick={(e) => handleAdd(user ,e)} 
                    className="btn btn-primary m-2">Add</button>

                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;