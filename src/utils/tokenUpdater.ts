let tokenSetter: ((token: string | null) => void) | null = null;

export function setTokenSetter(fn: (token: string | null) => void) {
    tokenSetter = fn;
}

export function updateToken(token: string | null) {
    if (tokenSetter) {
        tokenSetter(token);
    }
}
export function newTokenFromHeaders(headers: Headers): void {
    const newToken = headers.get('Authorization') || headers.get('authorization');
    if (newToken?.startsWith('Bearer ')) {
        const tokenValue = newToken.substring(7);
        localStorage.setItem('token', tokenValue);
        updateToken(tokenValue);
    }
}