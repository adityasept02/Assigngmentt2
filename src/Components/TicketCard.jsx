/* eslint react/prop-types: 0 */
import React, { useEffect, useState } from "react";
import './TicketCard.css';
import noPriority from "../assets/No-priority.svg";
import medPriority from "../assets/Img - Medium Priority.svg";
import highPriority from "../assets/Img - High Priority.svg";
import urgentPriority from "../assets/SVG - Urgent Priority colour.svg"; 
import lowPriority from "../assets/Img - Low Priority.svg";
import urgentPriorityGray from "../assets/SVG - Urgent Priority grey.svg";
import backlogIcon from '../assets/Backlog.svg';  // Replace with the actual path
import todoIcon from '../assets/To-do.svg';
import inProgressIcon from '../assets/in-progress.svg';
import doneIcon from '../assets/Done.svg';
import canceledIcon from '../assets/Cancelled.svg';
import profile1 from "../assets/profile1.webp";
import profile2 from "../assets/profile2.webp";
import profile3 from "../assets/profile3.webp";
import profile4 from "../assets/profile4.webp";
import profile5 from "../assets/profile5.webp";

const TicketCard = ({ ticket, statusIcon, priorityIcon, userIcon, users }) => {
  const priorityLabels = ["No Priority", "Low", "Medium", "High", "Urgent"];
  const priorityIcons = [
    noPriority,
    lowPriority,
    medPriority,
    highPriority,
    urgentPriorityGray
  ]

  const [available,setAvailable] = useState(true);

  useEffect(()=>{
      setAvailable(users.find(user => user.id === ticket.userId)?.available)
      console.log(available);
      
  },[users,ticket])
  


  const statusIcons = {
    "Backlog": backlogIcon,
    "Todo": todoIcon,
    "In progress": inProgressIcon,
    "Done": doneIcon,
    "Canceled": canceledIcon
  }

  const userIcons = {
    "usr-1": profile1,
    "usr-2": profile2,
    "usr-3": profile3,
    "usr-4": profile4,
    "usr-5": profile5
  }
  
  return (
    <div className="ticket-card">
      <div className="card-top">
        <div>{ticket.id}</div>
        <div>
          {!userIcon && (
            <div className="user-container">
              <img className="user-icon" src={userIcons[ticket.userId]} style={{height:"20px",width:"20px",borderRadius:"50%",objectFit:"cover",border:"1px solid #ddd"}}></img>
              <span className={`user-badge ${available ? "available" : "non-available"}`}></span>
              </div>
            )}
          
        </div>
      </div>
      <div className="card-title">
        {!statusIcon && <img className="priority-icon" src={statusIcons[ticket.status]} style={{border:'none'}}></img>}
        <div className="title">{ticket.title}</div>
      </div>
      <div className="card-bottom">
        {!priorityIcon && <img className="priority-icon" src={priorityIcons[ticket.priority]}></img>}
        <div className="tags">{ticket.tag}</div>
      </div>
    </div>
  );
};

export default TicketCard;