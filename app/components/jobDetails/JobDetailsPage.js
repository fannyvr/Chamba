import React, { Component } from 'react';
import { connect } from 'react-redux';


class JobDetails extends Component{
  render(){
    return(
      <div>
        <div>{this.props.activeJob.title}</div>
        <div>{this.props.activeJob.category}</div>
        <div>{this.props.activeJob.salary}</div>
        <div>{this.props.activeJob.position}</div>
        <div>{this.props.activeJob.description}</div>
        <div>{this.props.activeJob.contact}</div>
        <div>{this.props.activeJob.application}</div>
      </div>
    )
  }
};

function mapStateToProps(state){
  return { activeJob: state.activeSearchJob }
}

export default connect(mapStateToProps)(JobDetails);