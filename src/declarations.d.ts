// Allow any jQuery method
interface JQuery {
  tooltip(options?: any): JQuery;
  popover(options?: any): JQuery;
  carousel(options?: any): JQuery;
  counterUp(): JQuery;
  responsiveEqualHeightGrid(): JQuery;
  cubeportfolio(options?: any): JQuery;
  imagesLoaded(options?: any): JQuery;
  magnificPopup(options?: any): JQuery;
  masonry(options?: any): JQuery;
  parallax(option1?: any, option2?: any): JQuery;
  appear(callback?: Function): JQuery;
  mCustomScrollbar(options?: any): JQuery;
  [x: string]: any;
}

// Allow window.load
interface JQueryStatic {
  load(handler: Function): JQuery;
  [x: string]: any;
}

// Allow HTMLElement with pathname
interface HTMLElement {
  pathname?: string;
  hostname?: string;
  hash?: string;
}

// Global variables
declare var Circles: any;
declare var Swiper: any;
declare var WOW: any;
declare var google: any; 