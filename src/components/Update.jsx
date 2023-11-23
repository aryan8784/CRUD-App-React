import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate,Link } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://655bb594ab37729791a98118.mockapi.io/CRUD-APP/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <div className="">
        <h1>Update CRUD APP</h1>
        <Form>
          <div className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter your Name"
            />
          </div>

          <div className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Your Email"
            />
          </div>

          <Button variant="primary" type="submit" onClick={handleUpdate}>
            Update
          </Button>

          <Link to={"/read"}>
            <button className="btn btn-secondary m-2">Back</button>
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Update;
