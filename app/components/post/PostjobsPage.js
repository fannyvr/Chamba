import React, { Component } from 'react';
import './postJobsPage.css';

const Post = (props) => (
  <div> 
    <h1>POST</h1>
    <form onSubmit={props.onEnter} 
          onChange={props.onChange}
    >
      <div className="details"> 
        Title: <br/> 
        <input type="text" 
               name="title" 
               value={props.title} 
               required
        /> 
      </div>
      <div className="details"> 
        Category: <br/>
        <input type="text" 
               name="category" 
               value={props.category} 
        />  
      </div>
      <div className="details"> 
        Hourly Salary: <br/> 
        <input type="text" 
               name="salary" 
               value={props.salary} 
               required
        /> 
      </div>
      <div className="details"> 
        Position: <br/> 
        <input type="text" 
               name="position" 
               value={props.position} 
               required
        />  
      </div>
      <div id="description"> 
        Description: <br/> 
        <textarea type="text" 
                  name="description" 
                  value={props.description} 
                  required
        /> 
      </div>
      <div className="details"> 
        Contact Info: <br/> 
        <input type="text" 
               name="contact" 
               value={props.contact} 
               required
        /> 
      </div>
      <div className="details"> 
        Aplication: <br/> 
        <input type="text" 
               name="application"  
               value={props.application} 
        /> 
      </div>
      
      <button type="submit" 
              className="postButton" 
      > 
        Post 
      </button>
      <button type="button" 
              className="cancelButton" 
              onClick={props.onCancel}
      > 
        Cancel 
      </button>
    </form>
  </div>
);

export default Post;