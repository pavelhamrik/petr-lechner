import {combineReducers} from 'redux';
import {COOKIES_NOTICE_CONFIRM} from './simpleActions';

const initState = {
    cookiesNotice: {confirmed: true},
};

const cookiesNoticeReducer = (state = initState.cookiesNotice, action) => {
    switch (action.type) {
        case COOKIES_NOTICE_CONFIRM:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cookiesNotice: cookiesNoticeReducer,
});

export default rootReducer;