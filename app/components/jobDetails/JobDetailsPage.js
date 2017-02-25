import React, { Component } from 'react';
import { connect } from 'react-redux';


class JobDetails extends Component{
  render(){
    return(
      <div>
        {this.props.jobs.map((job, index) =>(
          <div key={index}>
          {job.category}
          </div>
          ))}
      </div>
    )
  }
};

function mapStateToProps(state){
  return { jobs: state.jobs }
}

export default connect(mapStateToProps)(JobDetails);