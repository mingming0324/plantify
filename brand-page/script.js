
//헤더 상단바
$(".hd-sidemenu_box").click(function() {
  $(".logo_sidemenu").toggleClass("show_sidemenu");
  $(this).toggleClass("show_sidemenu");
  $(".sidemenu").toggleClass("show_sidemenu");
  $(".hd-con").toggleClass("show_sidemenu");
  $(".right-box").toggleClass("show_sidemenu");
});

$(".text-box > ul:first-child > li").mouseover(function() {
  $(this).find(".submenu").addClass("show_submenu");
});

$(".text-box > ul:first-child > li").mouseout(function() {
  $(this).find(".submenu").removeClass("show_submenu");
});

$(".right-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});




// 페이지 부분
// $(window).on('scroll', function () {
//   const scrollTop = $(this).scrollTop();
//   const triggerPoint = 100;

//   const $textWrap = $('.text-wrap');

//   if (scrollTop > triggerPoint) {
//     // 스크롤 내려갔을 때: 위로 사라지기
//     if (!$textWrap.hasClass('animate__fadeOutUp')) {
//       $textWrap
//         .removeClass('animate__fadeInUp reset')
//         .addClass('animate__animated animate__fadeOutUp');
//     }
//   } else {
//     // 스크롤 위로 올라왔을 때: 아래에서 위로 나타나기
//     if (!$textWrap.hasClass('animate__fadeInUp')) {
//       $textWrap
//         .removeClass('animate__fadeOutUp reset')
//         .addClass('animate__animated animate__fadeInUp');
//     }
//   }
// });

let isVisible = true;

$(window).on('scroll', function () {
  const scrollTop = $(this).scrollTop();
  const triggerPoint = 100;
  const $textWrap = $('.text-wrap');

  if (scrollTop > triggerPoint && isVisible) {
    // 사라지는 타이밍
    isVisible = false;
    $textWrap
      .removeClass('animate__fadeInUp')
      .addClass('animate__animated animate__fadeOutUp');
  }

  if (scrollTop <= triggerPoint && !isVisible) {
    // 다시 나타나는 타이밍
    isVisible = true;
    $textWrap
      .removeClass('animate__fadeOutUp')
      .addClass('animate__animated animate__fadeInUp');
  }
});



// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);

//   // leaf를 왼쪽에서 들어오게
//   gsap.fromTo(".leaf",
//     { x: 380 }, // 중앙 시작
//     {
//       x: 0, // 왼쪽으로 이동
//       scrollTrigger: {
//         trigger: ".item-wrap",
//         start: "top bottom",
//         end: "center center -30%",
//         scrub: true,
//       }
//     }
//   ); 

//   // carrot을 오른쪽에서 들어오게
//   gsap.fromTo(".carrot",
//     { x: -440 }, // 중앙 시작
//     {
//       x: 0, // 오른쪽으로 이동
//       scrollTrigger: {
//         trigger: ".item-wrap",
//         start: "top bottom",
//         end: "center center -30%",
//         scrub: true,
//       }
//     }
//   );
// });

// 서비스 섹션 AOS
AOS.init();

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".first", {
    scrollTrigger: {
      trigger: ".item-wrap", // 스크롤 기준이 되는 요소
      start: "top bottom",   // 화면 중앙에 도달하면 시작
      end: "center center -20%",     // 위로 사라질 때까지
      scrub: true,
      id: "fadeOutUpFirst"
    },
    y: -100,
    opacity: 0,
    ease: "none"
  });
});

// footer
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