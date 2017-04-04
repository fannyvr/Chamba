import React, { Component } from 'react';
import './postJobsPage.css';

const Post = (props) => {
  const { onEnter, onChange, onCancel, title, position, salary, category, description, contact, application } = props;
  return(
    <div> 
      <h1>POST</h1>
      <form onSubmit={onEnter} 
            onChange={onChange}
      >
        <div className="details"> 
          Title: <br/> 
          <input type="text" 
                 name="title" 
                 value={title} 
                 required
          /> 
        </div>
        <div className="details"> 
          Category: <br/>
          <input type="text" 
                 name="category" 
                 value={category} 
          />  
        </div>
        <div className="details"> 
          Hourly Salary: <br/> 
          <input type="text" 
                 name="salary" 
                 value={salary} 
                 required
          /> 
        </div>
        <div className="details"> 
          Position: <br/> 
          <input type="text" 
                 name="position" 
                 value={position} 
                 required
          />  
        </div>
        <div id="description"> 
          Description: <br/> 
          <textarea type="text" 
                    name="description" 
                    value={description} 
                    required
          /> 
        </div>
        <div className="details"> 
          Contact Info: <br/> 
          <input type="text" 
                 name="contact" 
                 value={contact} 
                 required
          /> 
        </div>
        <div className="details"> 
          Aplication: <br/> 
          <input type="text" 
                 name="application"  
                 value={application} 
          /> 
        </div>
        
        <button type="submit" 
                className="postButton" 
        > 
          Post 
        </button>
        <button type="button" 
                className="cancelButton" 
                onClick={onCancel}
        > 
          Cancel 
        </button>
      </form>
    </div>
  );
};

export default Post;