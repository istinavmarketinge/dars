const Map = class Map {
    constructor() {}
    create({selector = '#map'} = {}) {
        console.log(selector);

        if (!document.querySelector(`#${selector}`)) {
            console.error(`На странице нет блока с селектором ${selector}`);
            return false;
        }

        let map = null;

        ymaps.ready( () => {

            console.log('selector', selector)

            map = new ymaps.Map(selector, {
                center: [55.76, 37.64],
                zoom: 16,
                controls: []
            });

            return map;            
        })

        
    }
}

export default Map;