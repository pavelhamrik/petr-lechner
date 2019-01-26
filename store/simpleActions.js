export const COOKIES_NOTICE_CONFIRM = 'COOKIES_NOTICE_CONFIRM';

export function cookiesNoticeConfirm(payload) {
    return {
        type: COOKIES_NOTICE_CONFIRM,
        payload,
    };
}

export const SET_MENU_STATE = 'SET_MENU_STATE';

export function setMenuState(payload) {
    return {
        type: SET_MENU_STATE,
        payload,
    };
}

export const SET_SERVER_PATHNAME = 'SET_SERVER_PATHNAME';

export function setServerPathname(payload) {
    return {
        type: SET_SERVER_PATHNAME,
        payload,
    };
}

export const SET_LIGHTBOX_STATE = 'SET_LIGHTBOX_STATE';

export function setLightboxState(payload) {
    return {
        type: SET_LIGHTBOX_STATE,
        payload,
    };
}

export const REGISTER_LIGHTBOX_IMAGE = 'REGISTER_LIGHTBOX_IMAGE';

export function registerLightboxImage(payload) {
    return {
        type: REGISTER_LIGHTBOX_IMAGE,
        payload,
    };
}

export const DEREGISTER_LIGHTBOX_IMAGE = 'DEREGISTER_LIGHTBOX_IMAGE';

export function deregisterLightboxImage(payload) {
    return {
        type: DEREGISTER_LIGHTBOX_IMAGE,
        payload,
    };
}

export const SHOW_NEXT_LIGHTBOX_IMAGE = 'SHOW_NEXT_LIGHTBOX_IMAGE';

export function showNextLightboxImage() {
    return {
        type: SHOW_NEXT_LIGHTBOX_IMAGE,
    };
}

export const SHOW_PREV_LIGHTBOX_IMAGE = 'SHOW_PREV_LIGHTBOX_IMAGE';

export function showPrevLightboxImage() {
    return {
        type: SHOW_PREV_LIGHTBOX_IMAGE,
    };
}