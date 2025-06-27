import { useState } from 'react';
import { login } from '../api/auth';
import {useAuth} from "../hooks/UseAuth.ts";
import { useNavigate, Link } from 'react-router-dom';
import * as styles from './LoginPage.module.css.ts';

export const LoginPage = () => {
    const [form, setForm] = useState({ login: '', password: '' });
    const { login: saveToken } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await login(form.login, form.password);
            if (res.token) {
                saveToken(res.token);
                navigate('/');
            } else {
                alert(res.errorMessage || 'Ошибка входа');
            }
        } catch {
            alert('Неверный логин или пароль');
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    value={form.login}
                    onChange={(e) => setForm({ ...form, login: e.target.value })}
                    placeholder="Login"
                    className={styles.input}
                />
                <input
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="Password"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    Войти
                </button>
                <p className={styles.registerText}>
                    Нет аккаунта?{' '}
                    <Link to="/register" className={styles.registerLink}>
                        Зарегистрироваться
                    </Link>
                </p>
            </form>
        </div>
    );
};
