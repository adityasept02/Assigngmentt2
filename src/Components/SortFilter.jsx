/* eslint react/prop-types: 0 */
import React, { useState } from "react";
import "./SortFilter.css";
import filterIcon from '../assets/Display.svg';

const SortFilter = ({ grouping, setGrouping, sortOptions, setSortOptions }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className="header">
      <button className="btn" onClick={toggleVisibility}>
        <img src={filterIcon} alt="filter icon" />
        {isVisible ? "Hide Filters" : "Display Filters"}
      </button>
      {isVisible && (
        <div className="sort-filter">
          <div className="grouping-section filter-section">
            <label>Grouping</label>
            <select
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="sorting-section filter-section">
            <label>Ordering</label>
            <select
              value={sortOptions}
              onChange={(e) => setSortOptions(e.target.value)}
            >
              <option value="">None</option>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortFilter;