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