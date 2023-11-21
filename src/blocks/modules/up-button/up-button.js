const UpButton = class UpButton {
    constructor() {}
    setClickHandler() {
        if (!document.querySelector('.up-button--js')) return;
        document.querySelector('.up-button--js').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
    }
    init() {
        this.setClickHandler();
    }
}

export default UpButton;