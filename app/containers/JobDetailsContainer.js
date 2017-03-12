import React, { Component } from 'react';
import { connect } from 'react-redux';

import JobDetailsPage from '../components/jobDetails/JobDetailsPage';


class JobDetailsContainer extends Component{
  render(){
    const job = this.props.clickedJobOnSearch;
      
    return(
      <div> 
        <JobDetailsPage clickedJobOnSearch={job} /> 
      </div>
    );
  }
};

function mapStateToProps(state){
  let clickedJobOnSearch;
  if(state.get('clickedJobOnSearch')) clickedJobOnSearch = state.get('clickedJobOnSearch').toJS();
  return { clickedJobOnSearch };
};


export default connect( mapStateToProps )( JobDetailsContainer );
