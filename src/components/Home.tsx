import {Link, useNavigate} from 'react-router-dom';
import {useGetLastSeenFlashcardSet} from "../hooks/UseFlashcardFetch.ts";

/**
 * Компонент главной страницы.
 *
 * Отображает недавно просмотренные наборы карточек.
 * Позволяет перейти к созданию нового набора.
 */
export const Home = () => {
    const navigate = useNavigate();
    const {data, loading} = useGetLastSeenFlashcardSet();

    return (
        <div>
            <h2>Recent</h2>
            {loading ? (
                <p>Вы пока не открывали ни одного набора карточек.</p>
            ) : (
                <ul>
                    {data?.map(set => (
                        <li key={set.flashcardSetId}>
                            <Link to={`/flashcard-set/${set.flashcardSetId}`}>
                                {set.flashcardSetName}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={() => navigate('/add-flashcard-set')} style={{marginTop: 20}}>
                Добавить новый набор
            </button>
        </div>
    );
};
