import React from 'react';
import { Link } from 'react-router';

import JobDetailsPage from '../jobDetails/JobDetailsPage';

function JobSearch(props){
  return(
    <div> 
      <h1>JOBS</h1>
      <ul>
      {props.jobs.map((job, index) =>(
        <li key={index}>
          <a onClick={props.onClick}> {job.title} </a>
        </li>))}
      </ul>
    </div>
  )
}


export default JobSearch;