import SearchBar from './components/SearchBar.js';
import SearchResult from './components/SearchResult.js';
import SearchInfo from './components/SearchInfo.js';
import { api } from './api/theCatAPI.js';

export default class App {
    constructor() {
        console.log("App is created!");
        
        const top = document.createElement('div');
        top.className = 'top';

        const bottom = document.createElement('div');
        bottom.className = 'bottom';
        
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

        const searchResult = new SearchResult(bottom);
        const searchInfo = new SearchInfo(document.body, []);


        document.body.appendChild(top);
        document.body.appendChild(bottom);
    }
}