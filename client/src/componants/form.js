import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import "../App.css";
const PetForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8003/api/pets", {
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response.data.error.errors);
      });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h1> Pet Shelter</h1>
      <Link to="/"> Back to Home</Link>
      <h2>Know a pet needing a home ?</h2>
      <div className="square1">
        <div style={{ margin: "10px" }}>
          <p>
            <label> Pet Name :</label>
            <br />
            <input type="text" onChange={(e) => setName(e.target.value)} />
            {errors.name ? <p>{errors.name.message}</p> : null}
          </p>
          <p>
            <label> Pet Type :</label>
            <br />
            <input type="text" onChange={(e) => setType(e.target.value)} />
            {errors.type ? <p>{errors.type.message}</p> : null}
          </p>
          <p>
            <label> Pet Description :</label>
            <br />
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description ? <p>{errors.description.message}</p> : null}
          </p>
        </div>
        <div>
          <h3> Skills (optional) </h3>
          <p>
            <label> skill 1 :</label>
            <br />
            <input type="text" onChange={(e) => setSkill1(e.target.value)} />
            {errors.skill1 ? <p>{errors.skill1.message}</p> : null}
          </p>
          <p>
            <label> skill 2 :</label>
            <br />
            <input type="text" onChange={(e) => setSkill2(e.target.value)} />
            {errors.skill2 ? <p>{errors.skill2.message}</p> : null}
          </p>
          <p>
            <label> skill 3 :</label>
            <br />
            <input type="text" onChange={(e) => setSkill3(e.target.value)} />
            {errors.skill3 ? <p>{errors.skill3.message}</p> : null}
          </p>
        </div>
      </div>
      <div>
        <input
          style={{ margin: "10px" }}
          className="btn btn-primary mb-3"
          type="submit"
          value="Add a Pet"
        />
      </div>
    </form>
  );
};
export default PetForm;
