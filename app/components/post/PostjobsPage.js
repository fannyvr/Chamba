import React, { Component } from 'react';

function Post(props) {
  return(
    <div> 
      <h1>POST</h1>
      <form>
        Title: <br /> 
        <input type="text" value={props.title} onChange={props.onChange('title')}/> <br />
        Category: <br /> 
        <input type="text" value={props.category} onChange={props.onChange('category')}  /> <br />
        Hourly Salary: <br /> 
        <input type="text" value={props.salary} onChange={props.onChange('salary')} /> <br />
        Position: <br /> 
        <input type="text" value={props.position} onChange={props.onChange('position')} /> <br />
        Job Description: <br />
         <input type="text" value={props.description} onChange={props.onChange('description')} /> <br />
        Contact Info: <br /> 
        <input type="text" value={props.contact} onChange={props.onChange('contact')} /> <br />
        Aplication: <br /> 
        <input type="text" value={props.application} onChange={props.onChange('application')} /> <br />
        
        <button onClick={props.onEnter}> Post </button>
        <button> Cancel </button>
      </form>
    </div>
  )
}

export default Post;