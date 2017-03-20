import React from 'react';

import './jobSearchPage.css';

const JobSearch = (props) => (
  <div> 
    <h1>JOBS</h1>
    <ul id="searchList">
      {props.jobs.map( (job, index) => (
        <li key={index} className="date"> 
          {job.date} 
          <ul id="jobTitle">
            <li className="searchItem" 
              key={index}
              onClick={ () => props.onClick(job) } 
            >
              {job.title} 
            </li> 
          </ul>
        </li>))
      }
    </ul>
  </div>
);

export default JobSearch;