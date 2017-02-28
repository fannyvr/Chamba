import React, { Component } from 'react';
import { connect } from 'react-redux';


class JobDetails extends Component{
  render(){
    return(
      <div>
        <div>{this.props.clickedJobOnSearch.title}</div>
        <div>{this.props.clickedJobOnSearch.category}</div>
        <div>{this.props.clickedJobOnSearch.salary}</div>
        <div>{this.props.clickedJobOnSearch.position}</div>
        <div>{this.props.clickedJobOnSearch.description}</div>
        <div>{this.props.clickedJobOnSearch.contact}</div>
        <div>{this.props.clickedJobOnSearch.application}</div>
      </div>
    )
  }
};

function mapStateToProps(state){
  return { clickedJobOnSearch: state.clickedJobOnSearch }
}

export default connect(mapStateToProps)(JobDetails);