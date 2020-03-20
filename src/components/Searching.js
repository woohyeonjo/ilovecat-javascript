export default class SearchInfo {
    constructor($target) {
        this.$target = $target;
        this.render();
    }

    onClose(target) {
        // event.stopPropagation();
        target.classList.toggle('hidden');
        target.data = null;
    }

    render() {
        const spinner = document.createElement('div');
        spinner.className = 'spinner';

        const spinnerImg = document.createElement('img');
        spinnerImg.className = 'spinner-img';
        spinnerImg.src = 'src/img/loading.gif';

        spinner.appendChild(spinnerImg);
        this.$target.appendChild(spinner);
    }
}