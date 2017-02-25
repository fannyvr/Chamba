import React from 'react';
import { Link } from 'react-router';

import JobDetailsPage from '../jobDetails/JobDetailsPage';

function JobSearch(props){
  return(
    <div> 
      <h1>JOBS</h1>
      
      {props.jobs.map((job, index) =>(
        <div key={index}>
          <Link to="/jobdetails" > { job.title } </Link>
        </div>))}
    </div>
  )
}


export default JobSearch;