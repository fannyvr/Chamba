import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';

import JobSearchPage from '../components/search/JobSearchPage';
import { clickedJob, getJobs } from '../actions/actions';


class JobSearchContainer extends Component{
  constructor(){
    super();
    this.state= {};
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    this.props.getJobs();
  }

  handleClick(job){
    this.props.clickedJob(job);
    browserHistory.push('/jobdetails');
  }

  render(){
    return(
      <JobSearchPage jobs={ this.props.jobs }
                     onClick={ this.handleClick } 
      />
    );
  }
};

const mapStateToProps = (state) => {
  let jobs = state.get('jobList').toJS();
  return { jobs };
};

const matchDispatchToProps = (dispatch) =>
  bindActionCreators({ clickedJob: clickedJob, getJobs: getJobs }, dispatch);

export default connect( mapStateToProps, matchDispatchToProps )( JobSearchContainer );

