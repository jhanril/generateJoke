import {jokeSourceUrl} from './const';

export const getJoke = () => {
    return fetch(jokeSourceUrl);
}