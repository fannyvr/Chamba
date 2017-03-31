import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai'; 

import * as types from '../../app/actionTypes/actionTypes';
import * as reducer from '../../app/reducers/reducers';

const payload = {
  title:'Need Cook!',
  position: 'Cook',
  salary:'$10',
  category:'Food',
  description:'Position Description Here!',
  contact:'555-555-5555',
  application:'appUrl.com'
};

describe('reducer', () => {
  it('adds a new job: POST_JOB ', () => {
    const initState = List();
    const action = { type: types.POST_JOB, payload: payload };
    const nextState = reducer.jobList(initState, action);
    
    expect(nextState).to.equal(fromJS([ payload ]));
  });

  it('sets the clicked on job: CLICKED_JOB ', () => {
    const initState = Map();
    const action = { type: types.CLICKED_JOB, payload: payload };
    const nextState = reducer.activeJob(initState, action);

    expect(nextState).to.equal(fromJS( payload ));
  });
});
