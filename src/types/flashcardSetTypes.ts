export type Card = {
    term: string;
    definition: string;
};

export type FlashcardSet = {
    id?: number;         // optional, если создаем новый
    userId?: number;     // optional, если нужно привязать пользователя
    name: string;
    description: string;
    cards: Card[];
    ownerName?: string;
};

export type LastSeenFlashcardSetDto = {
    flashcardSetId: number;
    flashcardSetName: string;
    openedAt: string;
    ownerName: string;
    cardsCount: number;
};