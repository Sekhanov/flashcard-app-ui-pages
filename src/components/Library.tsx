import { useAuth } from '../hooks/UseAuth';
import { useGetFlashcardSetsByUserId } from "../hooks/UseFlashcardFetch";
import { FlashcardSetSelectCard } from "./FlashcardSetSelectCard.tsx";
import type { FlashcardSet } from "../types/flashcardSetTypes";
import { useTranslation } from 'react-i18next';

/**
 * Компонент страницы с наборами карточек текущего пользователя.
 *
 * Загружает и отображает список наборов, принадлежащих пользователю.
 */
export const Library = () => {
    const { t } = useTranslation();
    const { user } = useAuth();
    const { data, loading } = useGetFlashcardSetsByUserId(user?.id);

    return (
        <div>
            <h2>{t('library.mySets')}</h2>

            {loading && <p>{t('library.loading')}</p>}

            {!loading && (!data || data.length === 0) && (
                <p>{t('library.noSets')}</p>
            )}

            {!loading && data && (
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    {data
                        .filter(
                            (set): set is FlashcardSet & { id: number } =>
                                set.id !== undefined
                        )
                        .map(set => (
                            <FlashcardSetSelectCard
                                key={set.id}
                                id={set.id}
                                name={set.name}
                                cardsCount={set.cards.length}
                                ownerName={set.ownerName}
                            />
                        ))}
                </div>
            )}
        </div>
    );
};
