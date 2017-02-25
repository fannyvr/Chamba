import React from 'react';
import { Link } from 'react-router';

import JobDetailsPage from '../jobDetails/JobDetailsPage';

function JobSearch(props){
  return(
    <div> 
      <h1>JOBS</h1>
      
      {props.jobs.map((job, index) =>(
        <div key={index}>
          <a onClick={props.onClick}> {job.title} </a>
        </div>))}
    </div>
  )
}


export default JobSearch;