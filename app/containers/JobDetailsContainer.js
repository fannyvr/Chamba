import React, { Component } from 'react';
import { connect } from 'react-redux';

import JobDetailsPage from '../components/jobDetails/JobDetailsPage';


class JobDetailsContainer extends Component{
  render(){
    return(
      <div> 
        <JobDetailsPage clickedJobOnSearch={this.props.clickedJobOnSearch}/> 
      </div>
    )
  }
}

function mapStateToProps(state){
  return {clickedJobOnSearch: state.clickedJobOnSearch}
}

export default connect(mapStateToProps)(JobDetailsContainer);
