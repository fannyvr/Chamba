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

    this.handleClick = this.handleClick.bind( this );
  }

  handleClick( job ){
    this.props.clickedJob( job );
    browserHistory.push( '/jobdetails' );
  }

  render(){
    if( this.props.db.isWorking ){
      return(
        <div> LOADING.... </div>
      )
    }else{
      return(
        <div>
          <MyPostsPage jobs={ this.props.jobs }
                       onClick={ this.handleClick } 
          />
        </div>
      );
      
    }
  };
};

const mapStateToProps = state => {
  let jobs = state.get( 'jobList' ).toJS();
  let db = state.get( 'db' ).toJS();
  return { jobs, db };
};

const matchDispatchToProps = dispatch => 
  bindActionCreators( { clickedJob: clickedJob }, dispatch );

export default connect( mapStateToProps, matchDispatchToProps )( MyPostsContainer );
