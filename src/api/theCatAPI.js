
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
    fetchCats: async keyword => {
        const breeds = (await api.searchBreedByName(keyword)).map(breed => { return breed.id; });
        const requests = breeds.map(id => { return request(`${API_ENDPOINT}/images/search?limit=50&breed_ids=${id}`); });

        return Promise.all(requests).then(responses => {
            let result = [];
            responses.forEach(response => { result = result.concat(response); });
            return result;
        });
    },
    fetchRandomCats: () => {
        return request(`${API_ENDPOINT}/images/search?limit=50`);
    },
    searchBreedByName: keyword => {
        return request(`${API_ENDPOINT}/breeds/search?q=${keyword}`);
    }
};

export { api };