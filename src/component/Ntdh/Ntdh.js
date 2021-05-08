import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Ntdh = () => {
  return (
    <div>
      <Container>
        <div>
          <h1>Narayanganj &#8594; To &#8594; Dhaka</h1>
          <h2>Holiday Train Schedule</h2>
          <div className="bdy">
            <table className="table">
              <thead>
                <th>Train-Number</th>
                <th>Time</th>
                <th>Narayanganj</th>
                <th>Chasara</th>
                <th>Fatulla</th>
                <th>Pagla</th>
                <th>Shampur</th>
                <th>Gendaria</th>
                <th>Dhaka</th>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Train-Number">211</td>
                  <td data-label="Time">Morning</td>
                  <td data-label="Narayanganj">08:45</td>
                  <td data-label="Chasara">08:52</td>
                  <td data-label="Fatulla">09:00</td>
                  <td data-label="Pagla">09:07</td>
                  <td data-label="Shampur">09:15</td>
                  <td data-label="Gendaria">09:22</td>
                  <td data-label="Dhaka">09:30</td>
                </tr>
                <tr>
                  <td data-label="Train-Number">213</td>
                  <td data-label="Time">Morning</td>
                  <td data-label="Narayanganj">11:05</td>
                  <td data-label="Chasara">11:12</td>
                  <td data-label="Fatulla">11:20</td>
                  <td data-label="Pagla">11:27</td>
                  <td data-label="Shampur">11:38</td>
                  <td data-label="Gendaria">11:42</td>
                  <td data-label="Dhaka">11:50</td>
                </tr>
                <tr>
                  <td data-label="Train-Number">215</td>
                  <td data-label="Time">Noon</td>
                  <td data-label="Narayanganj">02:45</td>
                  <td data-label="Chasara">02:52</td>
                  <td data-label="Fatulla">03:00</td>
                  <td data-label="Pagla">03:07</td>
                  <td data-label="Shampur">03:15</td>
                  <td data-label="Gendaria">03:22</td>
                  <td data-label="Dhaka">03:30</td>
                </tr>
                <tr>
                  <td data-label="Train-Number">217</td>
                  <td data-label="Time">Afternoon</td>
                  <td data-label="Narayanganj">05:00</td>
                  <td data-label="Chasara">05:07</td>
                  <td data-label="Fatulla">05:15</td>
                  <td data-label="Pagla">05:27</td>
                  <td data-label="Shampur">05:34</td>
                  <td data-label="Gendaria">05:37</td>
                  <td data-label="Dhaka">05:45</td>
                </tr>
                <tr>
                  <td data-label="Train-Number">219</td>
                  <td data-label="Time">Evening</td>
                  <td data-label="Narayanganj">07:50</td>
                  <td data-label="Chasara">07:57</td>
                  <td data-label="Fatulla">08:05</td>
                  <td data-label="Pagla">08:15</td>
                  <td data-label="Shampur">08:20</td>
                  <td data-label="Gendaria">08:27</td>
                  <td data-label="Dhaka">08:35</td>
                </tr>
                <tr>
                  <td data-label="Train-Number">219</td>
                  <td data-label="Time">Night</td>
                  <td data-label="Narayanganj">10:00</td>
                  <td data-label="Chasara">10:07</td>
                  <td data-label="Fatulla">10:15</td>
                  <td data-label="Pagla">10:22</td>
                  <td data-label="Shampur">10:27</td>
                  <td data-label="Gendaria">10:37</td>
                  <td data-label="Dhaka">10:45</td>
                </tr>
              </tbody>
            </table>
            <Link to="/Home">
              <button className="button-1">Homepage</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Ntdh;
