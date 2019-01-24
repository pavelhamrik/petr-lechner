export const COOKIES_NOTICE_CONFIRM = 'COOKIES_NOTICE_CONFIRM';

export function cookiesNoticeConfirm(payload) {
    return {
        type: COOKIES_NOTICE_CONFIRM,
        payload,
    };
}