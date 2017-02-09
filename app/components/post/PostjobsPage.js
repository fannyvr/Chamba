import React, { Component } from 'react';

class Post extends Component {
  render(){
    return(
      <div> 
        <h1>POST</h1>
        <form>
          Title: <br /> <input type="text" /> <br />
          Category: <br /> <input type="text" /> <br />
          Hourly Salary: <br /> <input type="text" /> <br />
          Position: <br /> <input type="text" /> <br />
          Job Description: <br /> <input type="text" /> <br />
          Contact Info: <br /> <input type="text" /> <br />
          Aplication: <br /> <input type="text" /> <br />
          <button> Post </button>
          <button> Cancel </button>
        </form>
      </div>
    )
  }
}

export default Post;