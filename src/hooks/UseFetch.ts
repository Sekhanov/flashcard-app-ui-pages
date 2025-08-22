import { useState, useEffect, useCallback } from 'react';
import {httpClient} from "../api/httpClient.ts";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface FetchOptions<T> {
    method?: HttpMethod;
    headers?: Record<string, string>;
    body?: T | null;
}

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

export function useFetch<T = unknown, B = unknown>(url: string, options?: FetchOptions<B>): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });

    const fetchData = useCallback(async () => {
        try {
            setState(prev => ({ ...prev, loading: true, error: null }));
            const data: T = await httpClient(url, options);
            setState({ data, loading: false, error: null });
        } catch (error) {
            setState({
                data: null,
                loading: false,
                error: error instanceof Error ? error : new Error('An unknown error occurred'),
            });
        }
    }, [url, options]);

    useEffect(() => {
        fetchData().catch(console.error);
    }, [ fetchData ]);

    return { ...state };
}