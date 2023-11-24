/**
 * @class
 * @description Класс для работы с картой
 */
const Map = class Map {
    constructor() {
        if (document.querySelector('#map_yandex')) {
            this.create();
        }
    }
    /**
    * @description Создает карту в любом блоке
    * @param  {String}  [selector = map_yandex]  [id блока куда вставится карта, без #]
    * @param  {Integer} [zoom = 16]     [Zoom карты при загрузке карты]
    * @param  {Array}   [center = [55.76, 37.64]]   [Координаты центра карты при загрузке]
    * @param  {Array}   [points = []]   [Массив точек на карте. Элементами массива могут быть как массив координат вида [55.76, 37.64], так и строка с адресом ]
    * @return {Promise}  map             [Объект карты]
    * 
    * @example
    * // Пример вызова карты с параметрами
    * 
    * window.app.map.create({
    selector: 'footer__map',
    zoom: 10,
    center: [55.76, 37.64],
    points: [ "Тула, Маргелова 5а", [55.76, 37.64] ]
})
    * @example
    * // Для применения дополнительного функционала можно использовать метод then(), который принимает параметр map
    * 
    * window.app.map.create({
    selector: 'footer__map',
    zoom: 10,
    center: [55.76, 37.64],
    points: [ "Тула, Маргелова 5а", [55.76, 37.64] ]
}).then(map => {
    console.log(map);
    map.setZoom(18);
    // тут можно писать любой функционал поверх экземпляра карты, который хранится в объекте map
    доступные методы для работы с картой: {@link https://yandex.ru/dev/jsapi30/doc/ru/ref/#class-ymap}
})

    */
    create(
        {
            selector = 'map_yandex',
            center = [55.76, 37.64],
            zoom = 16,
            controls = ['default'],
            points = []
        } = {}
    ) {

        return new Promise((resolve, reject) => {
            if (!document.querySelector(`#${selector}`)) {
                reject(`На странице нет блока с селектором ${selector}`);
                return false;
            }

            ymaps.ready( () => {

                let map = new ymaps.Map(selector, {
                    center,
                    zoom,
                    controls
                });

                if (points) {
                    this.setMapPoint(map, points);
                }

                resolve(map);       
            })
        })

        
    }

    async setMapPoint(map, points) {
        await points.forEach(point => {
            ymaps.geocode(point, {results:1}).then((res) => {
                let coords = [res.geoObjects.get(0).geometry.getCoordinates()[0], res.geoObjects.get(0).geometry.getCoordinates()[1]];
                console.log('res', res, coords);
                map.geoObjects.add(new ymaps.Placemark(coords, {}, {
                    draggable: true
                }));
                map.setCenter(coords);
            });
        });

        
        
    }
}

export default Map;