import { useEffect, useState } from 'react';
import { fetchWordLists, WordList } from '../api/wordLists';
import {useAuth} from "../hooks/UseAuth.ts";
import * as styles from './HomePage.module.css.ts';

export const HomePage = () => {
    const { logout } = useAuth();
    const [wordLists, setWordLists] = useState<WordList[]>([]);

    useEffect(() => {
        const loadWordLists = async () => {
            const token = localStorage.getItem('token') || '';
            const data = await fetchWordLists(token);
            setWordLists(data);
        };

        loadWordLists();
    }, []);

    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                Sidebar
            </aside>

            <div className={styles.main}>
                <header className={styles.header}>
                    <h3>Header</h3>
                    <button onClick={logout}>Выйти</button>
                </header>

                <main className={styles.content}>
                    <h2>Ваши списки слов:</h2>
                    <ul>
                        {wordLists.map(list => (
                            <li key={list.id}>{list.name}</li>
                        ))}
                    </ul>
                </main>
            </div>
        </div>
    );
};
