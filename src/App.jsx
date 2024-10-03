import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SortFilter from "./components/SortFilter.jsx";
import KanbanBoard from "./components/KanbanBoard.jsx";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || "status");
  const [sortOptions, setSortOptions] = useState(localStorage.getItem('sortOptions') || "");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      console.log(res.data);
      setTickets(res.data.tickets);
      setUsers(res.data.users);
    };

    fetchData();
  }, []);

  return (
    <>
      <SortFilter
        grouping={grouping}
        setGrouping={setGrouping}
        sortOptions={sortOptions}
        setSortOptions={setSortOptions}
      />
      <KanbanBoard
        tickets={tickets}
        users={users}
        grouping={grouping}
        sortOptions={sortOptions}
      />
    </>
  );
}

export default App;