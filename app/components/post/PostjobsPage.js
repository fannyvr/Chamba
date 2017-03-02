import React, { Component } from 'react';
import './postJobsPage.css';

function Post(props) {
  return(
    <div> 
      <h1>POST</h1>
      <form onChange={props.onChange}>
        Title: <br /> <input type="text" name="title" value={props.title} /> <br />
        Category: <br /> <input type="text" name="category" value={props.category} /> <br />
        Hourly Salary: <br /> <input type="text" name="salary" value={props.salary} /> <br />
        Position: <br /> <input type="text" name="position" value={props.position} /> <br />
        Job Description: <br /> <textarea type="text" name="description" value={props.description} /> <br />
        Contact Info: <br /> <input type="text" name="contact" value={props.contact} /> <br />
        Aplication: <br /> <input type="text" name="application"  value={props.application} /> <br />
        
        <button onClick={props.onEnter}> Post </button>
        <button> Cancel </button>
      </form>
    </div>
  );
};

export default Post;