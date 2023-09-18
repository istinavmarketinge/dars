import { mountCounter } from 'dynamic-countdown'
import { counter } from 'dynamic-countdown'
const Counter = class Counter {
    constructor() {}

    setCounter() {
        
        document.querySelectorAll('.counter__wrapper').forEach(counter => {
            counter.appendChild(mountCounter(counter.dataset.targetDate, counter.dataset.timeFormat, '2', 'ru'));
        })
        
        
    }
    counterStart() {
        counter()
    }
    init() {
        this.setCounter();
        window.onload = () => {
            this.counterStart()
        }
    }
}

export default Counter;