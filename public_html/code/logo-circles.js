


function init_page() {

  var screen_width = $(window).width();
  var screen_height = $(window).height();

  console.log(screen_width + ' x ' + screen_height);

  var center_x = screen_width / 2;
  var center_y = screen_height / 2;

  $('body').append('<canvas id="canvas" width="' + screen_width + '" height="' + screen_height + '"></canvas>');


  var c = $('#canvas')[0].getContext("2d");


  var logo_radius = 200;

  var logo_velocity = 15;



  var interval = setInterval(function() { draw(); }, 100);


  function draw() {

    draw_circles(c, center_x, center_y, logo_radius);

    if (logo_radius == 0) { 

      clearInterval(interval); 

      // start twist

    }

    logo_radius = logo_radius - logo_velocity;

    if (logo_radius < 0) { logo_radius = 0; }

    logo_velocity = logo_velocity * 0.93;

    if (logo_velocity < 3) { logo_velocity = 3; }

  }


}



function draw_circles(c, x, y, set_radius) {


  c.clearRect(0, 0, $(window).width(), $(window).height() );


  var circle_radius = 35;

  var number_of_circles = 8;


  var step_angle = ( Math.PI * 2 ) / number_of_circles;

  var starting_angle = ( Math.PI * 2 / 360 ) * 18;


  // centers of circles

  for (var i = 0; i < number_of_circles; i++) {

    var angle = starting_angle + ( step_angle * i );

    var px = x + ( Math.sin(angle) * set_radius );
    var py = y + ( Math.cos(angle) * set_radius );

    c.lineWidth = 7;
    c.beginPath();
    c.arc(px, py, circle_radius, 0, Math.PI*2, true);
    c.closePath();
    c.stroke();

  }

}


