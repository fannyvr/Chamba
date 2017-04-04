import React from 'react';

import './joblist.css';

const JobTitles = (props) => {
  const { index, onClick, job, title } = props;
  return ( 
    <ul id="jobList">
      <li className="jobTitle" 
          key={ index }
          onClick={ () => onClick(job) } 
      >
        {title} 
      </li> 
    </ul>
  );
};

export default JobTitles;