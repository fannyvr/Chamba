import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';

import Nav from '../components/nav/Nav';
import { logOutSuccess } from '../actions/actions';

class NavContainer extends Component{
  constructor(props){
    super(props);
    
    this.handleToSearch = this.handleToSearch.bind(this);
    this.handleToPost = this.handleToPost.bind(this);
    this.handleToMyPosts = this.handleToMyPosts.bind(this);
    this.handleToLogIn = this.handleToLogIn.bind(this);
    this.handleToLogOut = this.handleToLogOut.bind(this);
  }

  handleToSearch(){
    browserHistory.push('/searchjobs');
  }

  handleToPost(){
    browserHistory.push('/postjobs');
  }

  handleToMyPosts(){
    browserHistory.push('/myposts');
  }

  handleToLogIn(){
    browserHistory.push('/login');
  }

  handleToLogOut(){
    this.props.logOutSuccess({ loggedIn: false });
    browserHistory.push('/logout');
  }

  render(){
    return(
      <div>
        <Nav toSearch={this.handleToSearch}
             toPost={this.handleToPost} 
             toMyPosts={this.handleToMyPosts}
             toLogIn={this.handleToLogIn}
             toLogOut={this.handleToLogOut}
             loggedIn={this.props.isAuth.loggedIn}
        />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  let isAuth = state.get('isAuth').toJS();
  return { isAuth };
};

const matchDispatchToProps = (dispatch) =>
  bindActionCreators({ logOutSuccess : logOutSuccess }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(NavContainer);