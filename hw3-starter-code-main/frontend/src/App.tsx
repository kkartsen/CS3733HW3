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
              <label htmlFor="employeeName">Name of the Employee: </label>
              <input type="text" id="employeeName" name="employeeName" required/><br/>
          </div>
          <div>
              <br/>
              <label htmlFor="priority">Priority: </label>
              <select id="priority" name="priority" required>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Emergency">Emergency</option>
              </select>
          </div>
          <div>
              <br/>
              <label htmlFor="location">Location: </label>
              <input type="text" id="location" name="location" required/><br/>
          </div>
          <div>
              <br/>
              <label htmlFor="startLang">Between languages: </label>
              <input type="text" id="start" name="startLang" required/>
              <label htmlFor={"endLang"}> and </label>
              <input type={"text"} id={"end"} name={"endLang"} required/><br/>
          </div>
          <div>
              <br/>
              <label htmlFor={"timeNeeded"}>When is this service required?</label><br/>
              <input type={"radio"} id={"asap"} name={"when"} value={"now"}/>
              <label htmlFor={"asap"}>Now</label><br/>
              <input type={"radio"} id={"later"} name={"when"} value={"notnow"}/>
              <label htmlFor={"later"}>Scheduled time</label><br/>
              <label htmlFor={"specificTime"}>If translation is needed at a specific time, please enter the date when
                  this service is required below:</label><br/>
              <label htmlFor={"day"}>Day: </label>
              <input type={"text"} id={"dayreq"} name={"day"}/>
              <label htmlFor={"month"}> Month: </label>
              <input type={"text"} id={"monthreq"} name={"month"}/>
              <label htmlFor={"year"}> Year: </label>
              <input type={"text"} id={"yearreq"} name={"year"}/><br/>
          </div>
          <div>
              <br/>
              <label htmlFor={"repeating?"}>Is this a repeating request?</label><br/>
              <input type={"radio"} id={"yes"} name={"repeats?"} value={"repeats"}/>
              <label htmlFor={"yes"}>Yes</label><br/>
              <input type={"radio"} id={"no"} name={"repeats?"} value={"doesnotrepeat"}/>
              <label htmlFor={"no"}>No</label><br/>
          </div>
          <div>
              <br/>
              <label htmlFor="status">Status: </label>
              <select id="status" name="status" required>
                  <option value="unassigned">Unassigned</option>
                  <option value="assigned">Assigned</option>
                  <option value="inprogress">In Progress</option>
                  <option value="completed">Completed</option>
              </select>
          </div>
          <br/>
          <button type="submit">Submit</button>
          <div className="App">
              <button onClick={postData}>post feedback</button>
              <button onClick={getData}>get feedback</button>
          </div>
      </form>
  );
}

export default App;
