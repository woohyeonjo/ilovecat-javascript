import Item from './Item.js';

export default class SearchResult {

    constructor($target, onClick) {
        this.$target = $target;
        this.onClick = onClick;
        this.data = null;

        this.render();
    }

    updateData(data) {
        this.data = data;
        this.render();
    }

    render() {
        if(this.data){
            this.$target.innerHTML = '';
    
            const itemGroupWrapper = document.createElement('div');
            itemGroupWrapper.className = 'wrapper';
    
            const itemGroup = document.createElement('div');
            itemGroup.className = 'item-group';
    
            this.data.map(cat => {
                new Item(itemGroup, cat, this.onClick);
            });
            
            itemGroupWrapper.appendChild(itemGroup);
            this.$target.appendChild(itemGroupWrapper);
        }
    }
}
