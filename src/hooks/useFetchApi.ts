import { useEffect, useState } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface InternalState<T> {
  url: string;
  data: T | null;
  error: string | null;
}

const responseCache = new Map<string, unknown>();

export function useFetchApi<T>(url: string): FetchState<T> {
  const [state, setState] = useState<InternalState<T>>({
    url,
    data: null,
    error: null,
  });

  const cachedData = responseCache.has(url)
    ? (responseCache.get(url) as T)
    : null;

  useEffect(() => {
    if (responseCache.has(url)) {
      return;
    }

    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: abortController.signal });

        if (!response.ok) {
          throw new Error(
            `Error HTTP ${response.status}: No se pudieron obtener los repositorios.`
          );
        }

        const result = (await response.json()) as T;
        responseCache.set(url, result);
        setState({ url, data: result, error: null });
      } catch (err) {
        if ((err as Error).name === 'AbortError') return;
        setState({
          url,
          data: null,
          error:
            err instanceof Error
              ? err.message
              : 'Error inesperado al conectar con la API de GitHub.',
        });
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  if (cachedData !== null) {
    return { data: cachedData, loading: false, error: null };
  }

  const isCurrentUrl = state.url === url;

  return {
    data: isCurrentUrl ? state.data : null,
    loading: !isCurrentUrl || (state.data === null && state.error === null),
    error: isCurrentUrl ? state.error : null,
  };
}