import React, {useEffect, useState} from 'react';
import './App.css';
import {employeeFeedback} from "common/src/types";
import axios from "axios";
import {RequestForm} from "./components/requestForm";
import {request } from "./components/requestType"

function App() {
    const [requestList, setRequestList] = useState([]);
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
    useEffect(() => {
        async function getData() {
            const res = await axios.get("api/request");
            console.log(res.data);
            setRequestList(res.data);
        }
        getData().then();
    }, [])


    return (
        <>
          <div className="App">
            <RequestForm/>
          </div>
          <br/>
          <div className="Table">
            <table border={1} width="30%" cellPadding={10}>
                <tr>
                    <td>Name</td>
                    <td>Priority</td>
                    <td>Location</td>
                    <td>From Language</td>
                    <td>To Language</td>
                    <td>Time Schedule</td>
                    <td>Day</td>
                    <td>Month</td>
                    <td>Repeat</td>
                    <td>Status</td>
                </tr>
                {requestList.map((req: request)=> (
                    <tr>
                        <td>{req.name}</td>
                        <td>{req.priority}</td>
                        <td>{req.location}</td>
                        <td>{req.fromLanguage}</td>
                        <td>{req.toLanguage}</td>
                        <td>{req.timeSchedule}</td>
                        <td>{req.day}</td>
                        <td>{req.month}</td>
                        <td>{req.repeat}</td>
                        <td>{req.status}</td>
                    </tr>
                ))}
            </table>
          </div>
        </>
    );
}

export default App;
