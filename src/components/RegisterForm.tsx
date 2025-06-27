import {useState} from 'react';
import {createUser} from '../api/user'; // проверь, что путь правильный
import {login} from '../api/auth'; // импорт функции логина
import type {CreateUserDto} from '../types/User';
import {useAuth} from "../hooks/UseAuth.ts";
import axios from 'axios';
import {Box, Button, TextField, Typography, Alert, Stack} from '@mui/material';

interface RegisterFormProps {
    onSuccess?: () => void; // например, переход на главную страницу
}

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
    const [form, setForm] = useState<CreateUserDto>({
        name: '',
        surname: '',
        login: '',
        password: '',
    });

    const [error, setError] = useState('');
    const {login: saveToken} = useAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(''); // сбрасываем ошибку перед отправкой
        try {
            // 1. Создаем пользователя
            await createUser(form);

            // 2. Логинимся с тем же логином и паролем
            const res = await login(form.login, form.password);

            if (res.token) {
                saveToken(res.token);  // сохраняем токен в контекст и localStorage
                onSuccess?.();         // вызываем callback (например, переход)
            } else {
                setError(res.errorMessage || 'Ошибка при входе после регистрации');
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || 'Ошибка при регистрации');
            } else if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Неизвестная ошибка');
            }
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
            <Stack spacing={2}>
                <Typography variant="h5" align="center">
                    Регистрация
                </Typography>

                <TextField
                    label="Имя"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    fullWidth
                />
                <TextField
                    label="Фамилия"
                    name="surname"
                    value={form.surname}
                    onChange={handleChange}
                    required
                    fullWidth
                />
                <TextField
                    label="Логин"
                    name="login"
                    value={form.login}
                    onChange={handleChange}
                    required
                    fullWidth
                />
                <TextField
                    label="Пароль"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    fullWidth
                />

                {error && <Alert severity="error">{error}</Alert>}

                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Зарегистрироваться
                </Button>
            </Stack>
        </Box>
    );
}
export default RegisterForm;
