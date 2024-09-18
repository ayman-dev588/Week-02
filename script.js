var buttonScroll = document.getElementById("scroll");
var scrollTo = document.getElementById("section2");


buttonScroll.addEventListener("click", function() {
    scrollTo.scrollIntoView({ behavior: 'smooth'});
    document.getElementById('celebrate').style.display = 'block'; 
  });

  window.addEventListener("scroll", function() {
    document.getElementById('celebrate').style.display = 'block'; 
  });

