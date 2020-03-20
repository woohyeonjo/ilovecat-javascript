import SearchingSection from './components/SearchingSection.js';
import ResultsSection from './components/ResultsSection.js';
import DetailModal from './components/DetailModal.js';
import Loading from './components/Loading.js';
import { api } from './api/theCatAPI.js';

export default class App {
    constructor($target) {        
        const searchingSection = new SearchingSection({
            $target,
            onSearch: keyword => {
                loading.toggleSpinner();
                api.fetchCats(keyword).then(data => { 
                    loading.toggleSpinner();
                    resultsSection.setState(data); });
            },
            onRandom: () => {
                loading.toggleSpinner();
                api.fetchRandomCats().then(data => { 
                    loading.toggleSpinner();
                    resultsSection.setState(data); });
            }
        });

        const resultsSection = new ResultsSection({
            $target,
            onClick: data => {
                detailModal.setState(data);
            }
        });

        const detailModal = new DetailModal({
            $target
        });

        const loading = new Loading({
            $target
        });

        this.focusOnSearchBox();
    }
    
    focusOnSearchBox() {
        const searchBox = document.querySelector('.search-box');
        searchBox.focus();
    }
}
