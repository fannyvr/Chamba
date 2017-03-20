import React from 'react';
import JobList from '../joblist/JobList';
import './myPostsPage.css';

const MyPosts = (props) => (
  <div>
    <h1> My Posts </h1>
    <ul id="postsList">
      { props.jobs.map( (job, index) => (
         <li key={index} className="postDate"> 
          {job.date} 
          <JobList key={index} 
                   onClick={props.onClick} 
                   title={job.title}
                   job={job} 
          />
        </li>))
      }
    </ul>
  </div>
);

export default MyPosts;
