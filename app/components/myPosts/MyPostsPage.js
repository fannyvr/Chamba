import React from 'react';

import './myPostsPage.css';

function MyPosts(props){
  return(
    <div>
      <h1> My Posts </h1>
        <ul id="postsList">
          {props.jobs.map((job, index)=>(
            <li className="postItem" key={index} onClick={()=>props.onClick(job)}> 
              {job.title} 
            </li>
          ))}
        </ul>
    </div>
  )
}

export default MyPosts;

