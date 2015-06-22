'use strict';

var s = new Snap('.error'),
hillValley,
initialise,
car,
green,
black,
logo,
logoRotate,
hex,
animateTriangles,
animateLogo,
dropTriangle,
carStartMatrix = new Snap.Matrix(),
hexMatrix = new Snap.Matrix(),
hexMatrix2 = new Snap.Matrix(),
carEndMatrix = new Snap.Matrix(),
loopAnimation;


// shim layer with setTimeout fallback
window.requestAnimFrame = (function () {
  return  window.requestAnimationFrame       ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();



initialise = function () {

  green = s.select('.green');
  black = s.select('.black');
  logo = s.select('.logo');
  hex = s.select('.hex');
  logoRotate = s.select('.hex');



  carStartMatrix.translate(0,0);



  dropTriangle();
};


dropTriangle = function () {
 animateTriangles();

};



// animateCar = function () {
//   // animate green
//   green.animate({
//     transform: carStartMatrix
//   }, 1000,function () {
//       setTimeout(function () {
//         green.animate({
//           transform: carEndMatrix
//         }, 750, mina.backout)

//       }, 500); 
//   });
//   animate black
//   black.animate({
//     transform: carStartMatrix
//   }, 1250, mina.easeinout, function () {
//     black.animate({
//       transform: carMidMatrix
//     }, 1250);
//   });

// };



var shabang =  mina.linear;


animateTriangles = function () {

  // animate green
  green.animate({
    transform: carStartMatrix
  }, 750, shabang)

  // animate black

  setTimeout(function () {
    black.animate({
      transform: carStartMatrix
    }, 750, shabang)
    
  }, 500); 

  setTimeout(function () {
    logo.animate({
      'opacity': 1
    }, 1000, shabang)
    
  }, 900); 

  setTimeout(function () {
    hex.animate({
      'opacity': 1
    }, 2000, shabang, function () {
     animateLogo();
   }, 1200)
  });
};

animateLogo = function () {
  jQuery(".hex").attr("class", "hex rotate");
};



initialise();