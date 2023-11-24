/**
 * @class Header
 * @description Класс для работы с шапкой сайта
 */
const Header = class Header {
	/**
	 * @description Добавляет обработчики событий клика для открытия меню
	 * @example
	 * // Вызов функции для обработки клика на '.header-top__city', '.header-top__modal-close' и '.header-bottom__catalog-button'
	 * 
	 * window.app.header.openMenuHandler();
	 */
	openMenuHandler() {
		$('.header-top__city').on('click',function(){
			$('.header-top__modal-city').addClass('open');
		});
		$('.header-top__modal-close').on('click',function(){
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
	/**
	 * @description Добавляет обработчики событий клика для закрытия меню
	 * @example
	 * // Вызов функции для обработки клика на '.catalog-menu__overlay' и '.catalog-menu__closer'
	 * 
	 * window.app.header.closeMenuHandler();
	 */
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
	/**
	 * @description Рассчитывает позиции меню каталога на странице при открытии
	 * @returns {Object} { top: 100, left: 100, height: 100, right: 100,} Объект с позициями относительно окна браузера
	 * @example
	 * // Вызов функции для получения позиции меню каталога относительно окна браузера
	 * 
	 * let bounds = window.app.header.calculateCatalogBounds();
	 * console.log(bounds.top);
	 */
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
	/**
	 * @description Задает позиции меню каталога относительно окна браузера
	 * @example
	 * // Вызов функции для задания позиции меню каталога относительно окна браузера
	 * 
	 * window.app.header.setCatalogBounds();
	 */
	setCatalogBounds() {
		if (window.innerWidth > 1300) {
		
			document.querySelector('.catalog-menu').style.height = `${this.calculateCatalogBounds().height}px`;
			document.querySelector('.catalog-menu').style.top = `${this.calculateCatalogBounds().top}px`;
			document.querySelector('.catalog-menu').style.setProperty('--plateWidth', `${this.calculateCatalogBounds().left + 30}px`);
			document.querySelector('.catalog-menu').style.right = `${this.calculateCatalogBounds().right}px`;
		}
	}
	/**
	 * @description Запускает функции при загрузке страницы
	 * @example
	 * // Вызов функций необходимых для работы при загрузке страницы
	 * 
	 * window.app.header.init();
	 */
    init() {
		
		this.openMenuHandler();
		this.closeMenuHandler();
		window.addEventListener('resize', () => {
			this.setCatalogBounds();
		})
    }
}

export default Header;

