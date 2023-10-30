const OrderPage = class OrderPage {
    constructor() {
        this.map = null;
    }
    createMap() {
        return new Promise((resolve, reject) => {
            if (!document.querySelector('#cart-page__map-wrap--js')) {
                reject('Не найден селектор для инициализации карты');
                return false;
            };
            ymaps.ready(() => {

                this.map = new ymaps.Map("cart-page__map-wrap--js", {
                    center: [55.76, 37.64],
                    zoom: 7
                });

                resolve(this.map);

            })
        })
        
    }
    setMapPoint(map, address) {
        console.log(address);
        return new Promise((resolve, reject) => {
            this.map.geoObjects.removeAll();
            ymaps.geocode(address,{results:1}).then((res) => { 
                let coords = [res.geoObjects.get(0).geometry.getCoordinates()[0], res.geoObjects.get(0).geometry.getCoordinates()[1]];
                let point = new ymaps.Placemark(coords);
                map.geoObjects.add(point);
                console.log(coords)

                this.setMapCenter(coords);

                resolve(coords)

            }).catch(error => reject(error));
        })
    }
    setMapCenter(coords) {
        this.map.setCenter(coords);
    }
    setChangeHandler() {
        if (!document.querySelector('.cart-page__choose-address')) return;
        document.querySelector('.cart-page__choose-address').addEventListener('change', (event) => {
            if (!this.map) return;
            this.setMapPoint(this.map, event.currentTarget.value)
        })
    }
    async initMap() {
        const map = await this.createMap();
        const coords = await this.setMapPoint(this.map, document.querySelector('.cart-page__choose-address').value)
    }
    openMap() {
        if (!document.querySelector('.cart-page__open-map')) return;
        document.querySelector('.cart-page__open-map').addEventListener('click', event => {
            event.currentTarget.classList.toggle('isOpened');
            event.currentTarget.closest('.cart-page__order-map').querySelector('.cart-page__map-wrap').classList.toggle('isOpened');
            if (!this.map) {
                setTimeout(() => {
                    this.initMap();
                }, 300)
            } else {
                this.map.destroy();
                this.map = null;
            }
            console.log(this.map);
        })
    }
    async init() {
        this.openMap();
        this.setChangeHandler();        
    }
}

export default OrderPage;