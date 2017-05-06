import { List, Map } from 'immutable';

export const joblist = List();
export const activejob = Map();
export const isauth = Map( { loggedIn: false } );
export const db = Map( { isWorking: false, error: null } );