var slidePosition = 1;
SlideShow(slidePosition);
mobileSlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow((slidePosition += n));
}

// forward/Back controls
function mobilePlusSlides(n) {
  mobileSlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  // var slides = document.getElementsByClassName("mobile-container");
  var slides2 = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  console.log(circles);
  // if (n > slides.length || n > circles) {
    if(n > slides2.length){
    console.log(n);
    slidePosition = 1;
    console.log(slidePosition);
  }
  if (n < 1) {
    console.log(n);
    slidePosition = slides.length;
    console.log(slidePosition);
  }
  for (i = 0; i < slides2.length; i++) {
    // slides[i].style.display = "none";
    slides2[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  // slides[slidePosition - 1].style.display = "block";
  slides2[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}

function mobileSlideShow(n){
  var i;
  var slides = document.getElementsByClassName("mobile-container");
  console.log(slides);
  if (n > slides.length) {
    slidePosition = 1;
  }
  if(n<1){
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slidePosition - 1].style.display = "block";
}