// authState.js
let isLoggedIn = false;

export const setLoginState = (value) => {
    isLoggedIn = value;
};

export const getLoginState = () => {
    return isLoggedIn;
};
