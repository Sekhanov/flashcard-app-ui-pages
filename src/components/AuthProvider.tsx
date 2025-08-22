import {ReactNode, useEffect, useState} from 'react';
import {AuthContext} from '../hooks/UseAuth';
import {setTokenSetter} from '../utils/tokenUpdater.ts';
import {User} from "../types/authTypes.ts";

/**
 * Провайдер контекста авторизации.
 *
 * Оборачивает приложение и предоставляет информацию о пользователе,
 * токене и методы входа/выхода через `AuthContext`.
 *
 * Загружает данные из `localStorage` при инициализации.
 *
 */
export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    /**
     * Загружает токен и пользователя из `localStorage` при монтировании компонента.
     */
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        setToken(storedToken);
        try {
            setUser(storedUser ? JSON.parse(storedUser) : null);
        } catch {
            setUser(null);
        }
        setLoading(false);
        setTokenSetter(setToken);
    }, []);

    /**
     * Обновляет токен: сохраняет в `localStorage` и обновляет состояние.
     *
     * @param newToken JWT-токен
     */
    const updateToken = (newToken: string) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    /**
     * Обновляет пользователя: сохраняет в `localStorage` и обновляет состояние.
     *
     * @param newUser Объект пользователя
     */
    const updateUser = (newUser: User) => {
        localStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser);
    };

    /**
     * Выполняет выход: удаляет токен и пользователя из `localStorage` и сбрасывает состояние.
     */
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{token, user, loading, logout, updateToken, updateUser}}>
            {children}
        </AuthContext.Provider>
    );
};
