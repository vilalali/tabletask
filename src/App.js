import { useState } from "react";
import "./App.css";

import data from "./mock-data.json"

const header =[
  {
    date:"Date",
    fullName:"Full Name",
    eventType: "Event Type",
    eventDescription: "Event Description"
  }
]

function App() {
  const [details] = useState(data)
  const [theaders] = useState(header)
  return (
    <>
      <div className="app-container">
        <h1>My First Table Task</h1>
        <table>
          <thead>
          {theaders.map((theader)=>(
            <tr>
              <th>{theader.date}</th>
              <th>{theader.fullName}</th>
              <th>{theader.eventType}</th>
              <th>{theader.eventDescription}</th>
            </tr>
          ))}
          </thead>
          <tbody>
          {details.map((detail)=>(
            <tr>
            <td>{detail.Date}</td>
            <td>{detail.fullName}</td>
            <td>{detail.eventType}</td>
            <td>{detail.eventDescription}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
