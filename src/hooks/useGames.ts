import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

interface GameInterface {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        setError("");
        setIsLoading(true);
        apiClient
            .get<GameInterface>("/games", { signal: controller.signal })
            .then((res) => { setGames(res.data.results); setIsLoading(false) })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setIsLoading(false)
            });

        return () => controller.abort();
    }, []);
    return { games, error, setGames, setError, isLoading };
}

export default useGames;