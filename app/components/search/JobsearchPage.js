import React from 'react';
import JobList from '../joblist/JobList';


const JobSearch = (props) => {
  const { jobs, onClick } = props;
  return(
    <div> 
      <h1>JOBS</h1>
      <JobList jobs={jobs} 
               onClick={onClick}
      />
    </div>
  );
};

export default JobSearch;