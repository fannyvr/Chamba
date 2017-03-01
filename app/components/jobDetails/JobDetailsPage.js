import React, { Component } from 'react';

import './jobDetails.css';

function JobDetails (props){
  const job = props.clickedJobOnSearch;
  return(
    <div>
      <div id="title"> { job.title } </div>
          <div id="position" className="details"> <b>Position:</b> { job.position } </div>
          <div id="salary" className="details"> <b>Salary:</b> { job.salary } </div>
          <div id="category" className="details"> <b>Category:</b> { job.category } </div>
          <div id="description" className="details"> <b>Description:</b> { job.description } </div>
          <div id="contact" className="details"> <b>Contact:</b> { job.contact } </div>
          <div id="application" className="details"> <b>Application:</b> { job.application } </div>
    </div>
  );
};

export default JobDetails;