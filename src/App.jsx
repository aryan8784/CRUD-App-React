import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Delete from "./components/Delete";
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Create />}></Route>
            <Route path="/read" element={<Read />}></Route>
            <Route path="/update" element={<Update />}></Route>
            <Route path="/delete" element={<Delete />}></Route>
          </Routes>
        </BrowserRouter>
      </div>

      {/* <Read /> */}
        {/* <Update /> */}
        {/* <Delete /> */}
    </>
  );
}

export default App;
