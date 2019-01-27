import {combineReducers} from 'redux';
import {
    COOKIES_NOTICE_CONFIRM,
    DEREGISTER_LIGHTBOX_IMAGE, SET_LIGHTBOX_IMAGE_LOAD_STATE,
    REGISTER_LIGHTBOX_IMAGE,
    SET_LIGHTBOX_STATE,
    SET_MENU_STATE,
    SET_SERVER_PATHNAME,
    SHOW_NEXT_LIGHTBOX_IMAGE, SHOW_PREV_LIGHTBOX_IMAGE
} from './simpleActions';
import {IMAGE_LOADING_STATES, LIGHTBOX_IMAGE_DIRECTIONS} from '../constants/constants';

const initState = {
    cookiesNotice: {confirmed: true},
    menu: {open: false},
    serverPathname: '',
    lightbox: {
        open: false,
        images: [],
        currentImgIdx: -1,
        imageDirection: LIGHTBOX_IMAGE_DIRECTIONS.none,
    },
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

const serverPathnameReducer = (state = initState.serverPathname, action) => {
    switch (action.type) {
        case SET_SERVER_PATHNAME:
            return action.payload;
        default:
            return state;
    }
};

const lightboxReducer = (state = initState.lightbox, action) => {
    switch (action.type) {
        case SET_LIGHTBOX_STATE:
            const setDirection = typeof action.payload.imageDirection === 'undefined'
                ? LIGHTBOX_IMAGE_DIRECTIONS.none
                : action.payload.imageDirection;
            return Object.assign({}, state, {
                open: action.payload.open,
                currentImgIdx: action.payload.currentImgIdx,
                imageDirection: setDirection,
            });
        case REGISTER_LIGHTBOX_IMAGE:
            const image = action.payload.state
                ? action.payload
                : Object.assign({}, action.payload, {state: IMAGE_LOADING_STATES.notLoaded});
            return Object.assign({}, state, {
                images: state.images.concat(image)
            });
        case DEREGISTER_LIGHTBOX_IMAGE:
            return Object.assign({}, state, {
                images: state.images.filter(image => image.url !== action.payload.url)
            });
        case SHOW_NEXT_LIGHTBOX_IMAGE:
            return Object.assign({}, state, {
                currentImgIdx: state.images.length - 1 === state.currentImgIdx
                    ? 0
                    : state.currentImgIdx + 1,
                imageDirection: LIGHTBOX_IMAGE_DIRECTIONS.right
            });
        case SHOW_PREV_LIGHTBOX_IMAGE:
            return Object.assign({}, state, {
                currentImgIdx: state.currentImgIdx === 0
                    ? state.images.length - 1
                    : state.currentImgIdx - 1,
                imageDirection: LIGHTBOX_IMAGE_DIRECTIONS.left
            });
        case SET_LIGHTBOX_IMAGE_LOAD_STATE:
            return Object.assign({}, state, {
                images: state.images.map((image, idx) => (
                    idx === action.payload.idx
                        ? Object.assign({}, image, {state: action.payload.state})
                        : image
                ))
            });
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cookiesNotice: cookiesNoticeReducer,
    menu: menuReducer,
    serverPathname: serverPathnameReducer,
    lightbox: lightboxReducer,
});

export default rootReducer;