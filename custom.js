var bebekler = document.getElementsByClassName("bebek");
console.log(bebekler);

document.onmousemove = function () {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  //var genislik = window.innerWidth;
  //var yuk = window.innerHeight;
  //console.log("Genişlik:" + genislik + "Yükseklik:" + yuk);
  var y = (event.clientY * 100) / window.innerHeight + "%";
  //console.log("X Ekseninde " + x, " Y Ekseninde " + y);

  for (var i = 0; i < 2; i++) {
    bebekler[i].style.left = x;
    bebekler[i].style.top = y;
    bebekler[i].style.transform = `translate(-${x}, -${y})`;
  }

  /*bebekler[0].style.top = y;
  bebekler[0].style.left = x;
  bebekler[1].style.top = y;
  bebekler[1].style.left = x;*/
};
