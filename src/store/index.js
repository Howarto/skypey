import reducer from '../reducers';
import { createStore } from 'redux';
import { contacts } from '../tests/static-data';

export const store = createStore(reducer, { contacts });