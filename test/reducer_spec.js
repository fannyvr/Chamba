import { List, Map, fromJS } from 'immutable';
import {expect} from 'chai';
import {jobList} from '../app/reducers/reducers';

describe('reducer', () => {

  it('handles POST_JOB', () => {
    const initState = List();
    const action = { 
      type: 'POST_JOB', 
      payload: {
        title:'Need Cook!',
        position: 'Cook',
        salary:'$10',
        category:'Food',
        description:'Position Description Here!',
        contact:'555-555-5555',
        application:'appUrl.com'
      } 
    };
    const nextState = jobList(initState, action);
  
    nextState.should.equal(fromJS(
      [{
        title:'Need Cook!',
        position: 'Cook',
        salary:'$10',
        category:'Food',
        description:'Position Description Here!',
        contact:'555-555-5555',
        application:'appUrl.com'
      }]
    ));
  });
});






