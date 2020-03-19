export default class Item {
    constructor($target, data, onClick) {
        this.$target = $target;
        this.onClick = onClick;
        this.data = data;

        this.render();
    }

    render() {
        const url = this.data.url;
        const {name, origin} = this.data.breeds.length > 0 ? this.data.breeds[0] : { name: '정보없음', origin: '정보없음'};

        const itemWrapper = document.createElement('div');
        itemWrapper.className = 'wrapper';

        const item = document.createElement('div');
        item.className = 'item';

        const itemImg = document.createElement('img');
        itemImg.className = 'item-img';
        itemImg.src = url;

        const itemDescription = document.createElement('div');
        itemDescription.className = 'item-description';

        const itemName = document.createElement('p');
        itemName.className = 'item-temper';
        itemName.innerText = name;

        const itemOrigin = document.createElement('p');
        itemOrigin.className = 'item-origin';
        itemOrigin.innerText = origin;

        itemWrapper.addEventListener('click', () => {
            this.onClick(this);
        });
        
        itemDescription.appendChild(itemName);
        itemDescription.appendChild(itemOrigin);
        item.appendChild(itemImg);
        item.appendChild(itemDescription);
        itemWrapper.appendChild(item);
        this.$target.appendChild(itemWrapper);
    }
}