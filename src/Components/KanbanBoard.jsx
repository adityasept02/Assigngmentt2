/* eslint react/prop-types: 0 */
import React from "react";
import TicketCard from "./TicketCard";

const KanbanBoard = ({ tickets, users, grouping, sortOptions }) => {
  // Function to group tickets by status, user, or priority
  const groupTickets = () => {
    switch (grouping) {
      case "status":
        return groupBy(tickets, "status");
      case "user":
        return groupBy(tickets, "userId");
      case "priority":
        return groupBy(tickets, "priority");
      default:
        return groupBy(tickets, "status");
    }
  };

  // Function to group items by a key
  const groupBy = (list, key) => {
    return list.reduce((acc, item) => {
      const groupKey = item[key] || "No Group";
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(item);
      return acc;
    }, {});
  };

  // Function to sort tickets by priority or title
  const sortTickets = (group) => {
    switch (sortOptions) {
      case "priority":
        return group.sort((a, b) => b.priority - a.priority);
      case "title":
        return group.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return group;
    }
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-group">
          <h3>
            {grouping === "user"
              ? users.find((u) => u.id === group)?.name
              : group}
          </h3>
          <div className="ticket-list">
            {sortTickets(groupedTickets[group]).map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
