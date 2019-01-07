import {combineReducers} from 'redux';

const initState = {
    foo: 'bar',
};

const fooReducer = (state = initState.foo, action) => {
    switch (action.type) {
        case 'FOO':
            return action.payload;
        default:
            return state
    }
};

const rootReducer = combineReducers({
    foo: fooReducer,
});

export default rootReducer;