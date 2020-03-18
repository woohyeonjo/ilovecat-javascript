
const API_ENDPOINT = 'https://api.thecatapi.com/v1';

const request = async (url) => {
    try {
        const result = await fetch(url);
        return result.json();
    } catch (e) {
        console.warn(e);
    }
};

const api = {
    fetchImage: keyword => {
        return request(`${API_ENDPOINT}/breeds/search?q=${keyword}`);
    },
    fetchImageAll: () => {
        return request(`${API_ENDPOINT}/images/search?limit=50`);
    }
};

export { api };