import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url, {
                    signal: abortController.signal,
                });
                const json = await res.json();
                setResponse(json);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                console.error("Error:", error);
            }
        };
        fetchData();
        return () => abortController.abort(); // Abort fetches on unmount
    }, []);

    return {
        response,
        error,
        isLoading,
    };
};

export default useFetch;
