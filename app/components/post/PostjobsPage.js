import React, { Component } from 'react';
import './postJobsPage.css';

function Post(props) {
  return(
    <div> 
      <h1>POST</h1>
      <form onSubmit={props.onEnter} onChange={props.onChange}>
        <div className="details"> Title: <br/> <input type="text" name="title" value={props.title} required/> <br/> </div>
        <div className="details"> Category: <br/> <input type="text" name="category" value={props.category} /> <br/> </div>
        <div className="details"> Hourly Salary: <br/> <input type="text" name="salary" value={props.salary} required/> <br/> </div>
        <div className="details"> Position: <br/> <input type="text" name="position" value={props.position} required/> <br/> </div>
        <div id="description"> Job Description: <br/> <textarea type="text" name="description" value={props.description} required/> <br/> </div>
        <div className="details"> Contact Info: <br/> <input type="text" name="contact" value={props.contact} required/> <br/> </div>
        <div className="details"> Aplication: <br/> <input type="text" name="application"  value={props.application} /> <br/> </div>
        
        <button type="submit" className="postButton" > Post </button>
        <button type="button" className="cancelButton" onClick={props.onCancel}> Cancel </button>
      </form>
    </div>
  );
};

export default Post;