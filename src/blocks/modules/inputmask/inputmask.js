import Inputmask from "inputmask";

const Mask = class Mask {
    constructor() {}
    addInitialMasks() {
        document.querySelectorAll('[data-input-mask]').forEach(selector => {
            this.setMask(selector, selector.dataset.inputMask);
        })
    }
    setMask(selector, mask) {
        Inputmask(mask).mask(selector);
    }
    init() {
        this.addInitialMasks();
    }
}

export default Mask;