
import Header from "%modules%/header/header";
import PopularCategories from "%modules%/popular-categories/popular-categories";
import PopularBrands from "%modules%/brands/brands";




window.app = {};

window.app.header = new Header();
window.app.header.init();
window.app.popularCategories = new PopularCategories();
window.app.popularCategories.init();
window.app.popularBrands = new PopularBrands();
window.app.popularBrands.init();


