export default class SearchInfo {
    constructor($target, data) {
        this.$target = $target;
        this.data = data;

        this.render();
    }

    render() {
        // const {url, temperament, origin} = this.data;

        const modal = document.createElement('div');
        modal.className = 'modal';

        const info = document.createElement('div');
        info.className = 'info';

        const infoHeader = document.createElement('div');
        infoHeader.className = 'info-header';

        const infoTitle = document.createElement('p');
        infoTitle.className = 'info-title';
        infoTitle.innerText = '노르웨이 숲';
        
        const closeBtn = document.createElement('p');
        closeBtn.className = 'close-btn';
        closeBtn.innerText = 'X';
        
        const infoImg = document.createElement('img');
        infoImg.className = 'info-img';
        // infoImg.src = url;

        const infoDescription = document.createElement('div');
        infoDescription.className = 'info-description';

        const infoTemper = document.createElement('p');
        infoTemper.className = 'info-temper';
        // infoTemper.innerText = temperament;

        const infoOrigin = document.createElement('p');
        infoOrigin.className = 'info-origin';
        // infoOrigin.innerText = origin;

        infoHeader.appendChild(infoTitle);
        infoHeader.appendChild(closeBtn);
        infoDescription.appendChild(infoTemper);
        infoDescription.appendChild(infoOrigin);
        info.appendChild(infoHeader);
        info.appendChild(infoImg);
        info.appendChild(infoDescription);
        modal.appendChild(info);

        this.$target.appendChild(modal);
    }
}