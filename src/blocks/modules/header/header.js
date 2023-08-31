const Header = class Header {
    constructor() { 
        this.initialSearchWidth = document.querySelector('.header__search').offsetWidth;
        this.initialMenuhWidth = document.querySelector('.header__middle').offsetWidth;
        this.initialLogoWidth = document.querySelector('.header__left').offsetWidth;
        this.initialRightWidth = document.querySelector('.header__right').offsetWidth;
        this.initialCenterWidth = document.querySelector('.header__in').offsetWidth;
        this.space = (this.initialCenterWidth - this.initialLogoWidth -  this.initialRightWidth - this.initialMenuhWidth) / 2;

    }
    toggleRegion() {
        if (!document.querySelector('.header__region-dropdown .active')) return;
        document.querySelector('.header__region-dropdown .active').addEventListener('click', (event) => {
            console.log(1231212123123123);
            event.target.closest('.header__region-dropdown').classList.toggle('isActive');
        })
    }
    closeRegion() {
        document.addEventListener('click', (event) => {
            if (event.target.closest('.header__region-dropdown')) return;
            document.querySelector('.header__region-dropdown').classList.remove('isActive');
        })
    }
    toggleBurger() {
        if (!document.querySelector('.header__burger_opener')) return;
        document.querySelector('.header__burger_opener').addEventListener('click', () => {
            document.querySelector('.header__burger').classList.toggle('isOpened');
        })
    }
    toggleFocus() {
        if (!document.querySelector('.header__search input')) return;
        document.querySelector('.header__search input').addEventListener('focus', (event) => {
            event.target.closest('.header__search').classList.add('isOpened');
            document.querySelector('.header__search').style.marginLeft = (this.initialMenuhWidth + this.space) * -1 + 'px';
            document.querySelector('.header__search').style.width = this.initialMenuhWidth + this.space + this.initialSearchWidth + 'px';
        })
        console.log((this.initialCenterWidth - this.initialLogoWidth -  this.initialRightWidth - this.initialMenuhWidth) / 2);
        
    }
    toggleBlur() {
        if (!document.querySelector('.header__search input')) return;
        document.querySelector('.header__search input').addEventListener('blur', (event) => {
            event.target.closest('.header__search').classList.remove('isOpened');
            document.querySelector('.header__search').style.marginLeft = 0 + 'px';
            document.querySelector('.header__search').style.width = this.initialSearchWidth + 'px';
        })
    }
    onWindowResize() {
        window.addEventListener('resize', () => {
            this.initialSearchWidth = document.querySelector('.header__search').offsetWidth;
            this.initialMenuhWidth = document.querySelector('.header__middle').offsetWidth;
            this.initialLogoWidth = document.querySelector('.header__left').offsetWidth;
            this.initialRightWidth = document.querySelector('.header__right').offsetWidth;
            this.initialCenterWidth = document.querySelector('.header__in').offsetWidth;
            this.space = (this.initialCenterWidth - this.initialLogoWidth -  this.initialRightWidth - this.initialMenuhWidth) / 2;
        } )
    }
    init() {
        this.toggleRegion();
        this.closeRegion();
        this.toggleBurger();
        this.toggleFocus();
        this.toggleBlur();
        this.onWindowResize();
    }
}

export default Header;