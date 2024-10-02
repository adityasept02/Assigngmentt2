/* eslint react/prop-types: 0 */
import React from "react";

const TicketCard = ({ ticket }) => {
  const priorityLabels = ["No Priority", "Low", "Medium", "High", "Urgent"];
  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <p>Status: {ticket.status}</p>
      <p>Priority: {priorityLabels[ticket.priority]}</p>
      
    </div>
  );
};

export default TicketCard;
