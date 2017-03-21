import React from 'react';

import './joblist.css';

const JobTitles = (props) => (
  <ul id="jobList">
    <li className="jobTitle" 
        key={ props.index }
        onClick={ () => props.onClick(props.job) } 
    >
      {props.title} 
    </li> 
  </ul>
);

export default JobTitles;