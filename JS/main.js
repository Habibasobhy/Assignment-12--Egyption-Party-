
// &    Start Loading      &//
$(document).ready(function () {
    $(".lds-spinner").fadeOut(1000 , function(){
        $("#loading").fadeOut(1000 ,function(){
            $("#loading").remove();
            $("body,html").css({"overflow" : "auto"});
        })
    });
});
// &    End Loading      &//

//^ ==================================================== ^//

// &    Start SideBar      &//

// To make Menu Closed when open site
let menuWidth = $(".sideBar-inner").innerWidth();
$(".sideBar-inner").css({"left" : -menuWidth});
$(".sideBar-open").css({"left" : "15px"});

// to close Menu
$(".sideBar-inner i").click(function(){
    console.log(menuWidth);

    $(".sideBar-inner").animate({left : -menuWidth},460);
    $(".sideBar-open").animate({"left" : "15px"},460)
})

// To open Menu
$(".sideBar-open").click(function(){
    $(".sideBar-inner").animate({left : 0},460);
    $(".sideBar-open").animate({"left" : "260px"},460)
})

// * Scroll smooth *//

$("a[href^='#']").click(function(e){
  let aHref = e.target.getAttribute("href");
  // console.log(aHref);

  sectionOffset = $(aHref).offset().top;
  // console.log(sectionOffset);
  
  $("html,body").animate({scrollTop : sectionOffset} , 1000);
})

// &    End SideBar      &//

//^ ==================================================== ^//

// &    Start sliderDown      &//
$("#sliderDown h3").click(function(e){
    // console.log(e.target);

    let headerTarget  = $(e.target);   // To get the header (h3) when clicking on it

    // 3l4an a5ly al paragraph al b3d al h3 ally h click 3leh y toggle
    headerTarget.next().slideToggle(500); 

    // To make ba2y al paragraphs slideUp (yb2o d-none)
    $("#sliderDown .slider p").not(headerTarget.next()).slideUp(500); 
});
// &    End sliderDown      &//

//^ ==================================================== ^//

// &    Start countDown      &//

// Set the date we're counting down to
let countDown = new Date("Jan 30, 2024 15:37:25"); 
// console.log(countDown);

// "Jan 30, 2024 15:37:25"
// "Aug 21, 2023 22:24:00"

// Update the count down every 1 second
let updateCountDown = setInterval(function() {

    // Get today's date and time
    let timeNow = new Date();
    // console.log(timeNow);
  
    // Find the differenceTime between timeNow and the count down date
    let differenceTime = countDown - timeNow;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(differenceTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((differenceTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((differenceTime % (1000 * 60)) / 1000);
  
    // Display the result in the element 
    document.querySelector(".days").innerHTML ="-" + days + " D";
    document.querySelector(".hours").innerHTML = hours + " h";
    document.querySelector(".minutes").innerHTML = minutes + " m";
    document.querySelector(".seconds").innerHTML = seconds + " s";
    
  // console.log(differenceTime);
    // If the count down is finished, write some text and clear interval
    if (differenceTime < 0) {
      clearInterval(updateCountDown);
      $(".row").fadeOut(0, function(){
        $(".demo").fadeIn(1000);
      });
    }
  }, 1000);

// &    End countDown      &//

//^ ==================================================== ^//

// &    Start Contact      &//

let maxLength = 100;
$("#textArea").keyup(function(){
  let textLength = maxLength - $(this).val().length;

  // console.log(textLength);

  if(textLength <= 0){
    $("#rChars").text("your available character finished");
  }
  else{
    $("#rChars").text(textLength);
  }
})

// &    End Contact      &//