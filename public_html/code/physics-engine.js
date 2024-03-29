


function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.dot = function (v) {
  return this.x * v.x + this.y * v.y;
};

Vector.prototype.length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
  
Vector.prototype.normalize = function() {
  var s = 1 / this.length();
  this.x *= s;
  this.y *= s;
  return this;
};

Vector.prototype.multiply = function(s) {
  return new Vector(this.x * s, this.y * s);
};

Vector.prototype.tx = function(v) {
  this.x += v.x;
  this.y += v.y;
  return this;
};
  
function BallObject(elasticity, vx, vy) {
  this.v = new Vector(vx || 0, vy || 0); // velocity: m/s^2
  this.m = 10; // mass: kg
  this.r = 15; // radius of obj
  this.p = new Vector(0, 0); // position  
  this.cr = elasticity; // elasticity
}

BallObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.p.x, this.p.y, this.r, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
};

BallObject.prototype.update = function(g, dt, ppm) {
  
  this.v.y += g * dt;
  this.p.x += this.v.x * dt * ppm;
  this.p.y += this.v.y * dt * ppm;
  
};

BallObject.prototype.collide = function(obj) {
  
  var dt, mT, v1, v2, cr, sm,
      dn = new Vector(this.p.x - obj.p.x, this.p.y - obj.p.y),
      sr = this.r + obj.r, // sum of radii
      dx = dn.length(); // pre-normalized magnitude
  
  if (dx > sr) {
    return; // no collision
  }
  
  // sum the masses, normalize the collision vector and get its tangential
  sm = this.m + obj.m;
  dn.normalize();
  dt = new Vector(dn.y, -dn.x);
  
  // avoid double collisions by "un-deforming" balls (larger mass == less tx)
  // this is susceptible to rounding errors, "jiggle" behavior and anti-gravity
  // suspension of the object get into a strange state
  mT = dn.multiply(this.r + obj.r - dx);
  this.p.tx(mT.multiply(obj.m / sm));
  obj.p.tx(mT.multiply(-this.m / sm));
   
  // this interaction is strange, as the CR describes more than just
  // the ball's bounce properties, it describes the level of conservation
  // observed in a collision and to be "true" needs to describe, rigidity, 
  // elasticity, level of energy lost to deformation or adhesion, and crazy
  // values (such as cr > 1 or cr < 0) for stange edge cases obviously not
  // handled here (see: http://en.wikipedia.org/wiki/Coefficient_of_restitution)
  // for now assume the ball with the least amount of elasticity describes the
  // collision as a whole:
  cr = Math.min(this.cr, obj.cr);
  
  // cache the magnitude of the applicable component of the relevant velocity
  v1 = dn.multiply(this.v.dot(dn)).length();
  v2 = dn.multiply(obj.v.dot(dn)).length(); 
  
  // maintain the unapplicatble component of the relevant velocity
  // then apply the formula for inelastic collisions
  this.v = dt.multiply(this.v.dot(dt));
  this.v.tx(dn.multiply((cr * obj.m * (v2 - v1) + this.m * v1 + obj.m * v2) / sm));
  
  // do this once for each object, since we are assuming collide will be called 
  // only once per "frame" and its also more effiecient for calculation cacheing 
  // purposes
  obj.v = dt.multiply(obj.v.dot(dt));
  obj.v.tx(dn.multiply((cr * this.m * (v1 - v2) + obj.m * v2 + this.m * v1) / sm));
};

function FloorObject(floor) {
  var py;
  
  this.v = new Vector(0, 0);
  this.m = 5.9722 * Math.pow(10, 24);
  this.r = 10000000;
  this.p = new Vector(0, py = this.r + floor);
  this.update = function() {
      this.v.x = 0;
      this.v.y = 0;
      this.p.x = 0;
      this.p.y = py;
  };
  // custom to minimize unnecessary filling:
  this.draw = function(ctx) {
    var c = ctx.canvas, s = ctx.scale;
    ctx.fillRect(c.width / -2 / s, floor, ctx.canvas.width / s, (ctx.canvas.height / s) - floor);
  };
}

FloorObject.prototype = new BallObject(1);

function createCanvasWithControls(objs) {
  var addBall = function() { objs.unshift(new BallObject(els.value / 100, (Math.random() * 10) - 5, -20)); },
      d = document,
      c = d.createElement('canvas'),
      b = d.createElement('button'),
      els = d.createElement('input'),
      clr = d.createElement('input'),
      cnt = d.createElement('input'),
      clrl = d.createElement('label'),
      cntl = d.createElement('label');
      
  b.innerHTML = 'add ball with elasticity: <span>0.70</span>';
  b.onclick = addBall;
  
  els.type = 'range';
  els.min = 0;
  els.max = 100;
  els.step = 1;
  els.value = 70;
  els.style.display = 'block';
  els.onchange = function() { 
    b.getElementsByTagName('span')[0].innerHTML = (this.value / 100).toFixed(2);
  };
  
  clr.type = cnt.type = 'checkbox';
  clr.checked = cnt.checked = true;
  clrl.style.display = cntl.style.display = 'block';
  
  clrl.appendChild(clr);
  clrl.appendChild(d.createTextNode('clear each frame'));
  
  cntl.appendChild(cnt);
  cntl.appendChild(d.createTextNode('continuous shower!'));
  
  c.style.border = 'solid 1px #3369ff';
  c.style.display = 'block';
  c.width = 1280;
  c.height = 900;
  c.shouldClear = function() { return clr.checked; };
      
  d.body.appendChild(c);
  d.body.appendChild(els);
  d.body.appendChild(b);
  d.body.appendChild(clrl);
  d.body.appendChild(cntl);
  
  setInterval(function() {
    if (cnt.checked) {
       addBall();
    }
  }, 333);
  
  return c;
}

// start:
var objs = [],
    c = createCanvasWithControls(objs),
    ctx = c.getContext('2d'),
    fps = 30, // target frames per second
    ppm = 20, // pixels per meter
    g = 9.8, // m/s^2 - acceleration due to gravity
    t = new Date().getTime();

// add the floor:
objs.push(new FloorObject(c.height - 10));

// as expando so its accessible in draw [this overides .scale(x,y)]
ctx.scale = 0.5; 
ctx.fillStyle = 'rgb(100,200,255)';
ctx.strokeStyle = 'rgb(33,69,233)';
ctx.transform(ctx.scale, 0, 0, ctx.scale, c.width / 2, c.height / 2);

setInterval(function() {
  
  var i, j,
      nw = c.width / ctx.scale,
      nh = c.height / ctx.scale,
      nt = new Date().getTime(),
      dt = (nt - t) / 1000;
  
  if (c.shouldClear()) {
    ctx.clearRect(nw / -2, nh / -2, nw, nh);
  }
  
  for (i = 0; i < objs.length; i++) {
          
    // if a ball > viewport width away from center remove it
    while (objs[i].p.x < -nw || objs[i].p.x > nw) { 
      objs.splice(i, 1);
    }
    
    objs[i].update(g, dt, ppm, objs, i);
    
    for (j = i + 1; j < objs.length; j++) {
      objs[j].collide(objs[i]);
    }
    
    objs[i].draw(ctx);
  }
  
  t = nt;
  
}, 1000 / fps);



