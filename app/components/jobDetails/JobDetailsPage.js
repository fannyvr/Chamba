import React, { Component } from 'react';

function JobDetails (props){
    return(
      <div>
        <div>{props.clickedJobOnSearch.title}</div>
        <div>{props.clickedJobOnSearch.category}</div>
        <div>{props.clickedJobOnSearch.salary}</div>
        <div>{props.clickedJobOnSearch.position}</div>
        <div>{props.clickedJobOnSearch.description}</div>
        <div>{props.clickedJobOnSearch.contact}</div>
        <div>{props.clickedJobOnSearch.application}</div>
      </div>
    )
};

export default JobDetails;