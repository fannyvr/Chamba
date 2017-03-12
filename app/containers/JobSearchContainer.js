import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';

import JobSearchPage from '../components/search/JobSearchPage';
import { clickedJob } from '../actions/actions';


class JobSearchContainer extends Component{
  constructor(){
    super();
    this.state= {};
    this.handleClick = this.handleClick.bind(this);
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

function mapStateToProps(state){
  let jobs;
  if(state.get('jobs')) jobs = state.get('jobs').toJS();
  return { jobs };
};

function matchDispatchToProps(dispatch){
  return bindActionCreators({ clickedJob: clickedJob }, dispatch);
};

export default connect( mapStateToProps, matchDispatchToProps )( JobSearchContainer );

