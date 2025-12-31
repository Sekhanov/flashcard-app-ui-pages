import {ReactNode, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../hooks/UseAuth';
import { isTokenExpired } from '../utils/authUtils';

/**
 * Компонент-защита маршрута.
 *
 * Позволяет отрисовывать дочерние компоненты только при наличии токена авторизации.
 * Если токен отсутствует, перенаправляет на страницу входа.
 *
 * @param children Компоненты, доступные только авторизованным пользователям.
 */
export const PrivateRoute = ({children}: { children: ReactNode }) => {
    const {token, loading, logout: logout} = useAuth();

    const isUnauthorized = !token || isTokenExpired(token);

    useEffect(() => {
        if (!loading && isUnauthorized) {
            logout();
        }
    }, [loading, isUnauthorized, logout]);

    return (
        <>
            {loading && <div>Загрузка...</div>}
            {!loading && isUnauthorized && <Navigate to="/login" replace />}
            {!loading && !isUnauthorized && children}
        </>
    );
};