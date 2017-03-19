import React from 'react';

import './myPostsPage.css';

const MyPosts = (props) => (
  <div>
    <h1> My Posts </h1>
    <ul id="postsList">
      {props.jobs.map( (job, index) => (
        <li key={index} className="date"> 
          {job.date} 
          <ul id="jobTitle">
            <li className="postItem" 
              key={index}
              onClick={ () => props.onClick(job) } 
            >
              {job.title} 
            </li> 
          </ul>
        </li>))
      }
    </ul>
  </div>
);

export default MyPosts;
