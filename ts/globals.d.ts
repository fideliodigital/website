interface JQuery {
  carousel(options?: any): JQuery;
  tooltip(command?: any): JQuery;
  popover(command?: any): JQuery;
}

interface JQueryStatic {
  carouselInit?: () => void;
}

// Extend Window interface if needed
interface Window {
  [key: string]: any;
}

// Allow any property access on jQuery objects to avoid type errors during migration
interface JQuery {
  [key: string]: any;
} 