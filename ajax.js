document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */

  var runRoot = document.getElementById( 'run_root' );
  var runPingPong = document.getElementById( 'ping_pong' )

  runRoot.addEventListener('click' function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      // data: '',
      dataType: 'html',
    } );
  });

  runPingPong.addEventListener('click' function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      // data: '',
      dataType: 'text',
    }).done(function (responseData) {
      var element = document.createElement('p');
      element.innerHTML = responseData;
      document.querySelector('#setep3456').append(element);

  });
})
