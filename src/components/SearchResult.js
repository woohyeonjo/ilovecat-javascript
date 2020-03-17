import Item from './Item.js';

export default class SearchResult {

    constructor($target, data) {
        this.$target = $target;
        this.data = data;

        this.render();
    }

    render() {
        const bottom = document.createElement('div');
        bottom.className = 'bottom';

        const itemGroupWrapper = document.createElement('div');
        itemGroupWrapper.className = 'wrapper';

        const itemGroup = document.createElement('div');
        itemGroup.className = 'item-group';

        this.data.forEach(cat => {
            const item = new Item(this.$target, cat);
            itemGroup.appendChild(item);
        });
        
        itemGroupWrapper.appendChild(itemGroup);
        bottom.appendChild(itemGroupWrapper);
        this.$target.appendChild(bottom);
    }
}