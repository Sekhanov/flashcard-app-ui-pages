import {useFetch} from "./UseFetch.ts";
import {FLASHCARD_SET_URL} from "../Constants/BaseURL.ts";
import type {flashcardSet, LastSeenFlashcardSetDto} from "../types/flashcardSetTypes.ts";

export const useGetFlashcardById = (id: string) => {
    return useFetch<flashcardSet>(`${FLASHCARD_SET_URL}/${id}`);
}

export const useGetLastSeenFlashcardSet = () =>
    useFetch<LastSeenFlashcardSetDto[]>(`${FLASHCARD_SET_URL}/LastSeenSets`);

export const useGetFlashcardSetsByUserId = (userId: number | unknown) =>
    useFetch<flashcardSet[]>(`${FLASHCARD_SET_URL}/owner/${userId}`);