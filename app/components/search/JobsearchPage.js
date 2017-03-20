import React from 'react';
import JobList from '../joblist/JobList';

import './jobSearchPage.css';

const JobSearch = (props) => (
  <div> 
    <h1>JOBS</h1>
    <ul id="searchList">
      {props.jobs.map( (job, index) => (
        <li key={index} className="date"> 
          {job.date} 
          <JobList key={index} 
                     onClick={props.onClick} 
                     title={job.title}
                     job={job} 
            />
        </li> ))
      }
    </ul>
  </div>
);

export default JobSearch;