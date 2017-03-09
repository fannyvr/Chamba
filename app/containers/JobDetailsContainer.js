import React, { Component } from 'react';
import { connect } from 'react-redux';

import JobDetailsPage from '../components/jobDetails/JobDetailsPage';


class JobDetailsContainer extends Component{
  render(){
    const job = this.props.clickedJobOnSearch;
      
    return(
      <div> 
        <JobDetailsPage clickedJobOnSearch={job}/> 
      </div>
    );
  }
};

function mapStateToProps(state){
  return {clickedJobOnSearch: state.clickedJobOnSearch};
};

export default connect(mapStateToProps)(JobDetailsContainer);
