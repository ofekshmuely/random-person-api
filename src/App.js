import React, { useState, useEffect } from "react";

import {
  FaUser,
  FaMap,
  FaLock,
  FaCalendarTimes,
  FaPhone,
  FaEnvelopeOpen,
} from "react-icons/fa";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("Random Person");
  const [value, setValue] = useState("name");

  const getUser = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { password } = person.login;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;

    const newPerson = {
      image,
      email,
      phone,
      password,
      age,

      street: `${number} ${name} st.`,
      name: `${first} ${last}`,
    };
    setUser(newPerson);
    setTitle("name");
    setValue(newPerson.name);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(user[newValue]);
    }
  };

  return (
    <div className="App">
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img src={user && user.image} className="user-img" alt="" />
          <p className="user-title">My {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              data-label="name"
              className="icon"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              data-label="street"
              className="icon"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              data-label="phone"
              className="icon"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button data-label="age" className="icon" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              data-label="email"
              className="icon"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              data-label="password"
              className="icon"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button onClick={getUser} data-label="resetPerson" className="btn">
            New User
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
