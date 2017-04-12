import React from 'react';

import JobList from '../joblist/JobList';

const MyPosts = props => {
  const { jobs, onClick } = props;
  return(
    <div>
      <h1> My Posts </h1>
      <JobList jobs={ jobs } 
               onClick={ onClick }
      />
    </div>
  );
};

export default MyPosts;
