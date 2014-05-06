

function init_page() {

  var screen_width = $(window).width();
  var screen_height = $(window).height();

  console.log(screen_width + ' x ' + screen_height);


  $('body').append('<canvas id="canvas" width="' + 2200 + '" height="' + 32450 + '"></canvas>');


  var c = $('#canvas')[0].getContext("2d");


  /*
  c.beginPath();
  c.arc(75, 75, 20, 0, Math.PI*2, true); 
  c.closePath();
  c.fill();
  */

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("tabeeb.js", 20, 80);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(150, 100);
  c.lineTo(50, 100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(150, 100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("init_page", 175, 100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(300, 150);
  c.lineTo(150, 100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(300, 150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_page_state", 325, 150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 200);
  c.lineTo(300, 150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 475, 200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(300, 300);
  c.lineTo(150, 100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(300, 300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("load_page", 325, 300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 350);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_case_events_template", 475, 350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 400);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("draw_page", 475, 400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 450);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("init_case_events_page", 475, 450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 500);
  c.lineTo(450, 450);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_global_variables", 625, 500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 550);
  c.lineTo(600, 500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 775, 550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 600);
  c.lineTo(600, 500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 650);
  c.lineTo(600, 500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 700);
  c.lineTo(600, 500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 750);
  c.lineTo(600, 500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 800);
  c.lineTo(600, 500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 900);
  c.lineTo(450, 450);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 625, 900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 1000);
  c.lineTo(450, 450);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 1000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_case_id", 625, 1000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 1100);
  c.lineTo(450, 450);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 1100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_case_info", 625, 1100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 1200);
  c.lineTo(450, 450);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 1200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("load_case_events_info", 625, 1200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 1250);
  c.lineTo(600, 1200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 1250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_navigation_header", 775, 1250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 1300);
  c.lineTo(750, 1250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 1300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_nav_panel", 925, 1300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 1350);
  c.lineTo(900, 1300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 1350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("open_nav_panel", 1075, 1350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 1400);
  c.lineTo(900, 1300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 1400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 1075, 1400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 1500);
  c.lineTo(750, 1250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 1500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_nav_panel", 925, 1500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 1550);
  c.lineTo(900, 1500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 1550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("open_nav_panel", 1075, 1550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 1600);
  c.lineTo(900, 1500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 1600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 1075, 1600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 1700);
  c.lineTo(750, 1250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 1700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_navigation_panel", 925, 1700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 1750);
  c.lineTo(900, 1700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 1750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 1075, 1750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 1800);
  c.lineTo(900, 1700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 1800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 1075, 1800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 1850);
  c.lineTo(900, 1700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 1850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 1075, 1850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 1900);
  c.lineTo(900, 1700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 1900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 1075, 1900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 2000);
  c.lineTo(600, 1200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 2000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_case_status_button_menu", 775, 2000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 2100);
  c.lineTo(600, 1200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 2100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_case_status_button_menu", 775, 2100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 2150);
  c.lineTo(750, 2100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 2150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_case_status_button_menu", 925, 2150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 2200);
  c.lineTo(750, 2100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 2200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_publish_case_input", 925, 2200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 2250);
  c.lineTo(900, 2200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 2250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("scroll_case_events_to_the_end", 1075, 2250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 2300);
  c.lineTo(900, 2200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 2300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("change_conclusion_text_input_color", 1075, 2300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 2350);
  c.lineTo(900, 2200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 2350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("change_conclusion_text_input_color", 1075, 2350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 2400);
  c.lineTo(900, 2200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 2400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("choose_most_helpful_doctor", 1075, 2400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 2450);
  c.lineTo(900, 2200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 2450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("choose_most_helpful_doctor", 1075, 2450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 2500);
  c.lineTo(900, 2200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 2500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("publish_this_case", 1075, 2500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 2550);
  c.lineTo(900, 2200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 2550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("publish_this_case", 1075, 2550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 2600);
  c.lineTo(900, 2200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 2600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_publish_this_case", 1075, 2600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 2650);
  c.lineTo(900, 2200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 2650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_publish_this_case", 1075, 2650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 2700);
  c.lineTo(900, 2200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 2700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("scroll_case_events_to_the_end", 1075, 2700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 2800);
  c.lineTo(750, 2100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 2800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("ping_server_and_update_global_current_case", 925, 2800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 2900);
  c.lineTo(600, 1200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 2900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 775, 2900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 3000);
  c.lineTo(600, 1200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 3000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("bookmark_current_case", 775, 3000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 3050);
  c.lineTo(750, 3000);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 3050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("bookmark_case", 925, 3050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 3150);
  c.lineTo(600, 1200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 3150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("bookmark_current_case", 775, 3150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 3200);
  c.lineTo(750, 3150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 3200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("bookmark_case", 925, 3200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 3300);
  c.lineTo(600, 1200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 3300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("events_touch_start", 775, 3300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 3400);
  c.lineTo(600, 1200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 3400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("events_touch_move", 775, 3400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 3500);
  c.lineTo(600, 1200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 3500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("events_touch_end", 775, 3500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 3600);
  c.lineTo(600, 1200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 3600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_hgraph_icon", 775, 3600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 3700);
  c.lineTo(600, 1200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 3700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("load_case_events", 775, 3700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 3750);
  c.lineTo(750, 3700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 3750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 925, 3750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 3800);
  c.lineTo(750, 3700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 3800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_comment_display", 925, 3800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 3850);
  c.lineTo(750, 3700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 3850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_comment_display", 925, 3850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 3900);
  c.lineTo(750, 3700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 3900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_event_from_paragraph", 925, 3900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 3950);
  c.lineTo(750, 3700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 3950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_event_from_paragraph", 925, 3950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 4000);
  c.lineTo(750, 3700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 4000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_event_from_case_events", 925, 4000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 4050);
  c.lineTo(750, 3700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 4050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_publish_case_input", 925, 4050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4100);
  c.lineTo(900, 4050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("scroll_case_events_to_the_end", 1075, 4100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4150);
  c.lineTo(900, 4050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("change_conclusion_text_input_color", 1075, 4150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4200);
  c.lineTo(900, 4050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("change_conclusion_text_input_color", 1075, 4200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4250);
  c.lineTo(900, 4050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("choose_most_helpful_doctor", 1075, 4250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4300);
  c.lineTo(900, 4050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("choose_most_helpful_doctor", 1075, 4300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4350);
  c.lineTo(900, 4050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("publish_this_case", 1075, 4350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4400);
  c.lineTo(900, 4050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("publish_this_case", 1075, 4400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4450);
  c.lineTo(900, 4050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_publish_this_case", 1075, 4450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4500);
  c.lineTo(900, 4050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_publish_this_case", 1075, 4500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4550);
  c.lineTo(900, 4050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("scroll_case_events_to_the_end", 1075, 4550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 4650);
  c.lineTo(750, 3700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 4650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_publish_case_input", 925, 4650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4700);
  c.lineTo(900, 4650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("scroll_case_events_to_the_end", 1075, 4700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4750);
  c.lineTo(900, 4650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("change_conclusion_text_input_color", 1075, 4750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4800);
  c.lineTo(900, 4650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("change_conclusion_text_input_color", 1075, 4800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4850);
  c.lineTo(900, 4650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("choose_most_helpful_doctor", 1075, 4850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4900);
  c.lineTo(900, 4650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("choose_most_helpful_doctor", 1075, 4900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 4950);
  c.lineTo(900, 4650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 4950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("publish_this_case", 1075, 4950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 5000);
  c.lineTo(900, 4650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 5000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("publish_this_case", 1075, 5000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 5050);
  c.lineTo(900, 4650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 5050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_publish_this_case", 1075, 5050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 5100);
  c.lineTo(900, 4650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 5100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_publish_this_case", 1075, 5100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 5150);
  c.lineTo(900, 4650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 5150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("scroll_case_events_to_the_end", 1075, 5150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 5250);
  c.lineTo(750, 3700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 5250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_tags_list_display", 925, 5250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 5300);
  c.lineTo(900, 5250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 5300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("scroll_case_events_to_the_end", 1075, 5300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 5400);
  c.lineTo(750, 3700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 5400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_tags_list_display", 925, 5400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 5450);
  c.lineTo(900, 5400);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 5450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("scroll_case_events_to_the_end", 1075, 5450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 5550);
  c.lineTo(600, 1200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 5550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("load_case_comments", 775, 5550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 5600);
  c.lineTo(750, 5550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 5600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("load_case_comments_threaded", 925, 5600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 5650);
  c.lineTo(900, 5600);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 5650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_case_comment", 1075, 5650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 5700);
  c.lineTo(1050, 5650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 5700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("time_since", 1225, 5700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 5750);
  c.lineTo(1050, 5650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 5750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("bind_comments_touch_events", 1225, 5750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1350, 5800);
  c.lineTo(1200, 5750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1350, 5800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("comments_touch_start", 1375, 5800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1350, 5850);
  c.lineTo(1200, 5750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1350, 5850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("comments_touch_move", 1375, 5850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1500, 5900);
  c.lineTo(1350, 5850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1500, 5900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_comment_helpful", 1525, 5900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1350, 6000);
  c.lineTo(1200, 5750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1350, 6000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("comments_touch_end", 1375, 6000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1500, 6050);
  c.lineTo(1350, 6000);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1500, 6050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("scroll_events_to_comment", 1525, 6050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1350, 6150);
  c.lineTo(1200, 5750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1350, 6150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("scroll_events_to_comment", 1375, 6150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 6250);
  c.lineTo(750, 5550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 6250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("load_case_comments_recent", 925, 6250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 6350);
  c.lineTo(750, 5550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 6350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("load_case_comments_by_dr", 925, 6350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 6450);
  c.lineTo(750, 5550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 6450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("load_case_comments_by_specialist", 925, 6450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 6550);
  c.lineTo(750, 5550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 6550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_new_comment", 925, 6550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 6600);
  c.lineTo(900, 6550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 6600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("return_to_case_events_from_new_comment", 1075, 6600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 6650);
  c.lineTo(1050, 6600);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 6650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("remove_divs_for_add_new_comment", 1225, 6650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 6750);
  c.lineTo(900, 6550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 6750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_new_comment_dialog", 1075, 6750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 6800);
  c.lineTo(1050, 6750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 6800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_preview_onload", 1225, 6800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 6850);
  c.lineTo(1050, 6750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 6850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("save_new_comment", 1225, 6850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1350, 6900);
  c.lineTo(1200, 6850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1350, 6900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("return_to_case_events_from_new_comment", 1375, 6900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1500, 6950);
  c.lineTo(1350, 6900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1500, 6950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("remove_divs_for_add_new_comment", 1525, 6950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 7050);
  c.lineTo(1050, 6750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 7050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("take_a_photo", 1225, 7050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 7150);
  c.lineTo(1050, 6750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 7150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("attach_a_photo", 1225, 7150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 7250);
  c.lineTo(900, 6550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 7250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("bind_spellcheck_and_tagcheck_to_new_comment", 1075, 7250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 7350);
  c.lineTo(600, 1200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 7350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("load_case_timeline", 775, 7350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 7450);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 7450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_dr_profile_template", 475, 7450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 7550);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 7550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("draw_page", 475, 7550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 7650);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 7650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("init_dr_profile_page", 475, 7650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 7700);
  c.lineTo(450, 7650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 7700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_navigation_header", 625, 7700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 7750);
  c.lineTo(600, 7700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 7750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_nav_panel", 775, 7750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 7800);
  c.lineTo(750, 7750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 7800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("open_nav_panel", 925, 7800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 7850);
  c.lineTo(750, 7750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 7850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 7850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 7950);
  c.lineTo(600, 7700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 7950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_nav_panel", 775, 7950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 8000);
  c.lineTo(750, 7950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 8000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("open_nav_panel", 925, 8000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 8050);
  c.lineTo(750, 7950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 8050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 8050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 8150);
  c.lineTo(600, 7700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 8150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_navigation_panel", 775, 8150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 8200);
  c.lineTo(750, 8150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 8200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 8200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 8250);
  c.lineTo(750, 8150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 8250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 8250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 8300);
  c.lineTo(750, 8150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 8300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 8300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 8350);
  c.lineTo(750, 8150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 8350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 8350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 8450);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 8450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_patient_info_template", 475, 8450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 8550);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 8550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("draw_page", 475, 8550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 8650);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 8650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("init_patient_info_page", 475, 8650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 8700);
  c.lineTo(450, 8650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 8700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_navigation_header", 625, 8700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 8750);
  c.lineTo(600, 8700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 8750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_nav_panel", 775, 8750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 8800);
  c.lineTo(750, 8750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 8800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("open_nav_panel", 925, 8800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 8850);
  c.lineTo(750, 8750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 8850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 8850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 8950);
  c.lineTo(600, 8700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 8950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_nav_panel", 775, 8950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 9000);
  c.lineTo(750, 8950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 9000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("open_nav_panel", 925, 9000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 9050);
  c.lineTo(750, 8950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 9050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 9050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 9150);
  c.lineTo(600, 8700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 9150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_navigation_panel", 775, 9150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 9200);
  c.lineTo(750, 9150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 9200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 9200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 9250);
  c.lineTo(750, 9150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 9250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 9250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 9300);
  c.lineTo(750, 9150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 9300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 9300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 9350);
  c.lineTo(750, 9150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 9350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 9350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 9450);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 9450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_patient_list_template", 475, 9450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 9550);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 9550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("draw_page", 475, 9550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 9650);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 9650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("init_patient_list_page", 475, 9650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 9700);
  c.lineTo(450, 9650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 9700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_global_variables", 625, 9700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 9750);
  c.lineTo(600, 9700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 9750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 775, 9750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 9800);
  c.lineTo(600, 9700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 9800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 9800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 9850);
  c.lineTo(600, 9700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 9850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 9850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 9900);
  c.lineTo(600, 9700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 9900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 9900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 9950);
  c.lineTo(600, 9700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 9950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 9950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 10000);
  c.lineTo(600, 9700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 10000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 10000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 10100);
  c.lineTo(450, 9650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 10100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 625, 10100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 10200);
  c.lineTo(450, 9650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 10200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_navigation_header", 625, 10200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 10250);
  c.lineTo(600, 10200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 10250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_nav_panel", 775, 10250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 10300);
  c.lineTo(750, 10250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 10300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("open_nav_panel", 925, 10300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 10350);
  c.lineTo(750, 10250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 10350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 10350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 10450);
  c.lineTo(600, 10200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 10450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_nav_panel", 775, 10450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 10500);
  c.lineTo(750, 10450);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 10500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("open_nav_panel", 925, 10500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 10550);
  c.lineTo(750, 10450);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 10550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 10550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 10650);
  c.lineTo(600, 10200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 10650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_navigation_panel", 775, 10650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 10700);
  c.lineTo(750, 10650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 10700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 10700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 10750);
  c.lineTo(750, 10650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 10750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 10750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 10800);
  c.lineTo(750, 10650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 10800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 10800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 10850);
  c.lineTo(750, 10650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 10850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 10850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 10950);
  c.lineTo(450, 9650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 10950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("load_patient_info", 625, 10950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 11050);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 11050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_add_patient_template", 475, 11050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 11150);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 11150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("draw_page", 475, 11150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 11250);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 11250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("init_add_patient_page", 475, 11250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 11300);
  c.lineTo(450, 11250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 11300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_global_variables", 625, 11300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 11350);
  c.lineTo(600, 11300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 11350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 775, 11350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 11400);
  c.lineTo(600, 11300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 11400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 11400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 11450);
  c.lineTo(600, 11300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 11450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 11450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 11500);
  c.lineTo(600, 11300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 11500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 11500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 11550);
  c.lineTo(600, 11300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 11550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 11550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 11600);
  c.lineTo(600, 11300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 11600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 11600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 11700);
  c.lineTo(450, 11250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 11700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 625, 11700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 11800);
  c.lineTo(450, 11250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 11800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_navigation_header", 625, 11800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 11850);
  c.lineTo(600, 11800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 11850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_nav_panel", 775, 11850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 11900);
  c.lineTo(750, 11850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 11900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("open_nav_panel", 925, 11900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 11950);
  c.lineTo(750, 11850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 11950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 11950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 12050);
  c.lineTo(600, 11800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 12050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_nav_panel", 775, 12050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 12100);
  c.lineTo(750, 12050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 12100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("open_nav_panel", 925, 12100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 12150);
  c.lineTo(750, 12050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 12150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 12150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 12250);
  c.lineTo(600, 11800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 12250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_navigation_panel", 775, 12250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 12300);
  c.lineTo(750, 12250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 12300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 12300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 12350);
  c.lineTo(750, 12250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 12350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 12350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 12400);
  c.lineTo(750, 12250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 12400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 12400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 12450);
  c.lineTo(750, 12250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 12450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 12450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 12550);
  c.lineTo(450, 11250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 12550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_new_patient_info", 625, 12550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 12650);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 12650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_case_list_template", 475, 12650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 12750);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 12750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("draw_page", 475, 12750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 12850);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 12850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("init_case_list_page", 475, 12850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 12900);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 12900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_global_variables", 625, 12900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 12950);
  c.lineTo(600, 12900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 12950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 775, 12950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 13000);
  c.lineTo(600, 12900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 13000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 13000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 13050);
  c.lineTo(600, 12900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 13050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 13050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 13100);
  c.lineTo(600, 12900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 13100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 13100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 13150);
  c.lineTo(600, 12900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 13150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 13150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 13200);
  c.lineTo(600, 12900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 13200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 13200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 13300);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 13300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 625, 13300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 13400);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 13400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_case_info", 625, 13400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 13500);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 13500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_navigation_header", 625, 13500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 13550);
  c.lineTo(600, 13500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 13550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_nav_panel", 775, 13550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 13600);
  c.lineTo(750, 13550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 13600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("open_nav_panel", 925, 13600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 13650);
  c.lineTo(750, 13550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 13650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 13650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 13750);
  c.lineTo(600, 13500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 13750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_nav_panel", 775, 13750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 13800);
  c.lineTo(750, 13750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 13800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("open_nav_panel", 925, 13800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 13850);
  c.lineTo(750, 13750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 13850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 13850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 13950);
  c.lineTo(600, 13500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 13950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_navigation_panel", 775, 13950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 14000);
  c.lineTo(750, 13950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 14000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 14000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 14050);
  c.lineTo(750, 13950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 14050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 14050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 14100);
  c.lineTo(750, 13950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 14100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 14100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 14150);
  c.lineTo(750, 13950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 14150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 14150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 14250);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 14250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 625, 14250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 14350);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 14350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_case_list_filter_menu_items", 625, 14350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 14400);
  c.lineTo(600, 14350);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 14400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 775, 14400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 14450);
  c.lineTo(600, 14350);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 14450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 775, 14450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 14500);
  c.lineTo(600, 14350);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 14500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 775, 14500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 14550);
  c.lineTo(600, 14350);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 14550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 775, 14550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 14600);
  c.lineTo(600, 14350);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 14600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 775, 14600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 14650);
  c.lineTo(600, 14350);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 14650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 775, 14650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 14700);
  c.lineTo(600, 14350);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 14700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 775, 14700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 14750);
  c.lineTo(600, 14350);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 14750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 775, 14750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 14850);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 14850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_case_list_filter_drop_down_menu", 625, 14850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 14900);
  c.lineTo(600, 14850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 14900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_case_list_active_filter_item", 775, 14900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 14950);
  c.lineTo(750, 14900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 14950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_case_list_filter_option_menu", 925, 14950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 15050);
  c.lineTo(600, 14850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 15050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_case_list_draft_filter_item", 775, 15050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 15100);
  c.lineTo(750, 15050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 15100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_case_list_filter_option_menu", 925, 15100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 15200);
  c.lineTo(600, 14850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 15200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_case_list_bookmarks_filter_item", 775, 15200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 15250);
  c.lineTo(750, 15200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 15250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_case_list_filter_option_menu", 925, 15250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 15350);
  c.lineTo(600, 14850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 15350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_case_list_published_filter_item", 775, 15350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 15400);
  c.lineTo(750, 15350);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 15400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_case_list_filter_option_menu", 925, 15400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 15500);
  c.lineTo(600, 14850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 15500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_case_list_filter_option_menu", 775, 15500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 15550);
  c.lineTo(750, 15500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 15550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_case_list_filter_option_menu", 925, 15550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 15600);
  c.lineTo(750, 15500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 15600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("load_case_list_filter_option", 925, 15600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 15700);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 15700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 625, 15700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 15800);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 15800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 625, 15800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 15900);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 15900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 625, 15900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 16000);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 16000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 625, 16000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 16100);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 16100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 625, 16100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 16200);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 16200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 625, 16200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 16300);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 16300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 625, 16300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 16400);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 16400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_list_option", 625, 16400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 16500);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 16500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("search_cases", 625, 16500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 16550);
  c.lineTo(600, 16500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 16550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("search_cases_for", 775, 16550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 16600);
  c.lineTo(750, 16550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 16600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("list_cases_from", 925, 16600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 16650);
  c.lineTo(900, 16600);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 16650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_case_events", 1075, 16650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 16700);
  c.lineTo(900, 16600);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 16700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_create_case", 1075, 16700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 16750);
  c.lineTo(1050, 16700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 16750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("list_cases_from_global_case_info", 1225, 16750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 16850);
  c.lineTo(900, 16600);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 16850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_case_events", 1075, 16850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 16950);
  c.lineTo(900, 16600);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 16950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("time_since", 1075, 16950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 17050);
  c.lineTo(900, 16600);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 17050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("time_since", 1075, 17050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 17150);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 17150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("list_my_bookmarks_for", 625, 17150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 17200);
  c.lineTo(600, 17150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 17200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_my_bookmarks_from_api", 775, 17200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 17250);
  c.lineTo(750, 17200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 17250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("list_cases_from", 925, 17250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 17300);
  c.lineTo(900, 17250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 17300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_case_events", 1075, 17300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 17350);
  c.lineTo(900, 17250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 17350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_create_case", 1075, 17350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 17400);
  c.lineTo(1050, 17350);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 17400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("list_cases_from_global_case_info", 1225, 17400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 17500);
  c.lineTo(900, 17250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 17500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_case_events", 1075, 17500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 17600);
  c.lineTo(900, 17250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 17600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("time_since", 1075, 17600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 17700);
  c.lineTo(900, 17250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 17700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("time_since", 1075, 17700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 17800);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 17800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("list_my_cases_for", 625, 17800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 17850);
  c.lineTo(600, 17800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 17850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_my_cases_from_api", 775, 17850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 17900);
  c.lineTo(750, 17850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 17900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("list_cases_from_case_info_api_list", 925, 17900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 17950);
  c.lineTo(900, 17900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 17950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("list_cases_from", 1075, 17950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 18000);
  c.lineTo(1050, 17950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 18000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_case_events", 1225, 18000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 18050);
  c.lineTo(1050, 17950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 18050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_create_case", 1225, 18050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1350, 18100);
  c.lineTo(1200, 18050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1350, 18100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("list_cases_from_global_case_info", 1375, 18100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 18200);
  c.lineTo(1050, 17950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 18200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_case_events", 1225, 18200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 18300);
  c.lineTo(1050, 17950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 18300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("time_since", 1225, 18300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 18400);
  c.lineTo(1050, 17950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 18400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("time_since", 1225, 18400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 18500);
  c.lineTo(600, 17800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 18500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("list_cases_from_global_case_info", 775, 18500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 18550);
  c.lineTo(750, 18500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 18550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("list_cases_from", 925, 18550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 18600);
  c.lineTo(900, 18550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 18600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_case_events", 1075, 18600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 18650);
  c.lineTo(900, 18550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 18650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_create_case", 1075, 18650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 18700);
  c.lineTo(900, 18550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 18700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_case_events", 1075, 18700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 18750);
  c.lineTo(900, 18550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 18750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("time_since", 1075, 18750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 18800);
  c.lineTo(900, 18550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 18800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("time_since", 1075, 18800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 18900);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 18900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_case_events", 625, 18900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 19000);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 19000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_create_case", 625, 19000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 19050);
  c.lineTo(600, 19000);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 19050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("list_cases_from_global_case_info", 775, 19050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 19100);
  c.lineTo(750, 19050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 19100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("list_cases_from", 925, 19100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 19150);
  c.lineTo(900, 19100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 19150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_case_events", 1075, 19150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 19200);
  c.lineTo(900, 19100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 19200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_case_events", 1075, 19200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 19250);
  c.lineTo(900, 19100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 19250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("time_since", 1075, 19250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 19300);
  c.lineTo(900, 19100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 19300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("time_since", 1075, 19300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 19400);
  c.lineTo(450, 12850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 19400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_current_id_and_load_case_events", 625, 19400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 19500);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 19500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_create_case_template", 475, 19500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 19600);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 19600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("draw_page", 475, 19600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 19700);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 19700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("init_create_case_page", 475, 19700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 19750);
  c.lineTo(450, 19700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 19750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_new_case_id", 625, 19750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 19800);
  c.lineTo(450, 19700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 19800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("load_create_case_inputs", 625, 19800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 19850);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 19850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_global_variables", 775, 19850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 19900);
  c.lineTo(750, 19850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 19900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 925, 19900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 19950);
  c.lineTo(750, 19850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 19950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 925, 19950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 20000);
  c.lineTo(750, 19850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 20000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 925, 20000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 20050);
  c.lineTo(750, 19850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 20050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 925, 20050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 20100);
  c.lineTo(750, 19850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 20100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 925, 20100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 20150);
  c.lineTo(750, 19850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 20150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 925, 20150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 20250);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 20250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 775, 20250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 20350);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 20350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 775, 20350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 20450);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 20450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_preview_onload", 775, 20450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 20550);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 20550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_case_input_divs", 775, 20550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 20600);
  c.lineTo(750, 20550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 20600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("case_input_touch_start", 925, 20600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 20650);
  c.lineTo(750, 20550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 20650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("case_input_touch_move", 925, 20650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 20700);
  c.lineTo(750, 20550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 20700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("case_input_touch_end", 925, 20700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 20750);
  c.lineTo(750, 20550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 20750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("case_input_on_focus", 925, 20750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 20800);
  c.lineTo(900, 20750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 20800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_input_category_button", 1075, 20800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 20850);
  c.lineTo(900, 20750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 20850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("move_case_buttons_to_bottom_on_focus", 1075, 20850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 20950);
  c.lineTo(750, 20550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 20950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("case_input_on_blur", 925, 20950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 21050);
  c.lineTo(750, 20550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 21050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("case_input_on_keydown", 925, 21050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 21150);
  c.lineTo(750, 20550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 21150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("case_input_on_keypress", 925, 21150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 21250);
  c.lineTo(750, 20550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 21250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("Tag_Check", 925, 21250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 21300);
  c.lineTo(900, 21250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 21300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_stop_word_list", 1075, 21300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 21400);
  c.lineTo(750, 20550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 21400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_images_to_create_case_div", 925, 21400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 21500);
  c.lineTo(750, 20550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 21500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("case_input_icon_click", 925, 21500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 21550);
  c.lineTo(900, 21500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 21550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_case_input_category_button", 1075, 21550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 21650);
  c.lineTo(750, 20550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 21650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("adjust_case_input_icons", 925, 21650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 21750);
  c.lineTo(750, 20550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 21750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("adjust_case_input_icons", 925, 21750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 21850);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 21850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_category_ui_div", 775, 21850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 21900);
  c.lineTo(750, 21850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 21900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_category", 925, 21900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 21950);
  c.lineTo(900, 21900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 21950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_category_ui", 1075, 21950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 22050);
  c.lineTo(750, 21850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 22050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_category_ui", 925, 22050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 22150);
  c.lineTo(750, 21850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 22150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_category_ui", 925, 22150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 22250);
  c.lineTo(750, 21850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 22250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("bind_category_ui_events", 925, 22250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 22300);
  c.lineTo(900, 22250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 22300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("category_ui_touch_start", 1075, 22300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 22350);
  c.lineTo(900, 22250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 22350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("category_ui_touch_move", 1075, 22350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 22450);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 22450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("take_a_photo", 775, 22450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 22550);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 22550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("attach_a_photo", 775, 22550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 22650);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 22650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("draw_calendar", 775, 22650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 22700);
  c.lineTo(750, 22650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 22700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_calendar", 925, 22700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 22750);
  c.lineTo(750, 22650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 22750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_days_in_each_month", 925, 22750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 22800);
  c.lineTo(750, 22650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 22800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_calendar", 925, 22800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 22850);
  c.lineTo(750, 22650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 22850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_calendar", 925, 22850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 22900);
  c.lineTo(750, 22650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 22900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_date_to_paragraph", 925, 22900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 22950);
  c.lineTo(900, 22900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 22950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_number_of_month", 1075, 22950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 23000);
  c.lineTo(900, 22900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 23000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("adjust_case_input_icons", 1075, 23000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 23050);
  c.lineTo(900, 22900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 23050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_calendar", 1075, 23050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 23150);
  c.lineTo(750, 22650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 23150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("bind_calendar_ui_year_events", 925, 23150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 23200);
  c.lineTo(900, 23150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 23200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("calendar_ui_year_touch_start", 1075, 23200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 23250);
  c.lineTo(900, 23150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 23250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("calendar_ui_year_touch_move", 1075, 23250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 23350);
  c.lineTo(750, 22650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 23350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_calendar_year_state", 925, 23350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 23400);
  c.lineTo(900, 23350);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 23400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("redraw_calendar_page", 1075, 23400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 23450);
  c.lineTo(1050, 23400);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 23450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_starting_offset", 1225, 23450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 23500);
  c.lineTo(1050, 23400);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 23500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_previous_month", 1225, 23500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1350, 23550);
  c.lineTo(1200, 23500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1350, 23550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_starting_offset", 1375, 23550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 23650);
  c.lineTo(1050, 23400);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 23650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("update_calendar_date_selection", 1225, 23650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 23750);
  c.lineTo(1050, 23400);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 23750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("draw_calendar_page", 1225, 23750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1350, 23800);
  c.lineTo(1200, 23750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1350, 23800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_calendar_day_state", 1375, 23800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1500, 23850);
  c.lineTo(1350, 23800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1500, 23850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("update_calendar_date_selection", 1525, 23850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 23950);
  c.lineTo(900, 23350);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 23950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("update_calendar_date_selection", 1075, 23950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 24050);
  c.lineTo(750, 22650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 24050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("bind_calendar_ui_month_events", 925, 24050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 24100);
  c.lineTo(900, 24050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 24100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("calendar_ui_month_touch_start", 1075, 24100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 24150);
  c.lineTo(900, 24050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 24150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("calendar_ui_month_touch_move", 1075, 24150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 24250);
  c.lineTo(750, 22650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 24250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_calendar_month_state", 925, 24250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 24300);
  c.lineTo(900, 24250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 24300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("redraw_calendar_page", 1075, 24300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 24350);
  c.lineTo(1050, 24300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 24350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_starting_offset", 1225, 24350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 24400);
  c.lineTo(1050, 24300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 24400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_previous_month", 1225, 24400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1350, 24450);
  c.lineTo(1200, 24400);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1350, 24450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_starting_offset", 1375, 24450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 24550);
  c.lineTo(1050, 24300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 24550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("update_calendar_date_selection", 1225, 24550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 24650);
  c.lineTo(1050, 24300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 24650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("draw_calendar_page", 1225, 24650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1350, 24700);
  c.lineTo(1200, 24650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1350, 24700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_calendar_day_state", 1375, 24700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1500, 24750);
  c.lineTo(1350, 24700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1500, 24750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("update_calendar_date_selection", 1525, 24750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 24850);
  c.lineTo(900, 24250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 24850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("update_calendar_date_selection", 1075, 24850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 24950);
  c.lineTo(750, 22650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 24950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_previous_month", 925, 24950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 25000);
  c.lineTo(900, 24950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 25000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_starting_offset", 1075, 25000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 25100);
  c.lineTo(750, 22650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 25100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_starting_offset", 925, 25100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 25200);
  c.lineTo(750, 22650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 25200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("draw_calendar_page", 925, 25200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 25250);
  c.lineTo(900, 25200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 25250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_calendar_day_state", 1075, 25250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 25300);
  c.lineTo(1050, 25250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 25300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("update_calendar_date_selection", 1225, 25300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 25400);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 25400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("show_category_options", 775, 25400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 25500);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 25500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("submit_case", 775, 25500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 25550);
  c.lineTo(750, 25500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 25550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("show_case_title_error_message", 925, 25550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 25600);
  c.lineTo(900, 25550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 25600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("remove_case_title_error_message", 1075, 25600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 25700);
  c.lineTo(750, 25500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 25700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("todays_date", 925, 25700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 25800);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 25800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_case_cancel_button_menu", 775, 25800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 25850);
  c.lineTo(750, 25800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 25850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 925, 25850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 25900);
  c.lineTo(750, 25800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 25900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_button_delete_draft", 925, 25900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 25950);
  c.lineTo(900, 25900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 25950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_delete_case", 1075, 25950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 26050);
  c.lineTo(750, 25800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 26050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_button_delete_draft", 925, 26050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 26100);
  c.lineTo(900, 26050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 26100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_delete_case", 1075, 26100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 26200);
  c.lineTo(750, 25800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 26200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_button_submit_as_draft", 925, 26200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 26250);
  c.lineTo(900, 26200);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 26250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_submit_case", 1075, 26250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 26300);
  c.lineTo(1050, 26250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 26300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("todays_date", 1225, 26300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 26350);
  c.lineTo(1050, 26250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 26350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_time_zone_offset", 1225, 26350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 26400);
  c.lineTo(1050, 26250);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 26400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("update_case_and_event_ids", 1225, 26400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 26500);
  c.lineTo(750, 25800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 26500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_button_delete_draft", 925, 26500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 26550);
  c.lineTo(900, 26500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 26550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_delete_case", 1075, 26550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 26650);
  c.lineTo(750, 25800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 26650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_button_submit_as_draft", 925, 26650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 26700);
  c.lineTo(900, 26650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 26700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("cancel_submit_case", 1075, 26700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 26750);
  c.lineTo(1050, 26700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 26750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("todays_date", 1225, 26750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 26800);
  c.lineTo(1050, 26700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 26800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_time_zone_offset", 1225, 26800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1200, 26850);
  c.lineTo(1050, 26700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1200, 26850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("update_case_and_event_ids", 1225, 26850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 26950);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 26950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_cancel_button_menu", 775, 26950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 27050);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 27050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_case_select_patient", 775, 27050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 27100);
  c.lineTo(750, 27050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 27100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 925, 27100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 27150);
  c.lineTo(750, 27050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 27150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_patient_to_case", 925, 27150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 27200);
  c.lineTo(750, 27050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 27200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_patient_selection", 925, 27200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 27300);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 27300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_case_add_tags", 775, 27300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 27350);
  c.lineTo(750, 27300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 27350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("check_create_case_tags", 925, 27350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 27400);
  c.lineTo(900, 27350);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 27400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_new_tag_from_mongo", 1075, 27400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 27500);
  c.lineTo(750, 27300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 27500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("edit_create_case_tags", 925, 27500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 27600);
  c.lineTo(600, 19800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 27600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_case_add_tags", 775, 27600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 27650);
  c.lineTo(750, 27600);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 27650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("check_create_case_tags", 925, 27650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 27700);
  c.lineTo(900, 27650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 27700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_new_tag_from_mongo", 1075, 27700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 27800);
  c.lineTo(750, 27600);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 27800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("edit_create_case_tags", 925, 27800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 27900);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 27900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_dashboard_template", 475, 27900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 28000);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 28000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("draw_page", 475, 28000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 28100);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 28100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("init_dashboard_page", 475, 28100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 28150);
  c.lineTo(450, 28100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 28150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_global_variables", 625, 28150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 28200);
  c.lineTo(600, 28150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 28200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 775, 28200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 28250);
  c.lineTo(600, 28150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 28250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 28250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 28300);
  c.lineTo(600, 28150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 28300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 28300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 28350);
  c.lineTo(600, 28150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 28350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 28350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 28400);
  c.lineTo(600, 28150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 28400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 28400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 28450);
  c.lineTo(600, 28150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 28450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 28450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 28550);
  c.lineTo(450, 28100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 28550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 625, 28550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 28650);
  c.lineTo(450, 28100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 28650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_navigation_header", 625, 28650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 28700);
  c.lineTo(600, 28650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 28700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_nav_panel", 775, 28700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 28750);
  c.lineTo(750, 28700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 28750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("open_nav_panel", 925, 28750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 28800);
  c.lineTo(750, 28700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 28800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 28800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 28900);
  c.lineTo(600, 28650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 28900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("toggle_nav_panel", 775, 28900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 28950);
  c.lineTo(750, 28900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 28950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("open_nav_panel", 925, 28950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 29000);
  c.lineTo(750, 28900);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 29000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 29000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 29100);
  c.lineTo(600, 28650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 29100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("create_navigation_panel", 775, 29100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 29150);
  c.lineTo(750, 29100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 29150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 29150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 29200);
  c.lineTo(750, 29100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 29200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 29200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 29250);
  c.lineTo(750, 29100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 29250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 29250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 29300);
  c.lineTo(750, 29100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 29300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("close_nav_panel", 925, 29300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 29400);
  c.lineTo(450, 28100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 29400, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_dashboard_columns", 625, 29400);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 29500);
  c.lineTo(450, 28100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 29500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("bind_dashboard_touch_events", 625, 29500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 29550);
  c.lineTo(600, 29500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 29550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("dashboard_touch_start", 775, 29550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 29600);
  c.lineTo(600, 29500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 29600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("dashboard_touch_move", 775, 29600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 29650);
  c.lineTo(600, 29500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 29650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("dashboard_touch_end", 775, 29650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 29750);
  c.lineTo(450, 28100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 29750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("add_dashboard_buttons", 625, 29750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 29800);
  c.lineTo(600, 29750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 29800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("show_global_variables", 775, 29800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 29850);
  c.lineTo(750, 29800);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 29850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_page_height", 925, 29850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 29950);
  c.lineTo(600, 29750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 29950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("show_cookies", 775, 29950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 30000);
  c.lineTo(750, 29950);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 30000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_page_height", 925, 30000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 30100);
  c.lineTo(600, 29750);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 30100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("clear_cookies", 775, 30100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 30150);
  c.lineTo(750, 30100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 30150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("erase_cookie", 925, 30150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 30200);
  c.lineTo(900, 30150);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 30200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 1075, 30200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 30300);
  c.lineTo(750, 30100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 30300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("erase_cookie", 925, 30300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 30350);
  c.lineTo(900, 30300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 30350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 1075, 30350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 30450);
  c.lineTo(750, 30100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 30450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 925, 30450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 30550);
  c.lineTo(750, 30100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 30550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("erase_cookie", 925, 30550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 30600);
  c.lineTo(900, 30550);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 30600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 1075, 30600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 30700);
  c.lineTo(750, 30100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 30700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("erase_cookie", 925, 30700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 30750);
  c.lineTo(900, 30700);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 30750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 1075, 30750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 30850);
  c.lineTo(750, 30100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 30850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("erase_cookie", 925, 30850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 30900);
  c.lineTo(900, 30850);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 30900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 1075, 30900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 31000);
  c.lineTo(750, 30100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 31000, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("erase_cookie", 925, 31000);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(1050, 31050);
  c.lineTo(900, 31000);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(1050, 31050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 1075, 31050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 31150);
  c.lineTo(450, 28100);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 31150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_page_height", 625, 31150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 31250);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 31250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_login_page_template", 475, 31250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 31350);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 31350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("draw_page", 475, 31350);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(450, 31450);
  c.lineTo(300, 300);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(450, 31450, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("init_login_page", 475, 31450);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(600, 31500);
  c.lineTo(450, 31450);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(600, 31500, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("check_global_variables", 625, 31500);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 31550);
  c.lineTo(600, 31500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 31550, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 775, 31550);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 31600);
  c.lineTo(600, 31500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 31600, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 775, 31600);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 31650);
  c.lineTo(600, 31500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 31650, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_global_variables", 775, 31650);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 31700);
  c.lineTo(750, 31650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 31700, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 925, 31700);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 31750);
  c.lineTo(750, 31650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 31750, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 925, 31750);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 31800);
  c.lineTo(750, 31650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 31800, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 925, 31800);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 31850);
  c.lineTo(750, 31650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 31850, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 925, 31850);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 31900);
  c.lineTo(750, 31650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 31900, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("set_cookie", 925, 31900);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 31950);
  c.lineTo(750, 31650);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 31950, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 925, 31950);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(750, 32050);
  c.lineTo(600, 31500);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(750, 32050, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_global_variables", 775, 32050);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 32100);
  c.lineTo(750, 32050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 32100, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_orientation_mode", 925, 32100);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 32150);
  c.lineTo(750, 32050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 32150, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 925, 32150);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 32200);
  c.lineTo(750, 32050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 32200, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 925, 32200);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 32250);
  c.lineTo(750, 32050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 32250, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 925, 32250);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 32300);
  c.lineTo(750, 32050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 32300, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 925, 32300);

  c.strokeStyle = "rgba(100, 100, 100, 1)";
  c.beginPath();
  c.moveTo(900, 32350);
  c.lineTo(750, 32050);
  c.stroke();

  c.fillStyle = "rgba(200, 200, 255, 1)";
  c.strokeStyle = "rgba(100, 100, 155, 1)";
  c.beginPath();
  c.arc(900, 32350, 10, 0, Math.PI*2, true);
  c.closePath();
  c.fill();
  c.stroke();

  c.fillStyle = "rgba(0, 0, 0, 1)";
  c.font = "12pt sans-serif";
  c.fillText("get_cookie", 925, 32350);

}

