import React, { Component } from 'react';

import './jobDetails.css';

function JobDetails (props){
    return(
      <div>
        <div id="title"> {props.clickedJobOnSearch.title} </div>
        <div id="category"> {props.clickedJobOnSearch.category} </div>
        <div id="salary"> {props.clickedJobOnSearch.salary} </div>
        <div id="position"> {props.clickedJobOnSearch.position} </div>
        <div id="description"> {props.clickedJobOnSearch.description} </div>
        <div id="contact"> {props.clickedJobOnSearch.contact} </div>
        <div id="application"> {props.clickedJobOnSearch.application} </div>
      </div>
    );
};

export default JobDetails;