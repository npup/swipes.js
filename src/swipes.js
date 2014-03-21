var swipes;

("undefined" == typeof swipes) && (swipes = (function () {
  var doc = document, docEl = doc.documentElement;

  function log(text) {
    if (!log.on) {return;}
    var elem = doc.createElement("p");
    elem.innerHTML = text;
    doc.body.appendChild(elem);
  }
  log.on = true;


  log("typeof touchstart: "+ typeof docEl.ontouchstart);
  log("touchstart: "+ docEl.ontouchstart);



  return {

  };


}()));