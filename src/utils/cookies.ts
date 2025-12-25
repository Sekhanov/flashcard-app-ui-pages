import Cookies from 'js-cookie';

export const getFromCookie = <T>(name: string, id: string): T | null => {
    const coded = Cookies.get(name);
    if (!coded) return null;
    const map = new Map<string, T>(Object.entries(JSON.parse(decodeURIComponent(coded))));
    return map.get(id) ?? null;
};

export const saveToCookie = <T>(name: string, id: string, value: T) => {
    const coded = Cookies.get(name);
    const map = coded
        ? new Map<string, T>(Object.entries(JSON.parse(decodeURIComponent(coded))))
        : new Map<string, T>();
    map.set(id, value);
    Cookies.set(name, encodeURIComponent(JSON.stringify(Object.fromEntries(map))), { expires: 365 });
};