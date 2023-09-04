 // font change
 
 function myFunction() {
  var element = document.body;
  element.classList.toggle("poppin-font");
}


// dialogue

  function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }
    
        //preloader
    var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

//Fade out, optional
var s = document.getElementById("preloader").style;
s.opacity = 1;
(function fade() {
  (s.opacity -= 0.1) < 0 ? (s.display = "none") : setTimeout(fade, 40);
})();

    