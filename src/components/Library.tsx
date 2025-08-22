import {Link} from 'react-router-dom';
import {useAuth} from '../hooks/UseAuth';
import {useGetFlashcardSetsByUserId} from "../hooks/UseFlashcardFetch.ts";

/**
 * Компонент страницы с наборами карточек текущего пользователя.
 *
 * Загружает и отображает список наборов, принадлежащих пользователю.
 */
export const Library = () => {
    const { user } = useAuth();
    const { data } = useGetFlashcardSetsByUserId(user?.id || undefined);

    return (
        <div>
            <h2>Мои наборы</h2>
            <ul>
                {data?.map(set => (
                    <li key={set.id}>
                        <Link to={`/flashcard-set/${set.id}`}>{set.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
