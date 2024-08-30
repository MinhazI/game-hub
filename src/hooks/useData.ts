import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
    count: number,
    results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependensies?: unknown[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        setError("");
        setIsLoading(true);
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then((res) => { setData(res.data.results); setIsLoading(false) })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setIsLoading(false)
            });

        return () => controller.abort();
    }, dependensies ? [...dependensies] : [endpoint]);
    return { data, error, setGenres: setData, setError, isLoading };
}

export default useData