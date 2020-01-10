import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../styles/home.css";

const AlbumsCreate = props => {
  const [tshirts, setTshirts] = useState([]);
  const [tshirtsImage, setTshirtsImage] = useState(null);

  console.log(props);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/addTshirt")
      .then(res => {
        setTshirts(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/")
      .then(res => {
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = e => {
    setTshirts({ ...tshirts, [e.target.name]: e.target.value });
  };

  const handleImage = e => {
    console.log(e.target.files[0]);
    setTshirtsImage(e.target.files[0]);
  };

  return (
    <div className="container-add-tshirt">
      <h1>Add a T-shirt</h1>

      <form
        className="form-tshirt"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <label htmlFor="Name">Name</label>
        <input id="Name" type="text" name="Name" />
        <label htmlFor="Description">Description</label>
        <input type="text" name="description" />
        <label htmlFor="Price">Price</label>
        <input type="number" name="Price" />
        <label htmlFor="Color">Color</label>
        <input type="text" name="Color" />
        <label className="label" htmlFor="tshirt-image">
          T-shirt Image
        </label>
        <input
          className="input"
          id="tshirt-image"
          type="file"
          name="tshirt-image"
          onChange={handleImage}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AlbumsCreate;
