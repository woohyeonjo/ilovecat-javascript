export default class Item {
    constructor($target, data) {
        this.$target = $target;
        this.data = data;

        this.render();
    }

    render() {
        const url = this.data.url;
        const {temperament, origin} = this.data.breeds[0];

        const itemWrapper = document.createElement('div');
        itemWrapper.className = 'wrapper';

        const item = document.createElement('div');
        item.className = 'item';

        const itemImg = document.createElement('img');
        itemImg.className = 'item-img';
        itemImg.src = url;

        const itemDescription = document.createElement('div');
        itemDescription.className = 'item-description';

        const itemTemper = document.createElement('p');
        itemTemper.className = 'item-temper';
        itemTemper.innerText = temperament;

        const itemOrigin = document.createElement('p');
        itemOrigin.className = 'item-origin';
        itemOrigin.innerText = origin;
        
        itemDescription.appendChild(itemTemper);
        itemDescription.appendChild(itemOrigin);
        item.appendChild(itemImg);
        item.appendChild(itemDescription);
        itemWrapper.appendChild(item);
        this.$target.appendChild(itemWrapper);
    }
}