import React from 'react'

const StatsCard = ({ name, stats }) => {
    return (
        <div className="stats-card">
          <div className="name">{name}</div>
          <div className="count">{stats}</div>
        </div>
    );
  };
  export default StatsCard;