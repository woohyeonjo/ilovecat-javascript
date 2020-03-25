import SearchingSection from './components/SearchingSection.js';
import ResultsSection from './components/ResultsSection.js';
import DetailModal from './components/DetailModal.js';
import Loading from './components/Loading.js';
import Error from './components/Error.js';

import { api } from './api/theCatAPI.js';
import { getItem, setItem } from './util/sessionStorage.js';

export default class App {
    constructor($target) {
        const keywords = getItem('keywords');
        const data = getItem('data');
        
        const searchingSection = new SearchingSection({
            $target,
            keywords,
            onSearch: async keyword => {
                loading.toggleSpinner();

                const response = await api.fetchCats(keyword);
                if(!response.isError){
                    setItem('data', response.data);
                    resultsSection.setState(response.data);
                    loading.toggleSpinner();
                } else {
                    error.setState(response.data);
                }
            },
            onRandom: async () => {
                loading.toggleSpinner();
                
                const response = await api.fetchRandomCats();
                if(!response.isError){
                    setItem('data', response.data);
                    resultsSection.setState(response.data);
                    loading.toggleSpinner();
                } else {
                    error.setState(response.data);
                }
            }
        });

        const resultsSection = new ResultsSection({
            $target,
            data,
            onClick: data => {
                detailModal.setState(data);
            },
            onScroll: async () => {
                loading.toggleSpinner();

                const response = await api.fetchRandomCats();
                if(!response.isError){
                    const beforeData = getItem('data');
                    const nextData = beforeData.concat(response.data);

                    setItem('data', nextData);
                    resultsSection.setState(nextData);
                    loading.toggleSpinner();
                } else {
                    error.setState(response.data);
                }
            }
        });

        const detailModal = new DetailModal({
            $target
        });

        const loading = new Loading({
            $target
        });

        const error = new Error({
            $target
        });

        const darkmodeBtn = document.createElement('span');
        darkmodeBtn.className = 'darkmode-btn';
        darkmodeBtn.innerText = '🌕';

        $target.appendChild(darkmodeBtn);
    }
}
