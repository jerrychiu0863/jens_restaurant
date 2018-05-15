$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>1300){
            $('.signature__card-1').css({"transform":"translateX(0px)", "opacity": "1"});
            $('.signature__card-2').css({"transform":"translateX(0px)", "opacity": "1"});
            $('.signature__card-3').css({"transform":"translateX(0px)", "opacity": "1"});
        };
    });
});


//////////MAP
function initMap() {
    var location = {lat: 37.721482, lng: -122.463951};
    var map = new google.maps.Map(document.querySelector('.find__group-map'), {
        zoom: 15, 
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    
    var infoWindow = new google.maps.InfoWindow({
        content: '<h1>Welcome to Jens Restaurant</h1>'
    })
    
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    })
}
