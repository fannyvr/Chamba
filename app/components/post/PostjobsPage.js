import React, { Component } from 'react';

function Post(props) {
  return(
    <div> 
      <h1>POST</h1>
      <form>
        Title: <br /> 
        <input type="text" value={props.title} /> <br />
        Category: <br /> 
        <input type="text" value={props.category}  /> <br />
        Hourly Salary: <br /> 
        <input type="text" value={props.salary}  /> <br />
        Position: <br /> 
        <input type="text" value={props.position}  /> <br />
        Job Description: <br />
         <input type="text" value={props.description}  /> <br />
        Contact Info: <br /> 
        <input type="text" value={props.contact}  /> <br />
        Aplication: <br /> 
        <input type="text" value={props.application}  /> <br />
        
        <button onClick={props.onEnter}> Post </button>
        <button> Cancel </button>
      </form>
    </div>
  )
}

export default Post;