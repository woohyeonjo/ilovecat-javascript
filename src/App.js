import SearchBar from './components/SearchBar.js';
import SearchResult from './components/SearchResult.js';
import SearchInfo from './components/SearchInfo.js';
import { api } from './api/theCatAPI.js';

export default class App {
    constructor() {        
        const top = document.createElement('div');
        top.className = 'top';

        const bottom = document.createElement('div');
        bottom.className = 'bottom';

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.classList.add('hidden');
        
        const searchBar = new SearchBar(top,
            keyword => {
                api.fetchImage(keyword).then(data => {
                    searchResult.updateData(data);
                });
            },
            () => {
                api.fetchImageAll().then(data => {
                    searchResult.updateData(data);
                });
            }
        );

        const searchResult = new SearchResult(bottom,
            target => {
                const modal = document.querySelector('.modal');
                searchInfo.updateData(target.data);
                modal.classList.toggle('hidden');
            }
        );

        const searchInfo = new SearchInfo(modal);

        document.body.appendChild(top);
        document.body.appendChild(bottom);
        document.body.appendChild(modal);
    }
}