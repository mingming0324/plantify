gsap.registerPlugin(ScrollTrigger);

// 상단바 시작
$(".hd-sidemenu_box").click(function () {
  $(".logo_sidemenu").toggleClass("show_sidemenu");
  $(this).toggleClass("show_sidemenu");
  $(".sidemenu").toggleClass("show_sidemenu");
  $(".hd-con").toggleClass("show_sidemenu");
  $(".right-box").toggleClass("show_sidemenu");
});

$(".text-box_sidemenu > ul:first-child > li").mouseover(function () {
  $(this).find(".submenu").addClass("show_submenu");
});

$(".text-box_sidemenu > ul:first-child > li").mouseout(function () {
  $(this).find(".submenu").removeClass("show_submenu");
});

$(".right-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
// 상단바 끝

//메인
$(function () {
  // 약간의 딜레이 후 등장시키면 전환이 확실히 보임
  setTimeout(function () {
    $('.main_title').addClass('create_1');
    $('.main_text').addClass('create_1');
  }, 500);

  setTimeout(function () {
    $('.main_dukgu-img').addClass('is-in');
    $('.main_dukgu-efect').addClass('is-in'); 
  }, 1000);
});

//sec-2 
let tl_1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".app_sec-2",       
    start: "top 50%",      
    toggleActions: "play none none none" ,     
    // markers: true 
  },
  
  defaults: {
    ease: "power4.out" 
  }
});

tl_1.to(".create_2", {
  y: 0,
  opacity: 1,
  duration: 1.5,
});

//sec-3 
let tl_2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-3_wrap",       
    start: "top 40%",      
    toggleActions: "play none none none" ,     
    // markers: true 
  },
  
  defaults: {
    ease: "power4.out" 
  }
});

tl_1.to(".create_3", {
  x: 0,
  opacity: 1,
  duration: 2,
});

//sec-4 
let tl_3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sec-4_wrap",       
    start: "top 40%",      
    toggleActions: "play none none none" ,     
    // markers: true 
  },
  
  defaults: {
    ease: "power4.out" 
  }
});

tl_3.to(".create_4", {
  y: 0,
  opacity: 1,
  duration: 2,
});

// 푸터
$(window).on('scroll', function () {
  const box = $('.right-box');     // 따라다니는 박스
  const footer = $('footer');      // 푸터

  const boxHeight = box.outerHeight();     // 박스 높이
  const footerTop = footer.offset().top;   // 푸터가 문서에서 얼마나 아래에 있는지
  const scrollY = $(window).scrollTop();   // 지금 스크롤 얼마나 내렸는지
  const winHeight = $(window).height();    // 브라우저 창 높이

  // 박스가 지금 어디쯤인지 계산해보기
  const boxBottom = scrollY + winHeight - boxHeight - 100;

  // 박스가 푸터랑 겹치려 하면 딱 멈추게!
  if (boxBottom > footerTop) {
  box.css({
      position: 'absolute', // 고정된 거 아니고, 페이지 안에서 위치 고정
      top: footerTop - boxHeight - 20 + 'px', // 푸터보다 살짝 위에
      right: '4%',
  });
  } else {
    // 아직 푸터 안 닿았으면 계속 따라다니기
  box.css({
      position: 'fixed',  // 화면에 고정
      top: '70%',         // 아래쪽에 띄워놓기
      right: '4%',
  });
  }
});