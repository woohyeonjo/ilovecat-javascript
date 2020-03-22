import SearchingSection from './components/SearchingSection.js';
import ResultsSection from './components/ResultsSection.js';
import DetailModal from './components/DetailModal.js';
import Loading from './components/Loading.js';
import { api } from './api/theCatAPI.js';
import { getItem, setItem } from './util/sessionStorage.js';

export default class App {
    constructor($target) {
        const keywords = getItem('keywords');
        const data = getItem('data');
        
        const searchingSection = new SearchingSection({
            $target,
            keywords,
            onSearch: keyword => {
                loading.toggleSpinner();
                api.fetchCats(keyword).then(data => { 
                    loading.toggleSpinner();
                    setItem('data', data);
                    resultsSection.setState(data); });
            },
            onRandom: () => {
                loading.toggleSpinner();
                api.fetchRandomCats().then(data => { 
                    loading.toggleSpinner();
                    setItem('data', data);
                    resultsSection.setState(data); });
            }
        });

        const resultsSection = new ResultsSection({
            $target,
            data,
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
        this.lazyLoad();
    }

    lazyLoad() {
        document.addEventListener("DOMContentLoaded", function() {
            let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
          
            if ("IntersectionObserver" in window) {
                let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            let lazyImage = entry.target;
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.srcset = lazyImage.dataset.srcset;
                            lazyImage.classList.remove("lazy");
                            lazyImageObserver.unobserve(lazyImage);
                        }
                    });
                });
          
                lazyImages.forEach(function(lazyImage) {
                    lazyImageObserver.observe(lazyImage);
                });
            } else {
                // Possibly fall back to a more compatible method here
            }
        });
    }
    
    focusOnSearchBox() {
        const searchBox = document.querySelector('.search-box');
        searchBox.focus();
    }
}
