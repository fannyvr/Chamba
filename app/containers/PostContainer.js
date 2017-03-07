import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostJobsPage from '../components/post/PostJobsPage';
import { postJob } from '../actions/actions';


class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      category: '',
      salary: '',
      position: '',
      description: '',
      contact: '',
      application: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  clearForm(event){
    event.preventDefault();
    
    for(var key in this.state){
      this.setState({ [key]: '' });
    }
  }

  handleEnter(event){
    this.props.dispatch(postJob(this.state));
    this.clearForm(event);
  }

  handleChange(event){ 
    const value = event.target.value;
    const name = event.target.name;
    this.setState( { [name]: value } );
  }

  handleCancel(event){
    this.clearForm(event);
  }

  render(){
    return (
      <div> 
        <PostJobsPage onChange={this.handleChange} 
                      onEnter={this.handleEnter}
                      onCancel={this.handleCancel}
                      title={this.state.title}
                      category={this.state.category}
                      salary={this.state.salary}
                      position={this.state.position}
                      description={this.state.description}
                      contact={this.state.contact}
                      application={this.state.application}              
                      />
      </div>
    );
  }
};

function mapStateToProps(state){
  return { jobs : state.jobs };
};

export default connect(mapStateToProps)(PostContainer);




