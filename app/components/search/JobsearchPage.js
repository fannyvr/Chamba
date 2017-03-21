import React from 'react';
import JobList from '../joblist/JobList';


const JobSearch = (props) => (
  <div> 
    <h1>JOBS</h1>
    <JobList jobs={props.jobs} 
             onClick={props.onClick}
    />
  </div>
);

export default JobSearch;