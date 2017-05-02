import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';

import Nav from '../components/nav/Nav';
import { logout, getUser, login } from '../actions/actions';
import { ifToken, noToken, tokenExpired } from '../utils/middleware';

class NavContainer extends Component{
  constructor( props ){
    super( props );
    
    this.handleToSearch = this.handleToSearch.bind( this );
    this.handleToPost = this.handleToPost.bind( this );
    this.handleToMyPosts = this.handleToMyPosts.bind( this );
    this.handleToLogIn = this.handleToLogIn.bind( this );
    this.handleToLogOut = this.handleToLogOut.bind( this );
  }

  handleToSearch(){
    browserHistory.push( '/searchjobs' );
  }

  handleToPost(){
    if( localStorage.getItem( 'id_token' ) ){
      browserHistory.push( '/postjobs' );
    }else{
      this.handleToLogIn();
    }
  }

  handleToMyPosts(){
    browserHistory.push( '/myposts' );
  }

  handleToLogIn(){
    browserHistory.push( '/login' );
  }

  handleToLogOut(){
    this.props.logout();
    browserHistory.push( '/logout' );
  }

  componentWillMount(){
    const { loggedIn } = this.props.isAuth;

    if( noToken( loggedIn ) ){
      this.props.login();
    }
    if( ifToken( loggedIn ) ){
      if( tokenExpired() ){
        this.props.logout();
      }else{
        this.props.getUser( { userId: localStorage.getItem( 'id_token' ) } );
      }
    }
  }

  render(){
    return(
      <div>
        <Nav toSearch={ this.handleToSearch }
             toPost={ this.handleToPost } 
             toMyPosts={ this.handleToMyPosts }
             toLogIn={ this.handleToLogIn }
             toLogOut={ this.handleToLogOut }
             loggedIn={ this.props.isAuth.loggedIn }
        />
      </div>
    )
  }
};

const mapStateToProps = state => {
  let isAuth = state.get( 'isAuth' ).toJS();
  return { isAuth };
};

const matchDispatchToProps = dispatch =>
  bindActionCreators( { login: login, logout : logout, getUser: getUser }, dispatch );

export default connect( mapStateToProps, matchDispatchToProps )( NavContainer );