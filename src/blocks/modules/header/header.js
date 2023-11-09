/** @class Header */

const Header = class Header {
	/**
	 * Конструктор Header
	 * @constructor
	*/
    constructor() {}
	/**
	 * Функция открытия Меню
	 * 
	 * Вызов window.app.header.openMenuHandler();
	 *
	 * @returns {void}
	*/
	openMenuHandler() {
		$('.header-top__city').on('click',function(){
			$('.header-top__modal-city').addClass('open');
		});
		$('.header-top__modal-close').on('click',function(){
			$('.header-top__modal-city').removeClass('open');
		});
		$('.header-top__modal-yes').on('click',function(){
			$('.header-top__modal-city').removeClass('open');
		});
		document.querySelector('.header-bottom__catalog-button').addEventListener('click',() => {
			document.querySelector('.catalog-menu').classList.toggle('open');
			this.setCatalogBounds();
			if (window.innerWidth > 1300) {
				document.querySelector('body').classList.add('isScrollPrevented')
			}
		});
	}
	closeMenuHandler() {
		document.querySelector('.catalog-menu__overlay').addEventListener('click',() => {
			document.querySelector('.catalog-menu').classList.remove('open');
			document.querySelector('body').classList.remove('isScrollPrevented')
		});

		document.querySelector('.catalog-menu__closer').addEventListener('click',() => {
			document.querySelector('.catalog-menu').classList.remove('open');
			document.querySelector('body').classList.remove('isScrollPrevented')
		});
	}
	calculateCatalogBounds() {
		let windowHeight = window.innerHeight;
		let windowWidth = window.innerWidth;
		let headerTopHeight = document.querySelector('.header-top').clientHeight;
		let headerBottomHeight = document.querySelector('.header-bottom').clientHeight;
		let headerBottomBounds = document.querySelector('.header-bottom').getBoundingClientRect();
		return {
			top: headerTopHeight + headerBottomHeight,
			left: headerBottomBounds.x,
			height: windowHeight - headerTopHeight - headerBottomHeight,
			right: headerBottomBounds.y + 273,
		}
		
	}

	setCatalogBounds() {
		if (window.innerWidth > 1300) {
		
			document.querySelector('.catalog-menu').style.height = `${this.calculateCatalogBounds().height}px`;
			document.querySelector('.catalog-menu').style.top = `${this.calculateCatalogBounds().top}px`;
			document.querySelector('.catalog-menu').style.setProperty('--plateWidth', `${this.calculateCatalogBounds().left + 30}px`);
			document.querySelector('.catalog-menu').style.right = `${this.calculateCatalogBounds().right}px`;
		}
	}
    init() {
		
		this.openMenuHandler();
		this.closeMenuHandler();
		window.addEventListener('resize', () => {
			this.setCatalogBounds();
		})
    }
}

export default Header;

