import {useState} from "react";

export const useFetching = (callback: () => void): [() => void, boolean, string] => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchPosts = async () => {
        try {
            setError('');
            setIsLoading(true);
            await callback();
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetchPosts, isLoading, error];
}