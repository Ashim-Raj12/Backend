import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const getRes = async () => {
    // const res = await fetch("http://localhost:8000");
    // let data = await res.json();
    // console.log(data);

    axios
      .get("http://localhost:8000" || "http://localhost:3000")
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
        password,
      })
      .then((e) => {
        console.log(e.data);
        setUserName("");
        setEmail("");
        setAge("");
        setPassword("");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="app">
        <div className="form">
          <h1>Learning Backend</h1>
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
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
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
