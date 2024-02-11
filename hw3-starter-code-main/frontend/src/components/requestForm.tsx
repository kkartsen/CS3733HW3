import React, {useState} from "react";
import axios from "axios";
import {request, Priority, Status} from "./requestType";


export function RequestForm() {
    const [name, setName] = useState("");
    const [priority, setPriority] = useState(Priority.low);
    const [location, setLocation] = useState("");
    const [fromLanguage, setFromLanguage] = useState("");
    const [toLanguage, setToLanguage] = useState("");
    const [timeSchedule, setTimeSchedule] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [time, setTime] = useState("");
    const [repeat, setRepeat] = useState("");
    const [status, setStatus] = useState(Status.assigned);
    async function submit() {
        const requestSent:request = {
            name:name,
            priority: priority,
            location: location,
            fromLanguage: fromLanguage,
            toLanguage: toLanguage,
            timeSchedule: timeSchedule,
            day: day,
            month: month,
            repeat: repeat,
            status: status

        };
        const res = await axios.post("/api/request",requestSent,{
            headers: {
                "Content-Type":"application/json"
            }
        });
        if(res.status == 200) {
            console.log("success");
        }
    }

    return (
        <form id="serviceRequestForm" className={"box"}>
            <div className={"Name"}>
                <br/>
                <label htmlFor="Name">Name: </label>
                <input type="text" id="Name" name="Name" required onChange={(e) => {
                    setName(e.target.value)
                }}/><br/>
            </div>
            <div className={"Priority"}>
                <br/>
                <label htmlFor="priority">Priority: </label>
                <select id="priority" name="priority" required onChange={(e) => {
                    setPriority(Priority[e.target.value.toLowerCase() as keyof typeof Priority]);
                }}>
                    <option value={"Default"}>--Select--</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Emergency">Emergency</option>
                </select>
            </div>
            <div className={"Location"}>
                <br/>
                <label htmlFor="location">Location: </label>
                <input type="text" id="location" name="location" required onChange={(e) => {
                    setLocation(e.target.value)
                }}/><br/>
            </div>
            <div className={"Languages"}>
                <br/>
                <label htmlFor="startLang">Between languages: </label>
                <input type="text" id="start" name="startLang" required onChange={(e) => {
                    setFromLanguage(e.target.value)
                }}/>
                <label htmlFor={"endLang"}> and </label>
                <input type={"text"} id={"end"} name={"endLang"} required onChange={(e) => {
                    setToLanguage(e.target.value)
                }}/><br/>
            </div>
            <div className={"Time"}>
                <br/>
                <label htmlFor={"timeNeeded"}>When is this service required?</label><br/>
                <input type={"radio"} id={"asap"} name={"when"} value={"now"} onChange={(e) => {
                    setTimeSchedule(e.target.value);
                }}/>
                <label htmlFor={"asap"}>Now</label><br/>
                <input type={"radio"} id={"later"} name={"when"} value={"notnow"} onChange={(e) => {
                    setTimeSchedule(e.target.value);
                }}/>
                <label htmlFor={"later"}>Scheduled time</label><br/>
            </div>
            <div className={"SpecificTime"}>
                <br/>
                <label htmlFor={"specificTime"}>If translation is needed at a specific time, please enter when
                    this service is required below:</label><br/>
                <label htmlFor={"day"}>Day: </label>
                <input type={"text"} id={"dayreq"} name={"day"} onChange={(e) => {
                    setDay(e.target.value)
                }}/>
                <label htmlFor={"month"}> Month: </label>
                <input type={"text"} id={"monthreq"} name={"month"} onChange={(e) => {
                    setMonth(e.target.value)
                }}/>
            </div>
            <div className={"Repeat"}>
                <br/>
                <label htmlFor={"repeating?"}>Is this a repeating request?</label><br/>
                <input type={"radio"} id={"yes"} name={"repeats?"} value={"repeats"} onChange={(e) => {
                    setRepeat(e.target.value)
                }}/>
                <label htmlFor={"yes"}>Yes</label><br/>
                <input type={"radio"} id={"no"} name={"repeats?"} value={"doesnotrepeat"}/>
                <label htmlFor={"no"}>No</label><br/>
            </div>
            <div className={"Status"}>
                <br/>
                <label htmlFor="status">Status: </label>
                <select id="status" name="status" required onChange={(e) => {
                    setStatus(Status[e.target.value as keyof typeof Status]);
                }}>
                    <option value={"Default"}>--Select--</option>
                    <option value="unassigned">Unassigned</option>
                    <option value="assigned">Assigned</option>
                    <option value="inProgress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <br/>
            <div className={"Submit"}>
                <button onClick={submit} type="submit">Submit</button>
            </div>
            <br/>
        </form>
    );
}
