


var countdown_bar_interval;

var countdown_bar_counter = 0;


function load_page() {

  $('body').append('<br><p>test countdown bar<br><br><input type="button" value="start countdown bar" onclick="start_countdown_bar();"><br><br><div id="countdown_bar_div"></div>');

}



function start_countdown_bar() {

  if (countdown_bar_counter == 0) {

    countdown_bar_interval = setInterval('display_countdown_bar()', 500);

  } 

  countdown_bar_counter = 20;

  display_countdown_bar();

}



function display_countdown_bar() {

  var div = $('#countdown_bar_div');

  div.html('');

  if (countdown_bar_counter == 0) { 

    clearInterval(countdown_bar_interval); 

    div.append('done');

  } else {

    for (var i = 0; i < countdown_bar_counter; i++) {

      div.append('<div style="border: 1px black solid; margin: 2px; width: 10; height: 20; float: left; background-color: #e0e0e0"><p></div>');

    }

    countdown_bar_counter--;

  }

}


