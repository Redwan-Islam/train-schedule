import React, { useState } from "react";
import img from "../../image/down.png";
import { db } from "../firebase";
import "./Tpr.css";

const Tpr = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [passenger, setPassenger] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Purchase Details")
      .add({
        Username: username,
        Email: email,
        Date: date,
        Passenger: passenger,
      })
      .then(() => {
        alert("Your Purchased has been sucessfull.");
      });
    setUsername("");
    setEmail("");
    setDate("");
    setPassenger("");
  };

  return (
    <div id="bdy1">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="row">
              <div className="col-md-5" id="transaction-left">
                <img src={img} alt="" />
                <h3>Look Me</h3>
                <p>
                  Explore Our Train Scheduling App. To Buy Ticket Visit Our Buy
                  Ticket Page.
                </p>
                <button type="button" className="btn btn-primary">
                  Explore
                </button>
              </div>
              <div className="col-md-7" id="transaction-right">
                <h2>Transact Here</h2>
                <form onSubmit={handleSubmit}>
                  <div className="transaction-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="from-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="from-control"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="datetime-local"
                        className="from-control"
                        placeholder="Local time"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min="2018-06-07T00:00"
                        max="2030-12-14T00:00"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        id="passangerNum"
                        value={passenger}
                        onChange={(e) => setPassenger(e.target.value)}
                      >
                        <option value="Adult" selected>
                          Passenger
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                    <input type="submit" value="Transact" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tpr;
