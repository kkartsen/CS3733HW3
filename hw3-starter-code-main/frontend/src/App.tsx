import React from 'react';
import './App.css';
import {employeeFeedback} from "common/src/types";
import axios from "axios";

function App() {

  async function postData() {

    const data: employeeFeedback = {
      name: 'Mike',
      feedback: 'is an SA'
    }
    //sends a post request the /api/high-score
    const res = await axios.post("/api/example",data, {
      headers: {
        "Content-Type":"application/json"
      }
    });
    if(res.status === 200) {
      console.log("added feedback");
    }
  }

  async function getData() {
    const res = await axios.get("api/example");
    console.log(res.data);
  }

  return (
      <form id="serviceRequestForm">
          <div>
              <label htmlFor="employeeName">Name of the Employee:</label>
              <input type="text" id="employeeName" name="employeeName" required/>
          </div>
          <div>
              <label htmlFor="priority">Priority:</label>
              <select id="priority" name="priority" required>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Emergency">Emergency</option>
              </select>
          </div>
          <div>
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" name="location" required/>
          </div>
          <div>
              <label htmlFor="status">Status:</label>
              <select id="status" name="status" required>
                  <option value="unassigned">Unassigned</option>
                  <option value="assigned">Assigned</option>
                  <option value="inprogress">In Progress</option>
                  <option value="completed">Completed</option>
              </select>
          </div>
          <button type="submit">Submit</button>
          <div className="App">
              <button onClick={postData}>post feedback</button>
              <button onClick={getData}>get feedback</button>
          </div>
      </form>
  );
}

export default App;
