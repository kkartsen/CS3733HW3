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
            time: time,
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
            <div className={"Employee"}>
                <br/>
                <label htmlFor="employeeName">Name of the Employee: </label>
                <input type="text" id="employeeName" name="employeeName" required/><br/>
            </div>
            <div className={"Priority"}>
                <br/>
                <label htmlFor="priority">Priority: </label>
                <select id="priority" name="priority" required>
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
                <input type="text" id="location" name="location" required/><br/>
            </div>
            <div className={"Languages"}>
                <br/>
                <label htmlFor="startLang">Between languages: </label>
                <input type="text" id="start" name="startLang" required/>
                <label htmlFor={"endLang"}> and </label>
                <input type={"text"} id={"end"} name={"endLang"} required/><br/>
            </div>
            <div className={"Time"}>
                <br/>
                <label htmlFor={"timeNeeded"}>When is this service required?</label><br/>
                <input type={"radio"} id={"asap"} name={"when"} value={"now"}/>
                <label htmlFor={"asap"}>Now</label><br/>
                <input type={"radio"} id={"later"} name={"when"} value={"notnow"}/>
                <label htmlFor={"later"}>Scheduled time</label><br/>
            </div>
            <div className={"SpecificTime"}>
                <br/>
                <label htmlFor={"specificTime"}>If translation is needed at a specific time, please enter when
                    this service is required below:</label><br/>
                <label htmlFor={"day"}>Day: </label>
                <input type={"text"} id={"dayreq"} name={"day"}/>
                <label htmlFor={"month"}> Month: </label>
                <input type={"text"} id={"monthreq"} name={"month"}/>
                <label htmlFor={"year"}> Year: </label>
                <input type={"text"} id={"yearreq"} name={"year"}/><br/>
                <label htmlFor={"hour"}>Time: </label>
                <select id={"hour"} name={"hour"}>
                    <option value={"One"}>1</option>
                    <option value={"Two"}>2</option>
                    <option value={"Three"}>3</option>
                    <option value={"Four"}>4</option>
                    <option value={"Five"}>5</option>
                    <option value={"Six"}>6</option>
                    <option value={"Seven"}>7</option>
                    <option value={"Eight"}>8</option>
                    <option value={"Nine"}>9</option>
                    <option value={"Ten"}>10</option>
                    <option value={"Eleven"}>11</option>
                    <option value={"Twelve"}>12</option>
                </select>
                <label htmlFor={"minute"}> : </label>
                <select id={"minute"} name={"minute"}>
                    <option value={"Zero"}>0</option>
                    <option value={"One"}>1</option>
                    <option value={"Two"}>2</option>
                    <option value={"Three"}>3</option>
                    <option value={"Four"}>4</option>
                    <option value={"Five"}>5</option>
                </select>
                <select id={"second"} name={"second"}>
                    <option value={"Zero"}>0</option>
                    <option value={"One"}>1</option>
                    <option value={"Two"}>2</option>
                    <option value={"Three"}>3</option>
                    <option value={"Four"}>4</option>
                    <option value={"Five"}>5</option>
                    <option value={"Six"}>6</option>
                    <option value={"Seven"}>7</option>
                    <option value={"Eight"}>8</option>
                    <option value={"Nine"}>9</option>
                </select>
                <select id={"am/pm"} name={"am/pm"}>
                    <option value={"am"}>A.M.</option>
                    <option value={"pm"}>P.M.</option>
                </select>
            </div>
            <div className={"Repeat"}>
                <br/>
                <label htmlFor={"repeating?"}>Is this a repeating request?</label><br/>
                <input type={"radio"} id={"yes"} name={"repeats?"} value={"repeats"}/>
                <label htmlFor={"yes"}>Yes</label><br/>
                <input type={"radio"} id={"no"} name={"repeats?"} value={"doesnotrepeat"}/>
                <label htmlFor={"no"}>No</label><br/>
            </div>
            <div className={"Status"}>
                <br/>
                <label htmlFor="status">Status: </label>
                <select id="status" name="status" required>
                    <option value={"Default"}>--Select--</option>
                    <option value="unassigned">Unassigned</option>
                    <option value="assigned">Assigned</option>
                    <option value="inprogress">In Progress</option>
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
