import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteheader = $(".site-header");
        this.menuicon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }
    
    events() {
        this.menuicon.click(this.toggletheMenu.bind(this));
    }
    
    toggletheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteheader.toggleClass("site-header--is-expanded");
    }
}

export default MobileMenu;
