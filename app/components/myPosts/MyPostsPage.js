import React from 'react';
import JobList from '../joblist/JobList';

const MyPosts = (props) => (
  <div>
    <h1> My Posts </h1>
    <JobList jobs={props.jobs} 
             onClick={props.onClick}
    />
  </div>
);

export default MyPosts;
