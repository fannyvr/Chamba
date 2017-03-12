import React, { Component } from 'react';
import { connect } from 'react-redux';

import JobDetailsPage from '../components/jobDetails/JobDetailsPage';


class JobDetailsContainer extends Component{
  render(){      
    return(
      <div> 
        <JobDetailsPage activeJob={ this.props.activeJob } /> 
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  let activeJob;
  if(state.get('activeJob')) activeJob = state.get('activeJob').toJS();
  return { activeJob };
};


export default connect( mapStateToProps )( JobDetailsContainer );
