import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getuser, addUser, addUserAlbum } from "../actions/index";
import { Link } from 'react-router-dom';


const initialValues = {
  name: "",
  username: "",
  email: "",
  address: "",
  phone: "",
};

const Home = (props) => {
  const [values, setValues] = useState(initialValues);
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let addNewAlbum = React.createRef();

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(values));
  }

  return (
    <div>
      <div className="container">
      <form onSubmit={handleSubmit}>
          <input
            value={values.name}
            onChange={handleInputChange}
            name="name"
            placeholder="Name"         
            />
          <input
            value={values.username}
            onChange={handleInputChange}
            name="username"
            placeholder="UserName"
          />
          <input
            value={values.email}
            onChange={handleInputChange}
            name="email"
            placeholder="Email"
          />
          <input
            value={values.address}
            onChange={handleInputChange}
            name="address"
            placeholder="Address"
          />
          <input
            value={values.phone}
            onChange={handleInputChange}
            name="phone"
            placeholder="Phone"
          />
          <button className="btn-sm btn-primary m-2" type="submit" > Submit </button>
        </form> 
      </div>
      <div className="m-2">
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