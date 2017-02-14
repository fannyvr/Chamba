import React, { Component } from 'react';
import PostJobsPage from '../components/post/PostJobsPage';

class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      category: '',
      salary: '',
      position: '',
      description: '',
      contact: '',
      application: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(event){
    event.preventDefault();
  }

  handleChange(keyword){
    return (e) => {
      const state = {};
      state[keyword] = e.target.value
      this.setState( state )  
    }
  }

  render(){
    return (
      <div> 
        <PostJobsPage onChange={this.handleChange} 
                      onEnter={this.handleEnter}
                      title={this.state.title}
                      category={this.state.category}
                      salary={this.state.salary}
                      position={this.state.position}
                      description={this.state.description}
                      contact={this.state.contact}
                      application={this.state.application}                    
                      />
      </div>
    )
  }
}

export default PostContainer;



