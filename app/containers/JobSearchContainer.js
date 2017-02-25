import React, { Component } from 'react';
import { connect } from 'react-redux';
import JobSearchPage from '../components/search/JobSearchPage';

class JobSearchContainer extends Component{
  render(){
    return(
      <JobSearchPage jobs={this.props.jobs} />
    )
  }
}

function mapStateToProps(state){
  return { jobs: state.jobs }
}

export default connect(mapStateToProps)(JobSearchContainer);

