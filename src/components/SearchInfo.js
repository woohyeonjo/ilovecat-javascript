export default class SearchInfo {
    constructor($target) {
        this.$target = $target;
        this.data = null;

        this.render();
    }

    updateData(data) {
        this.data = data;
        this.render();
    }

    onClose(target) {
        // event.stopPropagation();
        target.classList.toggle('hidden');
        target.data = null;
    }

    render() {
        if(this.data){
            const url = this.data.url;
            const {temperament, origin, name} = this.data.breeds.length > 0 ?
                this.data.breeds[0] : { temperament: '정보없음', origin: '정보없음', name: '정보없음'};

            this.$target.innerHTML = '';
    
            const info = document.createElement('div');
            info.className = 'info';

            const overlay = document.createElement('div');
            overlay.className = 'overlay';
    
            const infoHeader = document.createElement('div');
            infoHeader.className = 'info-header';
    
            const infoTitle = document.createElement('p');
            infoTitle.className = 'info-title';
            infoTitle.innerText = name;
            
            const closeBtn = document.createElement('p');
            closeBtn.className = 'close-btn';
            closeBtn.innerText = 'X';
            
            const infoImg = document.createElement('img');
            infoImg.className = 'info-img';
            infoImg.src = url;
    
            const infoDescription = document.createElement('div');
            infoDescription.className = 'info-description';
    
            const infoTemper = document.createElement('p');
            infoTemper.className = 'info-temper';
            infoTemper.innerText = temperament;
    
            const infoOrigin = document.createElement('p');
            infoOrigin.className = 'info-origin';
            infoOrigin.innerText = origin;

            closeBtn.addEventListener('click', () => {
                this.onClose(this.$target);
            });
            overlay.addEventListener('click', () => {
                this.onClose(this.$target);
            });
    
            infoHeader.appendChild(infoTitle);
            infoHeader.appendChild(closeBtn);
            infoDescription.appendChild(infoTemper);
            infoDescription.appendChild(infoOrigin);
            info.appendChild(infoHeader);
            info.appendChild(infoImg);
            info.appendChild(infoDescription);

            this.$target.appendChild(overlay);
            this.$target.appendChild(info);
        }
    }
}