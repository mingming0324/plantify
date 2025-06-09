console.clear();
$(function () {
    // AOS 적용 (한 번만 호출)
    AOS.init({
        duration: 1000,
        offset: 200
    });
    // 로딩페이지
    document.querySelector("body").classList.add("scroll-lock");
    
    setTimeout(() => {
        document.querySelector(".loading-container").classList.add("hidden");

        setTimeout(() => {
            document.querySelector(".loading-container").style.display = "none";
            document.querySelector("body").classList.remove("scroll-lock");
            document.querySelector(".main-content").style.display = "block";
        }, 500);
    }, 2000);

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

    // 메인 시작

    // 메인 끝

    // 어플 시작
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const el = entry.target;

                if (entry.isIntersecting) {
                    el.classList.remove(
                        "animate__fadeInTopLeft",
                        "animate__rollInRightTopZoom"
                    );

                    setTimeout(() => {
                        if (el.classList.contains("qr_box")) {
                            el.classList.add("animate__rollInRightTopZoom");
                        } else {
                            el.classList.add("animate__fadeInTopLeft");
                        }
                        el.style.opacity = "1";
                    }, 300);
                } else {
                    el.classList.remove(
                        "animate__fadeInTopLeft",
                        "animate__rollInRightTopZoom"
                    );
                    el.style.opacity = "0";
                }
            });
        },
        {
            threshold: 0,
            rootMargin: "0px 0px -100px 0px"
        }
    );

    document
        .querySelectorAll(".scroll-animate:not([data-aos])")
        .forEach((el) => observer.observe(el));

    // 어플 끝

    // 레시피 시작
    $(document).ready(function () {
        const $items = $(".recipe-item");
        const $activeItem = $(".recipe-item.recipe-item_stop");

        $items.hover(
            function () {
                const $this = $(this);

                // 기존 .active 항목을 일시적으로 비활성화
                if (!$this.hasClass("recipe-item_stop")) {
                    $activeItem.find(".img-item").stop().fadeIn(200);
                    $activeItem.find(".hover-box").stop().fadeOut(200);
                    $activeItem.find(".recipe-title").stop().fadeIn(200);
                    $activeItem.stop().animate({ width: "177px" }, 300);
                }

                // 현재 hover된 항목 효과 적용
                $this.find(".img-item").stop().fadeOut(200);
                $this.find(".hover-box").stop().fadeIn(200);
                $this.find(".recipe-title").stop().fadeOut(200);
                $this.stop().animate({ width: "804px" }, 300);
            },
            function () {
                const $this = $(this);

                // 현재 항목이 .active가 아니라면 hover 종료 시 원복
                if (!$this.hasClass("recipe-item_stop")) {
                    $this.find(".img-item").stop().fadeIn(200);
                    $this.find(".hover-box").stop().fadeOut(200);
                    $this.find(".recipe-title").stop().fadeIn(200);
                    $this.stop().animate({ width: "177px" }, 200);

                    // 그리고 기존 active 항목 다시 원상복귀
                    $activeItem.find(".img-item").stop().fadeOut(200);
                    $activeItem.find(".hover-box").stop().fadeIn(200);
                    $activeItem.find(".recipe-title").stop().fadeOut(200);
                    $activeItem.stop().animate({ width: "804px" }, 200);
                }
            }
        );
    });
    // 레시피 끝

    // 구독 시작

    // 구독 끝

    // 굿즈 시작
    const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 110,
        loop: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".next-button",
            prevEl: ".prev-button"
        }
    });
});
// 굿즈 끝


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