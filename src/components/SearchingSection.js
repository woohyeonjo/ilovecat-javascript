import { createWrapper } from '../util/wrapper.js';

export default class SearchBar {    
    
    constructor({$target, onSearch, onRandom}) {
        this.onSearch = onSearch;
        this.onRandom = onRandom;
        this.section = document.createElement('section');
        this.section.className = 'searching-section';

        $target.appendChild(this.section);

        this.render();
    }

    searchByKeyword(event) {
        if(event.keyCode == 13){
            const keyword = document.querySelector('.search-box').value;
            this.onSearch(keyword);
        }
    }

    deleteKeyword(){
        const searchBox = document.querySelector('.search-box');
        searchBox.value = '';
    }

    render() {
        const randomBtn = document.createElement('span');
        randomBtn.className = 'random-btn';
        randomBtn.innerText = '🐱';
        
        const searchBox = document.createElement('input');
        searchBox.className = 'search-box';
        searchBox.placeholder = '고양이를 검색하세요.';
        
        randomBtn.addEventListener('click', this.onRandom);
        searchBox.addEventListener('focus', this.deleteKeyword);
        searchBox.addEventListener('keyup', event => { this.searchByKeyword(event); });
        
        this.section.appendChild(randomBtn);
        this.section.appendChild(searchBox);
    }
}
