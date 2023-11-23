import axios from "axios";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Read() {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");

  const InputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  const getData = () => {
    axios
      .get("https://655bb594ab37729791a98118.mockapi.io/CRUD-APP")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      });
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://655bb594ab37729791a98118.mockapi.io/CRUD-APP/${id}`)
      .then(() => {
        getData();
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <div className="d-flex justify-content-between mt-3 mb-3">
          <h1>Read CRUD APP</h1>

          <Form.Group className="mb-3 w-25">
            <Form.Control
              type="search"
              placeholder="Search Your Value "
              onChange={InputHandler}
            />
          </Form.Group>

          <Link to={"/"}>
            <button className="btn btn-secondary">Create Data</button>
          </Link>
        </div>
        <Table bordered variant="dark">
          <thead>
            <tr>
              <th>#id</th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
              {/* <th></th> */}
            </tr>
          </thead>
          {data
            .filter((el) => {
              if (el === "") {
                return el;
              } else {
                return (
                  el.name.toLowerCase().includes(inputText) ||
                  el.email.toLowerCase().includes(inputText)
                );
              }
            })
            .map((eachData) => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>{eachData.id}</td>
                      <td>{eachData.name}</td>
                      <td>{eachData.email}</td>
                      <td className="w-25 m-3">
                        <Link to={"/update"}>
                          <button
                            className="btn btn-success mx-2"
                            onClick={() =>
                              setToLocalStorage(
                                eachData.id,
                                eachData.name,
                                eachData.email
                              )
                            }
                          >
                            Edit
                          </button>
                        </Link>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => handleDelete(eachData.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })}
        </Table>
      </div>
    </>
  );
}

export default Read;
