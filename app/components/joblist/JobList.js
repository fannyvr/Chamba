import React from 'react';

import JobTitles from './JobTitles';
import './joblist.css';

const JobList = (props) => {
  const { jobs, onClick } = props;
  return (
    <ul id="list">
      { jobs.map( (job, index) => (
        <li key={index} className="date"> 
          {job.date} 
          <JobTitles key={index} 
                     onClick={onClick} 
                     title={job.title}
                     job={job} 
          />
        </li>))
      }
    </ul>
  )
};

export default JobList;