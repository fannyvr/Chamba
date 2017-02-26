import React from 'react';
import { Link } from 'react-router';

import JobDetailsPage from '../jobDetails/JobDetailsPage';

function JobSearch(props){
  return(
    <div> 
      <h1>JOBS</h1>
      <ul>
        {props.jobs.map((job, index) =>(
          <li key={index}
          onClick={() => props.onClick(job)} 
          >
            {job.title} 
          </li>))}
      </ul>
    </div>
  )
}


export default JobSearch;