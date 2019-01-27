import {combineReducers} from 'redux';
import {
    COOKIES_NOTICE_CONFIRM,
    DEREGISTER_LIGHTBOX_IMAGE,
    REGISTER_LIGHTBOX_IMAGE,
    SET_LIGHTBOX_STATE,
    SET_MENU_STATE,
    SET_SERVER_PATHNAME,
    SHOW_NEXT_LIGHTBOX_IMAGE, SHOW_PREV_LIGHTBOX_IMAGE
} from './simpleActions';

const initState = {
    cookiesNotice: {confirmed: true},
    menu: {open: false},
    serverPathname: '',
    lightbox: {
        open: false,
        images: [],
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
            return Object.assign({}, state, {
                open: action.payload.open,
                currentImage: action.payload.currentImage,
            });
        case REGISTER_LIGHTBOX_IMAGE:
            return Object.assign({}, state, {
                images: state.images.concat(action.payload)
            });
        case DEREGISTER_LIGHTBOX_IMAGE:
            return Object.assign({}, state, {
                images: state.images.filter(image => image.url !== action.payload.url)
            });
        case SHOW_NEXT_LIGHTBOX_IMAGE:
            const nextImage = state.images.reduce((acc, image, idx, arr) => {
                if (image.url === state.currentImage) {
                    return idx === arr.length - 1
                        ? arr[0].url
                        : arr[idx + 1].url;
                }
                return acc;
            }, '');
            return Object.assign({}, state, {
                currentImage: nextImage
            });
        case SHOW_PREV_LIGHTBOX_IMAGE:
            const prevImage = state.images.reduce((acc, image, idx, arr) => {
                if (image.url === state.currentImage) {
                    return idx === 0
                        ? arr[arr.length - 1].url
                        : arr[idx - 1].url;
                }
                return acc;
            }, '');
            return Object.assign({}, state, {
                currentImage: prevImage
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