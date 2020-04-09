import React from 'react'
//import {Col} from 'reactstrap';

const StatsCard = ({ name, stats }) => {
    return (
     
        <div className="stats-card">
          <div className="name">{name}</div>
          <div className="count">{stats}</div>
         
        </div>
      
    );
  };
  export default StatsCard;