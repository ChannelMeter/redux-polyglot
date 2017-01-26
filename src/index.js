import { PropTypes } from 'react';

const PropType = PropTypes.shape({
    t: PropTypes.func.isRequired,
    tc: PropTypes.func.isRequired,
    tu: PropTypes.func.isRequired,
    tm: PropTypes.func.isRequired,
});

export * from './middleware';
export * from './actions';
export * from './constants';
export * from './reducer';
export * from './selectors';
export { PropType };
