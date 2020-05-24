$('.item>h2').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
$(document).ready(function(){
        $(".dropdown").click(function(){
            $(this).find(".dropdown-menu").slideToggle("fast");
        });
    });
    $(document).on("click", function(event){
        var $trigger = $(".dropdown");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdown-menu").slideUp("fast");
        }            
    });
    function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}
$('.slider-wrapper').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:true,
  autoplay:true,
  arrows:false,
   ltr:true,
  autoplaySpeed: 2000
});

         $(document).ready(function(){
            $(".myText").hide();
    $(".toggle-btn").click(function(){
        $(".myText").toggle();
    });
   });

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1550,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  
function loop(t) {
  animation.tick(t);
  customRAF = requestAnimationFrame(loop);
}
  $(document).ready(function() {
    var nav = $('.topnav'),
        btn = $('.icon-one');

    btn.click(function() {
        nav.slideToggle();
        $('.icon-one .fa').toggleClass('fa-bars');
        $('.icon-one .fa').toggleClass('fa-times');       
    });
  });