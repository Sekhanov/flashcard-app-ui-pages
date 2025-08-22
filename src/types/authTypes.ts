/**
 * Тип, описывающий объект пользователя.
 */
export type User = {
    /** Уникальный идентификатор пользователя */
    id: number;
    /** Имя пользователя */
    name: string;
    surname: string;
    login: string;
};

export type AuthUser = {
    login: string;
    password: string;
}

/**
 * Тип, описывающий данные и методы, предоставляемые через AuthContext.
 */
export type AuthContextType = {
    /** JWT-токен пользователя, если он авторизован */
    token: string | null;

    /** Информация о текущем пользователе */
    user: User | null;

    /** Флаг загрузки данных (например, при инициализации сессии) */
    loading: boolean;

    updateUser: (user: User) => void;
    updateToken: (token: string) => void;

    /**
     * Выход пользователя. Очищает токен и данные пользователя.
     */
    logout: () => void;
};

/**
 * Ответ от сервера при попытке входа в систему.
 */
export interface AuthResponse {
    /** JWT-токен, если вход выполнен успешно */
    token: string | null;

    /** Сообщение об ошибке, если вход не удался */
    errorMessage: string | null;
}
