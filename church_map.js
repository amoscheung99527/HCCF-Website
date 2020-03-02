/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function initMap() {
  
  var location1 = {lat: 43.227684, lng: -79.886428};
  var map1 = new google.maps.Map(
      document.getElementById('map1'), {zoom: 16, center: location1});
  var marker = new google.maps.Marker({position: location1, map:map1});
  
  var location2 = {lat: 43.263953, lng: -79.888878};
  var map2 = new google.maps.Map(
      document.getElementById('map2'), {zoom: 16, center: location2});
  var marker2 = new google.maps.Marker({position: location2, map:map2});
  
  var location3 = {lat: 43.268197, lng: -79.862860};
  var map3 = new google.maps.Map(
      document.getElementById('map3'), {zoom: 16, center: location3});
  var marker3 = new google.maps.Marker({position: location3, map:map3});
  
  var location4 = {lat: 43.263498, lng: -79.917704};
  var map4 = new google.maps.Map(
      document.getElementById('map4'), {zoom: 16, center: location4});
  var marker4 = new google.maps.Marker({position: location4, map:map4});
  
  var location5 = {lat: 43.252598, lng: -79.929695};
  var map5 = new google.maps.Map(
      document.getElementById('map5'), {zoom: 16, center: location5});
  var marker5 = new google.maps.Marker({position: location5, map:map5});
}
