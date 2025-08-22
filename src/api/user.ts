import {httpClient} from "./httpClient.ts";
import {FLASHCARD_SET_URL, USERS_URL} from "../Constants/BaseURL.ts";
import {NewFlashcardSet} from "../types/flashcardSetTypes.ts";
import {UserTypes} from "../types/UserTypes.ts";

export const createUser = async (flashcardSet: NewFlashcardSet) => {
    await httpClient<NewFlashcardSet>(FLASHCARD_SET_URL, {
        method: "POST",
        body: flashcardSet
    });
}

export const getCurrentUser = async () =>
    await httpClient<unknown, UserTypes>(`${USERS_URL}/currentUser`);