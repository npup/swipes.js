var swipes;

("undefined" == typeof swipes) && (swipes = (function () {
  var doc = document;

  console.log("typeof touchstart: %s", typeof doc.ontouchstart);
  console.log("touchstart: ", doc.ontouchstart);

  return {

  };
}()));