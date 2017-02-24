import React, { Component } from 'react';
import { connect } from 'react-redux';


class Jobs extends Component {
  render(){
    return(
      <div> 
        <h1>JOBS</h1>
        
        {this.props.jobs.map((job, index) =>(
          <div key={index}>
            <div>Title: {job.title}</div>
            <div>Category: {job.category}</div>
            <div>Salary: {job.salary}</div>
            <div>Position: {job.position}</div>
            <div>Description: {job.description}</div>
          </div>))}
      </div>
    )
  }
}


function mapStateToProps(state){
  return { jobs: state.jobs }
}

export default connect(mapStateToProps)(Jobs);