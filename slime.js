var makeItRain = function() {
  //clear out everything
  $('.rain').empty();

  var increment = 0;
  var drops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations

    var randoHundo = ((Math.random() * (15) + 5));

    var randoFiver = (Math.floor(Math.random() * (8) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: ' + randoHundo + 's;"></div>';
  }

  $('.rain.front-row').append(drops);
}

makeItRain();
