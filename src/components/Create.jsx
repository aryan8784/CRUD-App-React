import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Clickeddddddd");
    axios
      .post("https://655bb594ab37729791a98118.mockapi.io/CRUD-APP", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("/read");
      });
  };

  return (
    <>
      <div>
        <div className="d-flex justify-content-between mt-3 mb-3 ">
          <h1>Create CRUD APP</h1>
          <Link to={"/read"}>
            <button className="btn btn-primary">Show Data</button>
          </Link>
        </div>
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

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Create;
