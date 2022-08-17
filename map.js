function myMap() {
var mapProp= {
 center:new google.maps.LatLng(37.0902 , -95.7129 ),
 zoom:3.5,
 
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({position:{lat:39.95228,lng:-75.16245},
  map:map 
});
 
}
