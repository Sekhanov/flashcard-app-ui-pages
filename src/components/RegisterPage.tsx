import {RegisterForm} from './RegisterForm';
import {Box} from '@mui/material';

/**
 * Страница регистрации пользователя.
 *
 * Отображает форму регистрации. После успешной регистрации выполняется переход на главную страницу.
 */
export const RegisterPage = () => {


    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <RegisterForm/>
        </Box>
    );
};
