import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const getRes = async () => {
    // const res = await fetch("http://localhost:8000");
    // let data = await res.json();
    // console.log(data);

    axios
      .get("http://localhost:8000")
      .then((e) => {
        console.log(`Name  ${e.data.name}`);
        console.log(`Age  ${e.data.age}`);
        console.log(`Skills  ${e.data.skills}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const postRes = async () => {
    axios
      .post("http://localhost:8000", {
        userName,
        email,
        age,
      })
      .then((e) => {
        console.log(e.data);
        setUserName("");
        setEmail("");
        setAge("");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="app">
        <div className="form">
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <button onClick={postRes}>SUBMIT</button>
        </div>
        <button onClick={getRes}>SEND</button>
      </div>
    </>
  );
};

export default App;
