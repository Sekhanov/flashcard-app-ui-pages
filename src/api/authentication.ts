import {httpClient} from "./httpClient.ts";
import {AuthUser, User} from "../types/authTypes.ts";
import {AUTH_URL} from "../Constants/BaseURL.ts";

export const login = async (authUser: AuthUser): Promise<string> => {
    return await httpClient<AuthUser, string>(`${AUTH_URL}/login`, {
        method: "POST",
        body: authUser,
        requireAuth: false
    });
}

export const register = async (authUser: AuthUser): Promise<User> => {
    return await httpClient<AuthUser, User>(`${AUTH_URL}/registration`, {
        method: "POST",
        body: authUser,
        requireAuth: false
    });
}