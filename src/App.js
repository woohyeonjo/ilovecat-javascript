import SearchBar from './components/SearchBar.js';
import SearchResult from './components/SearchResult.js';
import { api } from './api/theCatAPI.js';

export default class App {
    constructor() {
        console.log("App is created!");
        
        const body = document.body;

        const searchBar = new SearchBar(body);
        const searchResult = new SearchResult(body, []);

        const data = api.fetchImage("no");
        const data2 = api.fetchImageAll();

        data.then(cats => {
            console.log(cats);
        });

        data2.then(cats => {
            console.log(cats);
        });
    }


}