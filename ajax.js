document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */

  var runRoot = document.getElementById( 'run_root' );
  var runPingPong = document.getElementById( 'ping_pong' );
  var runCount = document.getElementById( 'run_count' );
  var runTime = document.getElementById( 'run_time' );

  runRoot.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      // data: '',
      dataType: 'html',
    } );
  });

  runPingPong.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      // data: '',
      dataType: 'text',
    }).done(function (responseData) {
      console.log(responseData);
      var element = document.createElement('p');
      element.innerHTML = responseData;
      document.getElementById('step3456').append(element);

    }).fail(function( jqXHR, textStatus, errorThrown ) {
      console.log('POST FAILED');
      var errorMsg = document.createElement('p');
      errorMsg.innerHTML = jqXHR.responseText;
      console.log(jqXHR);
      console.log(jqXHR.responseText);
      console.log(textStatus);
      document.getElementById('step3456').append(errorMsg);
    }).always(function() {
      console.log('Request completed!');
    })
  });

  runCount.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text',
    }) .done(function(responseData) {
      console.log(responseData);
    });
  });

  runTime.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: 'Asia/Kolkata'},
      dataType: 'text',
    }).done(function(responseData) {
      console.log('post success!');
      var currentTime = document.createElement('p');
      currentTime.innerHTML = (responseData);
      document.getElementById('step8').append(currentTime);
    });
  });
});
