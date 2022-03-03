import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import "../App.css";
const Edit = (props) => {
  const { id } = props;
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8003/api/pets/" + id)
      .then((res) => {
        setName(res.data.Pet.name);
        setType(res.data.Pet.type);
        setDescription(res.data.Pet.description);
        setSkill1(res.data.Pet.skill1);
        setSkill2(res.data.Pet.skill2);
        setSkill3(res.data.Pet.skill3);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const updatePerson = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8003/api/pets/" + id, {
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response.data.error.errors);
      });
  };
  return (
    <div>
      <h1>Pet Shelter</h1>
      <Link to="/"> Back to Home</Link>
      <form onSubmit={updatePerson}>
        <h2>Edit {name}</h2>
        <div className="square">
          <p>
            <label> Pet Name :</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name ? <p>{errors.name.message}</p> : null}
          </p>
          <p>
            <label> Pet Type :</label>
            <br />
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            {errors.type ? <p>{errors.type.message}</p> : null}
          </p>
          <p>
            <label> Pet Description :</label>
            <br />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description ? <p>{errors.description.message}</p> : null}
          </p>

          <h3> Skills (optional) </h3>
          <p>
            <label> skill 1 :</label>
            <br />
            <input
              type="text"
              value={skill1}
              onChange={(e) => setSkill1(e.target.value)}
            />
            {errors.skill1 ? <p>{errors.skill1.message}</p> : null}
          </p>
          <p>
            <label> skill 2 :</label>
            <br />
            <input
              type="text"
              value={skill2}
              onChange={(e) => setSkill2(e.target.value)}
            />
            {errors.skill2 ? <p>{errors.skill2.message}</p> : null}{" "}
          </p>
          <p>
            <label> skill 3 :</label>
            <br />
            <input
              type="text"
              value={skill3}
              onChange={(e) => setSkill3(e.target.value)}
            />
            {errors.skill3 ? <p>{errors.skill3.message}</p> : null}
          </p>
          <div>
            <input
              className="btn btn-primary mb-3"
              type="submit"
              value="Edit a Pet"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Edit;
