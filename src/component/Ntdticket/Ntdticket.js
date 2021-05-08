import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Ntdticket = () => {
  return (
    <div>
      <Container>
        <div>
          <h1>Welcome to Purchase page</h1>
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
                <th>Purchase</th>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Train-Number">D - Demo</td>
                  <td data-label="Time">Morning</td>
                  <td data-label="Narayanganj">06:30</td>
                  <td data-label="Chasara">06:37</td>
                  <td data-label="Fatulla">06:52</td>
                  <td data-label="Pagla">07:00</td>
                  <td data-label="Shampur">07:10</td>
                  <td data-label="Gendaria">07:20</td>
                  <td data-label="Dhaka">07:30</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">211</td>
                  <td data-label="Time">Morning</td>
                  <td data-label="Narayanganj">07:20</td>
                  <td data-label="Chasara">07:27</td>
                  <td data-label="Fatulla">07:42</td>
                  <td data-label="Pagla">07:48</td>
                  <td data-label="Shampur">07:55</td>
                  <td data-label="Gendaria">08:04</td>
                  <td data-label="Dhaka">08:15</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">213</td>
                  <td data-label="Time">Morning</td>
                  <td data-label="Narayanganj">08:10</td>
                  <td data-label="Chasara">08:17</td>
                  <td data-label="Fatulla">08:25</td>
                  <td data-label="Pagla">08:32</td>
                  <td data-label="Shampur">08:40</td>
                  <td data-label="Gendaria">08:47</td>
                  <td data-label="Dhaka">08:55</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">215</td>
                  <td data-label="Time">Morning</td>
                  <td data-label="Narayanganj">09:45</td>
                  <td data-label="Chasara">09:52</td>
                  <td data-label="Fatulla">10:00</td>
                  <td data-label="Pagla">10:07</td>
                  <td data-label="Shampur">10:15</td>
                  <td data-label="Gendaria">10:22</td>
                  <td data-label="Dhaka">10:30</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">217</td>
                  <td data-label="Time">Morning</td>
                  <td data-label="Narayanganj">10:30</td>
                  <td data-label="Chasara">10:37</td>
                  <td data-label="Fatulla">10:45</td>
                  <td data-label="Pagla">10:52</td>
                  <td data-label="Shampur">11:00</td>
                  <td data-label="Gendaria">11:07</td>
                  <td data-label="Dhaka">11:15</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">219</td>
                  <td data-label="Time">Noon</td>
                  <td data-label="Narayanganj">12:05</td>
                  <td data-label="Chasara">12:12</td>
                  <td data-label="Fatulla">12:20</td>
                  <td data-label="Pagla">12:27</td>
                  <td data-label="Shampur">12:35</td>
                  <td data-label="Gendaria">12:42</td>
                  <td data-label="Dhaka">12:50</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">221</td>
                  <td data-label="Time">Noon</td>
                  <td data-label="Narayanganj">12:50</td>
                  <td data-label="Chasara">12:57</td>
                  <td data-label="Fatulla">01:05</td>
                  <td data-label="Pagla">01:12</td>
                  <td data-label="Shampur">01:20</td>
                  <td data-label="Gendaria">01:27</td>
                  <td data-label="Dhaka">01:35</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">223</td>
                  <td data-label="Time">Noon</td>
                  <td data-label="Narayanganj">02:25</td>
                  <td data-label="Chasara">02:32</td>
                  <td data-label="Fatulla">02:40</td>
                  <td data-label="Pagla">02:47</td>
                  <td data-label="Shampur">02:55</td>
                  <td data-label="Gendaria">03:02</td>
                  <td data-label="Dhaka">03:10</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">D-Demo</td>
                  <td data-label="Time">Noon</td>
                  <td data-label="Narayanganj">03:00</td>
                  <td data-label="Chasara">03:07</td>
                  <td data-label="Fatulla">03:24</td>
                  <td data-label="Pagla">03:30</td>
                  <td data-label="Shampur">03:38</td>
                  <td data-label="Gendaria">03:46</td>
                  <td data-label="Dhaka">03:55</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">225</td>
                  <td data-label="Time">Noon</td>
                  <td data-label="Narayanganj">04:00</td>
                  <td data-label="Chasara">04:16</td>
                  <td data-label="Fatulla">04:24</td>
                  <td data-label="Pagla">04:30</td>
                  <td data-label="Shampur">04:38</td>
                  <td data-label="Gendaria">04:46</td>
                  <td data-label="Dhaka">04:55</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">227</td>
                  <td data-label="Time">Noon</td>
                  <td data-label="Narayanganj">08:45</td>
                  <td data-label="Chasara">04:52</td>
                  <td data-label="Fatulla">05:00</td>
                  <td data-label="Pagla">05:07</td>
                  <td data-label="Shampur">05:15</td>
                  <td data-label="Gendaria">05:30</td>
                  <td data-label="Dhaka">05:40</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">229</td>
                  <td data-label="Time">Evening</td>
                  <td data-label="Narayanganj">06:25</td>
                  <td data-label="Chasara">06:32</td>
                  <td data-label="Fatulla">06:40</td>
                  <td data-label="Pagla">06:47</td>
                  <td data-label="Shampur">06:55</td>
                  <td data-label="Gendaria">07:02</td>
                  <td data-label="Dhaka">07:10</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">231</td>
                  <td data-label="Time">Night</td>
                  <td data-label="Narayanganj">07:10</td>
                  <td data-label="Chasara">07:17</td>
                  <td data-label="Fatulla">07:25</td>
                  <td data-label="Pagla">07:32</td>
                  <td data-label="Shampur">07:40</td>
                  <td data-label="Gendaria">07:47</td>
                  <td data-label="Dhaka">07:55</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">233</td>
                  <td data-label="Time">Night</td>
                  <td data-label="Narayanganj">08:40</td>
                  <td data-label="Chasara">08:47</td>
                  <td data-label="Fatulla">08:55</td>
                  <td data-label="Pagla">09:02</td>
                  <td data-label="Shampur">09:10</td>
                  <td data-label="Gendaria">09:17</td>
                  <td data-label="Dhaka">09:25</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">235</td>
                  <td data-label="Time">Night</td>
                  <td data-label="Narayanganj">09:25</td>
                  <td data-label="Chasara">09:32</td>
                  <td data-label="Fatulla">09:40</td>
                  <td data-label="Pagla">09:47</td>
                  <td data-label="Shampur">09:55</td>
                  <td data-label="Gendaria">10:10</td>
                  <td data-label="Dhaka">10:20</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td data-label="Train-Number">237</td>
                  <td data-label="Time">Night</td>
                  <td data-label="Narayanganj">11:00</td>
                  <td data-label="Chasara">11:07</td>
                  <td data-label="Fatulla">11:15</td>
                  <td data-label="Pagla">11:22</td>
                  <td data-label="Shampur">11:30</td>
                  <td data-label="Gendaria">11:37</td>
                  <td data-label="Dhaka">11:45</td>
                  <td data-label="Purchase">
                    <Link to="/Tpr">
                      <button type="button" class="btn btn-success">
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Ntdticket;
