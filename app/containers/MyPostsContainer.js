import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import MyPostsPage from '../components/myPosts/MyPostsPage';
import { clickedJob } from '../actions/actions';

class MyPostsContainer extends Component{
  constructor(){
    super();
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(job){
    this.props.clickedJob(job);
    browserHistory.push('/jobdetails');
  }

  render(){
    return(
      <div>
        <MyPostsPage jobs={this.props.jobs}
                     onClick={this.handleClick}/>
      </div>
    );
  };
};

function mapStateToProps(state){
  return {jobs: state.jobs}
};

function matchDispatchToProps(dispatch){
  return bindActionCreators({clickedJob: clickedJob}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MyPostsContainer);