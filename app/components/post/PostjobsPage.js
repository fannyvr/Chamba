import React, { Component } from 'react';
import './postJobsPage.css';

function Post(props) {
  return(
    <div> 
      <h1>POST</h1>
      <form onChange={props.onChange}>
        <div className="details">Title: <br/> <input type="text" name="title" value={props.title} /> </div>
        <div className="details">Category: <br/> <input type="text" name="category" value={props.category} /> </div> 
        <div className="details">Hourly Salary: <br/> <input type="text" name="salary" value={props.salary} /> </div>
        <div className="details">Position: <br/> <input type="text" name="position" value={props.position} /> </div>
        <div id="description">Job Description: <br/> <textarea type="text" name="description" value={props.description} /> </div>
        <div className="details">Contact Info: <br/> <input type="text" name="contact" value={props.contact} /> </div>
        <div className="details">Aplication: <br/> <input type="text" name="application"  value={props.application} /> </div>
        
        <button onClick={props.onEnter}> Post </button>
        <button> Cancel </button>
      </form>
    </div>
  );
};

export default Post;