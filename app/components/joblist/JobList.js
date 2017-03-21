import React from 'react';

import JobTitles from './JobTitles';
import './joblist.css';

const JobList = (props) => (
  <ul id="list">
      { props.jobs.map( (job, index) => (
        <li key={index} className="date"> 
          {job.date} 
          <JobTitles key={index} 
                     onClick={props.onClick} 
                     title={job.title}
                     job={job} 
          />
        </li>))
      }
    </ul>
);

export default JobList;