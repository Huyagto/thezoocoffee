const ONE_DAY =
    24 * 60 * 60 * 1000;

const THIRTY_DAYS =
    30 * ONE_DAY;

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure:
        process.env.NODE_ENV ===
        'production',
    sameSite: 'strict'
};

const setAuthCookies = (
    res,
    accessToken,
    refreshToken
) => {
    res.cookie(
        'accessToken',
        accessToken,
        {
            ...COOKIE_OPTIONS,
            maxAge: ONE_DAY
        }
    );

    res.cookie(
        'refreshToken',
        refreshToken,
        {
            ...COOKIE_OPTIONS,
            maxAge:
                THIRTY_DAYS
        }
    );

    res.cookie('logged', 1, {
        secure:
            process.env.NODE_ENV ===
            'production',
        sameSite: 'strict',
        maxAge:
            THIRTY_DAYS
    });
};

const clearAuthCookies = (res) => {
    [
        'accessToken',
        'refreshToken',
        'logged'
    ].forEach((cookieName) =>
        res.clearCookie(cookieName)
    );
};

module.exports = {
    setAuthCookies,
    clearAuthCookies
};