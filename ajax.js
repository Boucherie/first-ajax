document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */

runRoot.addEventListener('click' function(){
  console.log('RUNT ROOT PATH');


    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      // data: '',
      dataType: 'script',
    });
  });

})
