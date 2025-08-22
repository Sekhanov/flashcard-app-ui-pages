import {ReactNode} from 'react';
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

    if (loading) return <div>Загрузка...</div>;
    if (!token || isTokenExpired(token)) {
        logout();  // сбросить данные авторизации
        return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
};
