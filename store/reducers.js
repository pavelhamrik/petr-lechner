import {combineReducers} from 'redux';
import {COOKIES_NOTICE_CONFIRM, SET_MENU_STATE} from './simpleActions';

const initState = {
    cookiesNotice: {confirmed: true},
    menu: {open: false},
};

const cookiesNoticeReducer = (state = initState.cookiesNotice, action) => {
    switch (action.type) {
        case COOKIES_NOTICE_CONFIRM:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

const menuReducer = (state = initState.menu, action) => {
    switch (action.type) {
        case SET_MENU_STATE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cookiesNotice: cookiesNoticeReducer,
    menu: menuReducer,
});

export default rootReducer;