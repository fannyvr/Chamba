import React, { Component } from 'react';

import './jobDetails.css';

const JobDetails = (props) => {
  const { title, position, salary, category, description, contact, application } = props.activeJob;
  
  return(
    <div>
      <div id="title"> 
        { title } 
      </div>
      <div className="detail"> 
        <b> Position: </b> <br/> 
        { position } 
      </div>
      <div className="detail"> 
        <b> Salary: </b> <br/> 
        { salary } 
      </div>
      { category.length > 0 && 
        <div className="detail"> 
          <b> Category: </b> <br/> 
          { category } 
        </div> 
      }
      <div id="jdescription"> 
        <b> Description: </b> <br/> 
        { description } 
      </div>
      <div className="detail"> 
        <b> Contact: </b> <br/> 
        { contact } 
      </div>
      { application.length > 0 && 
        <div className="detail"> 
          <b> Application: </b> <br/> 
          { application } 
        </div> 
      }
    </div>
  );
};

export default JobDetails;