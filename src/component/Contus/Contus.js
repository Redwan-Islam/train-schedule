import React, { useState } from "react";
import { db } from "../firebase";
import "./Contus.css";

const Contus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Feedback")
      .add({
        Name: name,
        Email: email,
        Message: message,
      })
      .then(() => {
        alert("Thank You For Your Feedback.");
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="feedback">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Give Your Feedback</h1>
          <div className="id">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
            />
            <i className="far fa-user"></i>
          </div>
          <div className="id">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
            />
            <i className="far fa-envelope"></i>
          </div>
          <textarea
            cols="15"
            rows="5"
            placeholder="Enter your opinion here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input type="submit" value="Submit" className="submitButton" />
        </form>
      </div>
    </div>
  );
};

export default Contus;
