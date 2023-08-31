
import Header from "%modules%/header/header";
import PopularCategories from "%modules%/popular-categories/popular-categories";



window.app = {};

window.app.header = new Header();
window.app.header.init();
window.app.popularCategories = new PopularCategories();
window.app.popularCategories.init();


