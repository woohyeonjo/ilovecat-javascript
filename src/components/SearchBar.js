export default class SearchBar {    

    constructor($target) {
        this.$target = $target;
        this.render();
    }

    render() {
        const top = document.createElement('div');
        top.className = 'top';

        const wrapper = document.createElement('div');
        wrapper.className = 'wrapper';

        const searchBox = document.createElement('input');
        searchBox.className = 'search-box';
        searchBox.placeholder = '고양이를 검색하세요.';
        
        wrapper.appendChild(searchBox);
        top.appendChild(wrapper);

        this.$target.appendChild(top);
    }
}