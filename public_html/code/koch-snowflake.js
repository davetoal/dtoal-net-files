


// koch snowflake, rotation of vectors


var count = 0;

var max_count = 8;


var screen_width = $(window).width();
var screen_height = $(window).height();



function init_page() {

  console.log(screen_width + ' x ' + screen_height);

  var center_x = screen_width / 2;
  var center_y = screen_height / 2;

  $('body').append('<canvas id="canvas" width="' + screen_width + '" height="' + screen_height + '"></canvas>');

  var c = $('#canvas')[0].getContext("2d");



  /*

  var points = [];

  px = center_x + 400;
  py = center_y - 300;

  points = divide_line(center_x, center_y, px, py);

  draw_points(c, points);

  */



  var sqrt_3 = 1.73205080757;

  var side = 700;
  var half_side = side / 2;

  var height = half_side * sqrt_3;

  var top_y = center_y - ( half_side * ( sqrt_3 - 1 ) );

  var left_side  = center_x - half_side;
  var right_side = center_x + half_side;

  var bottom = center_y + half_side;


  var triangle = [];

  triangle.push( { 'x': center_x,
                   'y': bottom } );

  triangle.push( { 'x': right_side,
                   'y': top_y } );

  triangle.push( { 'x': left_side,
                   'y': top_y } );

  triangle.push( { 'x': center_x,
                   'y': bottom } );

  koch(c, triangle);

}



function koch(c, p) {

  var next_p = [];

  var start_x, start_y;
  var   end_x,   end_y;

  console.log('p is ' + p.length + ', there are ' + ( p.length - 1 ) + ' points');


  for (var i in p) {

    // console.log(i + ', x is ' + p[i].x);
    // console.log(i + ', y is ' + p[i].y);


    if (i == 0) {

      start_x = p[i].x;
      start_y = p[i].y;

    } else {

      end_x = p[i].x;
      end_y = p[i].y;


      var np = divide_line(start_x, start_y, end_x, end_y);

      if (count == ( max_count - 1 ) ) {

        draw_points(c, np);

      }


      for (var i = 0; i < 9; i += 2) {
        next_p.push( { 'x': np[i],
                       'y': np[i + 1] } );
      }


      start_x = end_x;
      start_y = end_y;

    }

     
  }

  count++;

  if (count < max_count) { koch(c, next_p); }

}



function draw_points(c, p) {

  c.beginPath();
  c.moveTo(p[0], p[1]);
  c.lineTo(p[2], p[3]);
  c.lineTo(p[4], p[5]);
  c.lineTo(p[6], p[7]);
  c.lineTo(p[8], p[9]);
  c.stroke();

}



function divide_line(start_x, start_y, end_x, end_y) {

  var d = [];


  var dx = end_x - start_x;
  var dy = end_y - start_y;

  var vx = dx / 3;
  var vy = dy / 3;


  d[0] = start_x;
  d[1] = start_y;

  d[2] = start_x + vx;
  d[3] = start_y + vy;

  //d[4], rotate d[6] and add to d[2]
  //d[5], rotate d[7] and add to d[3]

  // A.x' = (A.x-B.x) * cos© - (A.y-B.y) * sin© + B.x
  // A.y' = (A.y-B.y) * cos© + (A.x-B.x) * sin© + B.y
  // B is d2, d3; A is d6, d7; c is 60

  var sin_60 = 0.86602540378;
  var cos_60 = 0.5;

  d[6] = end_x - vx;
  d[7] = end_y - vy;

  d[4] = ( d[6] - d[2] ) * cos_60 - ( d[7] - d[3] ) * sin_60 + d[2];
  d[5] = ( d[7] - d[3] ) * cos_60 + ( d[6] - d[2] ) * sin_60 + d[3];

  d[8] = end_x;
  d[9] = end_y;

  return(d);

}


