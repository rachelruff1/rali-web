import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (AIzaSyDMfd5wBiOZW5BqHiMusw4oWxcccdfGk0Q)
})(MapContainer)

<style>
    #map{height: 400px;
    width: 100%;
    }
</style>
<h1>My Google Map</h1>
<div id='map'></div>

<script>
    function initMap(){
        let options = {
            zoom:8,
            center: {lat: 32.7791, lng:-96.8003}
        };
        let map = new google.maps.Map(document.getElementById('map'), options)
        let marker = new google.maps.Marker({
            position:{lat: 32.7773313, lng:-96.7954995}
            //can pass in an object instead of hardcoding lat and lng
            map: map
        });
        let infoWindow = new google.maps.InfoWindow({
            content: <h1>'Meetup point'</h1>
        })

        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        })
    }
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDMfd5wBiOZW5BqHiMusw4oWxcccdfGk0Q&callback=initMap"
    async defer></script>


    // event.latLng
    // (get lat/long of area clicked in)
    //addMarker({coords: event.latLng})

geocode();
function geocode(){
    let location = '500 S Ervay St Dallas, Tx'
    axios.get
(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDMfd5wBiOZW5BqHiMusw4oWxcccdfGk0Q`, {
    params: {
        address: location,
        key: 'AIzaSyDMfd5wBiOZW5BqHiMusw4oWxcccdfGk0Q'
    }
})
.then(function(response){
    let formattedAddress = (response.data.results[0].formatted_address);
    let lat = response.data.results[0].geometry.location.lat;
    let lat = response.data.results[0].geometry.location.lat;
})
.catch(function(error){console.log(error)})
}