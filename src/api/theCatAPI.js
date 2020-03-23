/* eslint-disable no-useless-catch */
const API_ENDPOINT = 'https://api.thecatapi.com/v1';

const request = async url => {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            throw errorData;
        }
    } catch(e) {
        throw {
            message: e.message,
            status: e.status
        };
    }
};

const api = {
    fetchCats: async keyword => {
        /*
            keyword로 breed를 찾고 각 breed의 id로 이미지를 찾는다.
        */
        try {
            const breeds = await request(`${API_ENDPOINT}/breeds/search?q=${keyword}`);
            const requests = breeds.map(async breed => {
                return await request(`${API_ENDPOINT}/images/search?limit=20&breed_ids=${breed.id}`);
            });
            const responses = await Promise.all(requests);
            const result = Array.prototype.concat.apply([], responses);
            
            return {
                isError: false,
                data: result
            };
        } catch(e) {
            return {
                isError: true,
                data: e
            };
        }
    },
    fetchRandomCats: async () => {
        /*
            랜덤으로 20개의 고양이 사진을 리턴한다.
        */
        try {
            const result = await request(`${API_ENDPOINT}/images/search?limit=20`);
            return {
                isError: false,
                data: result
            };
        } catch(e) {
            return {
                isError: true,
                data: e
            };
        }
    }
};

export { api };