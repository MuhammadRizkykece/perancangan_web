import React, { useState } from "react";
import Catalog from "./Catalog";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("title");

  return (
    <div className="container py-3">
      <div className="row mb-4 mt-4">
        <img
          src="img/book-edu.png"
          alt=""
          className="img-fluid"
          style={{ width: "25%" }}
        />
        <div className="col-12 mt-4">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-12 mt-3">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="filter"
              id="byTitle"
              checked={filterBy === "title"}
              onChange={() => setFilterBy("title")}
            />
            <label className="form-check-label" htmlFor="byTitle">
              Title
            </label>
          </div>
        </div>
      </div>

      <div className="row">
        <Catalog searchTerm={searchTerm} filterBy={filterBy} />
      </div>
    </div>
  );
}

export default App;

/*
    (May work when it wants to)
    (Insert Soul)
*/
