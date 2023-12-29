const OrderPage = class OrderPage {
    constructor() {
        this.mapOpen = null;
        this.mapChoose = null;
        this.selectedRadio = [];
    }
    fillSelectedRadios() {
        if (!document.querySelector('[data-fields-id]')) return;
        this.selectedRadio = [];
        document.querySelectorAll('[data-fields-id]').forEach(radio => {
            if (radio.checked) {
                this.selectedRadio.push(radio.dataset.fieldsId);
            }
        });
        console.log(this.selectedRadio);
        this.toggleRelatedElements();
    }
    setRadioChangeHandler() {
        if (!document.querySelector('[data-fields-id]')) return;
        document.querySelectorAll('[data-fields-id]').forEach(radio => {
            radio.addEventListener('change', () => {
                this.fillSelectedRadios();
            })
        });
    }
    toggleRelatedElements() {
        if (!document.querySelector('[data-field]')) return;

        document.querySelectorAll('[data-field]').forEach(field => {
            if (!field.dataset.styleDisplay) {
                field.dataset.styleDisplay = window.getComputedStyle(field).display;
            }

            console.log('field.dataset.styleDisplay', field.dataset.styleDisplay);

            let fields = [];
            field.dataset.field.replace(/\s/g, '').split(',').forEach(tag => {
                fields.push(this.selectedRadio.includes(tag))
            });

            if (fields.includes(false)) {
                field.style.display = 'none';
                field.classList.remove('isShowed');
            } else {
                field.style.display = field.dataset.styleDisplay;
                field.classList.add('isShowed');
            }
        });
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
                let myPlacemark = null;
                let address =  document.querySelector('#delivery-city .bx-ui-sls-fake').value != '' || document.querySelector('#delivery-address input.isShowed').value != "" ? `${document.querySelector('#delivery-city .bx-ui-sls-fake').value}, ${document.querySelector('#delivery-address input.isShowed').value} ` : 'г. Москва';
                
                

                ymaps.geocode(address, {results:1}).then((res) => {
                    let coords = [res.geoObjects.get(0).geometry.getCoordinates()[0], res.geoObjects.get(0).geometry.getCoordinates()[1]];
                    myPlacemark = new ymaps.Placemark(coords, {}, {
                        draggable: true
                    } );
                    this.mapChoose.geoObjects.add(myPlacemark);
                    myPlacemark.events.add('dragend', () => {
                        this.getAddress(myPlacemark.geometry.getCoordinates());
                    });
                    this.setMapCenter(this.mapChoose, coords);
                });

                

                this.mapChoose.events.add('click', (e) => {
                    var coordinates = e.get('coords');
                    // this.mapChoose.geoObjects.removeAll();
                    // Если метка уже создана – просто передвигаем ее.
                    if (myPlacemark) {
                        myPlacemark.geometry.setCoordinates(coordinates);
                    }
                    // Если нет – создаем.
                    else {
                        myPlacemark = new ymaps.Placemark(coordinates, {}, {
                            draggable: true
                        });
                    }
                    this.mapChoose.geoObjects.add(myPlacemark);
                    // Слушаем событие окончания перетаскивания на метке.
                    myPlacemark.events.add('dragend', () => {
                        this.getAddress(myPlacemark.geometry.getCoordinates());
                    });
                    // // }
                    this.getAddress(coordinates);
                });
                resolve(this.mapChoose);

            })
        })
        
    }
    getAddress(coords) {
        ymaps.geocode(coords).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0),
                address = firstGeoObject.getAddressLine();

            
            document.querySelector('#delivery-address input.isShowed').value = address;
        });
    }
    setMapPoint(map, address) {
        return new Promise((resolve, reject) => {
            map.geoObjects.removeAll();
            ymaps.geocode(address,{results:1}).then((res) => { 
                let coords = [res.geoObjects.get(0).geometry.getCoordinates()[0], res.geoObjects.get(0).geometry.getCoordinates()[1]];
                let point = new ymaps.Placemark(coords);
                map.geoObjects.add(point);

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
            let address = '';

            address+=document.querySelector(`.cart-page__choose-city option[value="${document.querySelector('.cart-page__choose-city').value}"]`).innerHTML;
            address+=' ';
            address+=document.querySelector(`.cart-page__choose-address option[value="${event.currentTarget.value}"]`).innerHTML;


            
            this.setMapPoint(this.mapOpen, document.querySelector(`.cart-page__choose-address option[value="${event.currentTarget.value}"]`).innerHTML)


            
        })
    }
    async initOpenMap() {
        const map = await this.createOpenMap();
        const address = document.querySelector(`.cart-page__choose-city option[value="${document.querySelector('.cart-page__choose-city').value}"]`).innerHTML + ', ' + document.querySelector(`.cart-page__choose-address option[value="${document.querySelector('.cart-page__choose-address').value}"]`).innerHTML;
        console.log('asdasdasdasdasd', address);
        const coords = await this.setMapPoint(this.mapOpen, address);
    }
    async initChooseMap() {
        // let address = `${document.querySelector('#delivery-city .bx-ui-sls-fake').value}, ${document.querySelector('#delivery-address input.isShowed').value} `;

        const map = await this.createChooseMap();
        // const coords = await this.setMapPoint(this.mapChoose, address)

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
            }
        })
    }
    async init() {
        this.openOpenMap();
        this.openChooseMap();
        this.setChangeHandler();
        this.fillSelectedRadios();
        this.setRadioChangeHandler();  
    }
}

export default OrderPage;