const OrderPage = class OrderPage {
    constructor() {
        this.mapOpen = null;
        this.mapChoose = null;
    }
    createOpenMap() {
        return new Promise((resolve, reject) => {
            if (!document.querySelector('#cart-page__map-wrap--js-open')) {
                reject('Не найден селектор для инициализации карты');
                return false;
            };
            ymaps.ready(() => {

                this.mapOpen = new ymaps.Map("cart-page__map-wrap--js-open", {
                    center: [55.76, 37.64],
                    zoom: 7
                });

                resolve(this.mapOpen);

            })
        })
        
    }
    customChooseBaloon() {
        let template = ymaps.templateLayoutFactory.createClass(
            '<div class="balloon-root ">'+
                '<a class="close" href="#">&times;</a>'+
                '<div class="arrow balloon-pin"></div>'+
                '<div class="balloon-head balloon">asdasads</div>'+
                '<div class="balloon-body balloon">asdasdadsads</div>'+
                '<div class="balloon-footer balloon">asdasdassdasd</div>'+
            '</div>', {
            //Формирование макета
            build: function () {
                this.constructor.superclass.build.call(this);
                console.log('build')
                // this._$element = $('.balloon-root', this.getParentElement());

                // this.applyElementOffset();

                // this._$element.find('.close')
                //     .on('click', $.proxy(this.onCloseClick, this));
            },
            //удаление макета из DOM
            clear: function () {
                // this._$element.find('.close')
                //     .off('click');

                // this.constructor.superclass.clear.call(this);
            },
            //закрытие балуна
            onCloseClick: function (e) {
                // e.preventDefault();

                // this.events.fire('userclose');
            },
        });

        return template;
    }
    createChooseMap() {
        return new Promise((resolve, reject) => {
            if (!document.querySelector('#cart-page__map-wrap--js-choose')) {
                reject('Не найден селектор для инициализации карты');
                return false;
            };
            ymaps.ready(() => {

                this.mapChoose = new ymaps.Map("cart-page__map-wrap--js-choose", {
                    center: [55.76, 37.64],
                    zoom: 16,
                    controls: []
                });

                this.mapChoose.events.add('click', (e) => {
                    var coords = e.get('coords');
                    this.mapChoose.geoObjects.removeAll();
                    // // Если метка уже создана – просто передвигаем ее.
                    // if (myPlacemark) {
                    //     myPlacemark.geometry.setCoordinates(coords);
                    // }
                    // // Если нет – создаем.
                    // else {
                    let myPlacemark = new ymaps.Placemark(coords, {}, {
                        draggable: true
                    });
                    this.mapChoose.geoObjects.add(myPlacemark);
                    // Слушаем событие окончания перетаскивания на метке.
                    myPlacemark.events.add('dragend', () => {
                        this.getAddress(myPlacemark.geometry.getCoordinates());
                    });
                    // // }
                    this.getAddress(coords);
                });
                resolve(this.mapChoose);
                console.log('карта инициализирована')

            })
        })
        
    }
    getAddress(coords) {
        ymaps.geocode(coords).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0),
                address = firstGeoObject.getAddressLine();

            
            document.querySelector('#delivery-address input').value = address;
        });
    }
    setMapPoint(map, address) {
        console.log('address', address);
        return new Promise((resolve, reject) => {
            map.geoObjects.removeAll();
            ymaps.geocode(address,{results:1}).then((res) => { 
                let coords = [res.geoObjects.get(0).geometry.getCoordinates()[0], res.geoObjects.get(0).geometry.getCoordinates()[1]];
                let point = new ymaps.Placemark(coords);
                map.geoObjects.add(point);
                console.log(coords)

                this.setMapCenter(map, coords);

                resolve(coords)

            }).catch(error => reject(error));
        })
    }
    setMapCenter(map, coords) {
        map.setCenter(coords);
    }
    setChangeHandler() {
        if (!document.querySelector('.cart-page__choose-address')) return;
        document.querySelector('.cart-page__choose-address').addEventListener('change', (event) => {
            if (!this.mapOpen) return;
            this.setMapPoint(this.mapOpen, event.currentTarget.value)
        })
    }
    async initOpenMap() {
        const map = await this.createOpenMap();
        const coords = await this.setMapPoint(this.mapOpen, document.querySelector('.cart-page__choose-address').value)
    }
    async initChooseMap() {
        let address = `${document.querySelector('#delivery-city input').value}, ${document.querySelector('#delivery-address input').value} `;

        console.log(address, 'address')
        const map = await this.createChooseMap();
        const coords = await this.setMapPoint(this.mapChoose, address)

    }
    openOpenMap() {
        if (!document.querySelector('.cart-page__open-map-open')) return;
        document.querySelector('.cart-page__open-map-open').addEventListener('click', event => {
            event.currentTarget.classList.toggle('isOpened');
            event.currentTarget.closest('.cart-page__order-map').querySelector('.cart-page__map-wrap').classList.toggle('isOpened');
            if (!this.mapOpen) {
                setTimeout(() => {
                    this.initOpenMap();
                }, 300)
            } else {
                this.mapOpen.destroy();
                this.mapOpen = null;
            }
            console.log(this.mapOpen);
        })
    }
    openChooseMap() {
        if (!document.querySelector('.cart-page__open-map-choose')) return;
        document.querySelector('.cart-page__open-map-choose').addEventListener('click', event => {
            event.currentTarget.classList.toggle('isOpened');
            event.currentTarget.closest('.cart-page__order-block-in').querySelector('.cart-page__map-wrap').classList.toggle('isOpened');
            if (!this.mapChoose) {
                setTimeout(() => {
                    this.initChooseMap();
                    
                }, 300)
            } else {
                this.mapChoose.destroy();
                this.mapChoose = null;
                console.log(this.mapChoose);
            }
        })
    }
    async init() {
        this.openOpenMap();
        this.openChooseMap();
        this.setChangeHandler();        
    }
}

export default OrderPage;