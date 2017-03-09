import React, { Component } from 'react';

import './jobDetails.css';

function JobDetails (props){
  const job = props.clickedJobOnSearch;
  return(
    <div>
      <div id="title"> 
        { job.title } 
      </div>

      <div className="detail"> 
        <b> Position: </b> <br/> 
        { job.position } 
      </div>

      <div className="detail"> 
        <b> Salary: </b> <br/> 
        { job.salary } 
      </div>

      { job.category.length > 0 && 
        <div className="detail"> 
          <b> Category: </b> <br/> 
          { job.category } 
        </div> 
      }

      <div id="jdescription"> 
        <b> Description: </b> <br/> 
        { job.description } 
      </div>

      <div className="detail"> 
        <b> Contact: </b> <br/> 
        { job.contact } 
      </div>

      { job.application.length > 0 && 
        <div className="detail"> 
          <b> Application: </b> <br/> 
          { job.application } 
        </div> 
      }
    </div>
  );
};

export default JobDetails;