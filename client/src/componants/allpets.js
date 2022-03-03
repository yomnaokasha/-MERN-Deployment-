import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";
const PetsList = (props) => {
  const [Pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8003/api/Pets")
      .then((res) => {
        console.log(res.data);
        setPets(
          res.data.Pets.sort((a, b) => {
            if (a.type < b.type) {
              return -1;
            } else if (a.type > b.type) {
              return 1;
            } else {
              return 0;
            }
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Pet Shelter</h1>
      <Link to="/pets/new">Add a pet to the Shelter</Link>
      <h2>These Pets are Looking for a good home</h2>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Pets.map((Pet, index) => {
            return (
              <tr key={index}>
                <td>{Pet.name}</td>
                <td>{Pet.type}</td>

                <td>
                  <Link to={"/pets/" + Pet._id + "/edit"}>Edit</Link>|
                  <Link to={"/pets/" + Pet._id}>Details</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default PetsList;
