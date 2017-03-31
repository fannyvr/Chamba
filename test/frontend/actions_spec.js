import * as types from '../../app/actionTypes/actionTypes';
import * as actions from '../../app/actions/actions';
import { expect } from 'chai'; 

const payload = {
  title:'Need Cook!',
  position: 'Cook',
  salary:'$10',
  category:'Food',
  description:'Position Description Here!',
  contact:'555-555-5555',
  application:'appUrl.com'
};

describe('actions', () => {
  it('should create an action to add a job', () => {
    const action = actions.postJob(payload);
    const expectedAction = { 
      type: types.POST_JOB, 
      payload 
    };

    expect(action).to.deep.equal(expectedAction);
  });

  it('should create an action to set the clicked on job', () => {
    const action = actions.clickedJob(payload);
    const expectedAction = { 
      type: types.CLICKED_JOB, 
      payload
    };

    expect(action).to.deep.equal(expectedAction);
  });
});