export default class SearchBar {    

    constructor($target, onSearch) {
        this.$target = $target;
        this.onSearch = onSearch;
        this.render();
    }

    render() {
        this.$target.innerHTML = '';

        const wrapper = document.createElement('div');
        wrapper.className = 'wrapper';

        const searchBox = document.createElement('input');
        searchBox.className = 'search-box';
        searchBox.placeholder = '고양이를 검색하세요.';

        searchBox.addEventListener('keyup', e => {
            if(e.keyCode == 13){
                const keyword = searchBox.value;
                this.onSearch(keyword);
            }
        });
        
        wrapper.appendChild(searchBox);
        this.$target.appendChild(wrapper);
    }
}