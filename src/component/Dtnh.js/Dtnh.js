import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Dtnh.css"

const Dtnh = () => {
    return (
        <div className="txx">
            <h1>Dhaka &#8594; To &#8594; Narayanganj</h1>
            <h2>Applicable For Friday and Goverment Holidays</h2>
            <div className="bdy">
            <Container>
            <table className="table1">
            <thead>
                <th>Train-Number</th>
                <th>Time</th>
                <th>Dhaka</th>
                <th>Gendaria</th>
                <th>Shampur</th>
                <th>Pagla</th>
                <th>Fatulla</th>
                <th>Chasara</th>
                <th>Narayanganj</th>
            </thead>
            <tbody>
                <tr>
                <td data-label="Train-Number">212</td>
                <td data-label="Time">Morning</td>
                <td data-label="Dhaka">07:40</td>
                <td data-label="Gendaria">07:50</td>
                <td data-label="Shampur">07:55</td>
                <td data-label="Pagla">08:00</td>
                <td data-label="Fatulla">08:12</td>
                <td data-label="Chasara">08:20</td>
                <td data-label="Narayanganj">08:25</td>
            
            </tr>
            <tr>
                <td data-label="Train-Number">214</td>
                <td data-label="Time">Morning</td>
                <td data-label="Dhaka">10:00</td>
                <td data-label="Gendaria">10:10</td>
                <td data-label="Shampur">10:15</td>
                <td data-label="Pagla">10:20</td>
                <td data-label="Fatulla">10:32</td>
                <td data-label="Chasara">10:40</td>
                <td data-label="Narayanganj">10:45</td>
            </tr>
            <tr>
                <td data-label="Train-Number">216</td>
                <td data-label="Time">Noon</td>
                <td data-label="Dhaka">12:20</td>
                <td data-label="Gendaria">12:30</td>
                <td data-label="Shampur">12:35</td>
                <td data-label="Pagla">12:42</td>
                <td data-label="Fatulla">12:52</td>
                <td data-label="Chasara">01:00</td>
                <td data-label="Narayanganj">01:05</td>
            
            </tr>
            <tr>
                <td data-label="Train-Number">218</td>
                <td data-label="Time">Noon</td>
                <td data-label="Dhaka">03:50</td>
                <td data-label="Gendaria">04:00</td>
                <td data-label="Shampur">04:05</td>
                <td data-label="Pagla">04:12</td>
                <td data-label="Fatulla">04:22</td>
                <td data-label="Chasara">04:30</td>
                <td data-label="Narayanganj">04:35</td>
            
            </tr>
            <tr>
                <td data-label="Train-Number">220</td>
                <td data-label="Time">Evening</td>
                <td data-label="Dhaka">06:40</td>
                <td data-label="Gendaria">06:50</td>
                <td data-label="Shampur">06:55</td>
                <td data-label="Pagla">07:02</td>
                <td data-label="Fatulla">07:12</td>
                <td data-label="Chasara">07:20</td>
                <td data-label="Narayanganj">07:25</td>
            
            </tr>
            <tr>
                <td data-label="Train-Number">222</td>
                <td data-label="Time">Night</td>
                <td data-label="Dhaka">09:00</td>
                <td data-label="Gendaria">09:10</td>
                <td data-label="Shampur">09:15</td>
                <td data-label="Pagla">09:22</td>
                <td data-label="Fatulla">09:32</td>
                <td data-label="Chasara">09:40</td>
                <td data-label="Narayanganj">09:45</td>
            </tr>
            </tbody> 
  
</table>
<br />
            <Link to="/Home">
            <div>
            <button className="button-1">Homepage</button>
            </div>
            </Link>
</Container>
</div>
<div>
</div>
        
        </div>
    );
};

export default Dtnh;