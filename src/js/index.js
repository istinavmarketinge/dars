
import Header from "%modules%/header/header";
import PopularCategories from "%modules%/popular-categories/popular-categories";
import PopularBrands from "%modules%/brands/brands";
import BannerProduct from "%modules%/banners/banners";
import Banner from "%modules%/banners/banner-big";
import Tabs from "%modules%/tabs/tabs";
import CatalogMenu from "%modules%/catalog-menu/catalog-menu";
import Counter from "%modules%/countdown/countdown";
import Action from "%modules%/action/action";
import CatalogSections from "%modules%/catalog-sections/catalog-sections";
import ElementsList from "%modules%/elements_list/elements_list";







window.app = {};

window.app.header = new Header();
window.app.popularCategories = new PopularCategories();
window.app.popularBrands = new PopularBrands();
window.app.bannerProduct = new BannerProduct();
window.app.banner = new Banner();
window.app.tabs = new Tabs();
window.app.catalogMenu = new CatalogMenu();
window.app.counter = new Counter();
window.app.action = new Action();
window.app.catalogSections = new CatalogSections();
window.app.elementsList = new ElementsList();




window.app.header.init();
window.app.popularCategories.init();
window.app.popularBrands.init();
window.app.bannerProduct.init();
window.app.banner.init();
window.app.tabs.init();
window.app.catalogMenu.init();
window.app.counter.init();
window.app.action.init();
window.app.catalogSections.init();
window.app.elementsList.init();

