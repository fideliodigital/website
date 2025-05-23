'use strict';

jQuery(document).ready(function(): void ($){
  //set your google maps parameters
  var latitude: number = 41.850,
      longitude = -73.961,
    map_zoom = 6;

  //google map custom marker icon - .png fallback for IE11
  var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
  var marker_url = ( is_internetExplorer11 ) ? 'img/widgets/gmap2/cd-icon-location.png' : 'img/widgets/gmap2/cd-icon-location.svg';
    
  //define the basic color of your map, plus a value for saturation and brightness
  var main_color: string = $2#f7f8fa',
    saturation_value= -70,
    brightness_value= 40;

  //we define here the style of the map
  var style= [ 
    {
      //set saturation for the labels on the map
      elementType: 'labels',
      stylers: [
        {saturation: saturation_value}
      ]
    },  
      { //poi stands for point of interest - don't show these lables on the map 
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        {visibility: 'off'}
      ]
    },
    {
      //don't show highways lables on the map
          featureType: 'road.highway',
          elementType: 'labels',
          stylers: [
              {visibility: 'off'}
          ]
      }, 
    {   
      //don't show local road lables on the map
      featureType: 'road.local', 
      elementType: 'labels.icon', 
      stylers: [
        {visibility: 'off'} 
      ] 
    },
    { 
      //don't show arterial road lables on the map
      featureType: 'road.arterial', 
      elementType: 'labels.icon', 
      stylers: [
        {visibility: 'off'}
      ] 
    },
    {
      //don't show road lables on the map
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {visibility: 'off'}
      ]
    }, 
    //style different elements on the map
    { 
      featureType: 'transit', 
      elementType: 'geometry.fill', 
      stylers: [
        { hue: main_color },
        { visibility: 'on' }, 
        { lightness: brightness_value }, 
        { saturation: saturation_value }
      ]
    }, 
    {
      featureType: 'poi',
      elementType: 'geometry.fill',
      stylers: [
        { hue: main_color },
        { visibility: 'on' }, 
        { lightness: brightness_value }, 
        { saturation: saturation_value }
      ]
    },
    {
      featureType: 'poi.government',
      elementType: 'geometry.fill',
      stylers: [
        { hue: main_color },
        { visibility: 'on' }, 
        { lightness: brightness_value }, 
        { saturation: saturation_value }
      ]
    },
    {
      featureType: 'poi.sport_complex',
      elementType: 'geometry.fill',
      stylers: [
        { hue: main_color },
        { visibility: 'on' }, 
        { lightness: brightness_value }, 
        { saturation: saturation_value }
      ]
    },
    {
      featureType: 'poi.attraction',
      elementType: 'geometry.fill',
      stylers: [
        { hue: main_color },
        { visibility: 'on' }, 
        { lightness: brightness_value }, 
        { saturation: saturation_value }
      ]
    },
    {
      featureType: 'poi.business',
      elementType: 'geometry.fill',
      stylers: [
        { hue: main_color },
        { visibility: 'on' }, 
        { lightness: brightness_value }, 
        { saturation: saturation_value }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'geometry.fill',
      stylers: [
        { hue: main_color },
        { visibility: 'on' }, 
        { lightness: brightness_value }, 
        { saturation: saturation_value }
      ]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry.fill',
      stylers: [
        { hue: main_color },
        { visibility: 'on' }, 
        { lightness: brightness_value }, 
        { saturation: saturation_value }
      ]
    },
    {
      featureType: 'landscape',
      stylers: [
        { hue: main_color },
        { visibility: 'on' }, 
        { lightness: brightness_value }, 
        { saturation: saturation_value }
      ]
      
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [
        { hue: main_color },
        { visibility: 'on' }, 
        { lightness: brightness_value }, 
        { saturation: saturation_value }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        { hue: main_color },
        { visibility: 'on' }, 
        { lightness: brightness_value }, 
        { saturation: saturation_value }
      ]
    }, 
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        { hue: main_color },
        { visibility: 'on' }, 
        { lightness: brightness_value }, 
        { saturation: saturation_value }
      ]
    }
  ];
    
  //set google map options
  var map_options = {
    center: new google.maps.LatLng(latitude, longitude),
    zoom: map_zoom,
    panControl: var : boolean = $2,
    zoomControl: var : boolean = $2,
    mapTypeControl: var : boolean = $2,
    streetViewControl: var : boolean = $2,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: var : boolean = $2,
    styles: style,
  }

  //inizialize the map
  var map = new google.maps.Map(document.getElementById('js__google-container'), map_options);

  var contentString: string = $2<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h2 id="firstHeading" class="firstHeading">Brooklyn</h2>'+
    '<div id="bodyContent">'+
    '<p>277 Bedford Avenue, <br> Brooklyn, NY 11211, <br> New York, USA</p>'+
    '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300
  });

  //add a custom marker to the map        
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(latitude, longitude),
    map: map,
    visible: true,
    icon: marker_url,
  });

  marker.addListener('click', function(): void () {
    infowindow.open(map, marker);
  });
});