import GLightbox from 'glightbox';
/**
 * @class Header
 * @description Класс для работы с шапкой сайта
 */
const Footer = class Footer {
	/**
	 * @description Запускает функции при загрузке страницы
	 * @example
	 * // Вызов функций необходимых для работы при загрузке страницы
	 * 
	 * window.app.header.init();
	 */

	initLightbox() {
		if (!document.querySelector('.js-footer-menu-link')) return;
		this.lightbox = GLightbox({
		  selector: '.js-footer-menu-link'
		});
	}
	/**
	 * @description Функция кастомизации GLIghtBox
	 * @example
	 * // Вызов функций необходим для кастомизации
	 * 
	 * window.app.header.customGLIghtBox();
	 */
	customGLIghtBox() {
		document.querySelector('.js-footer-menu-link').addEventListener('click',() => {
			document.querySelector('.goverlay').style.background = 'none';
			document.querySelector('.glightbox-container').classList.add('custom-header-top-menu');
			document.querySelectorAll('.glightbox-open').forEach(element => {
				element.classList.remove('glightbox-open')
			});;
		});
	}
    init() {
		this.initLightbox();
		this.customGLIghtBox();
    }
}

export default Footer;