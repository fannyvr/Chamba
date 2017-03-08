import React from 'react';

function MyPosts(props){
  return(
    <div>
      <h1> My Posts </h1>
        <ul>
          {props.jobs.map((job, index)=>(
            <li key={index} onClick={()=>props.onClick(job)}> 
              {job.title} 
            </li>
          ))}
        </ul>
    </div>
  )
}

export default MyPosts;

