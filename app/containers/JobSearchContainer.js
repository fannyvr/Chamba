import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import JobSearchPage from '../components/search/JobSearchPage';


class JobSearchContainer extends Component{
 
  handleClick(){
    console.log('details here')

    browserHistory.push('/jobdetails')
  }

  render(){
    return(
      <JobSearchPage jobs={this.props.jobs}
                     onClick={this.handleClick} />
    )
  }
}

function mapStateToProps(state){
  return { jobs: state.jobs }
}

export default connect(mapStateToProps)(JobSearchContainer);

