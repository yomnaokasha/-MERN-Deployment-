import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import "../App.css";

const DisplayOne = (props) => {
  const [Pet, setPet] = useState({});
  const { id } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8003/api/pets/" + id)
      .then((res) => {
        console.log(res.data);
        setPet(res.data.Pet);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePet = (PetId) => {
    axios
      .delete("http://localhost:8003/api/pets/" + PetId)
      .then((res) => {
        setPet(Pet.filter((Pet) => Pet._id != PetId));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <h1>Pet Shelter</h1>
        <h2>Details about{Pet.name} </h2>
      </div>
      <div>
        <Link to="/"> Back to Home</Link>
      </div>

      <div className="square">
        <p>pet Name: {Pet.name}</p>
        <p>pet Type: {Pet.type}</p>
        <p>Pet Description: {Pet.description}</p>
        <p>Skills:</p>
        {Pet.skill1 ? <p>{Pet.skill1}</p> : null}
        {Pet.skill2 ? <p>{Pet.skill2}</p> : null}
        {Pet.skill3 ? <p>{Pet.skill3}</p> : null}
      </div>

      <button
        style={{ margin: "10px" }}
        className="btn btn-danger"
        onClick={(e) => {
          deletePet(Pet._id);
        }}
      >
        Adopt {Pet.name}
      </button>
    </div>
  );
};
export default DisplayOne;
