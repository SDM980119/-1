    
        //섹션1의 1번 슬라이드  
        var swiper = new Swiper(".section1_1", {
            loop:true,
                autoplay: {
                    delay: 4500,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",

                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                    clickable: true,
                }
        });
        //섹션1의 2번 슬라이드
        var swiper = new Swiper(".section1_2", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",

                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                    clickable: true,
                }
        });
        //섹션3의 1번 슬라이드
        // .swiper-slide {
        //     flex-shrink: 0;
        //     width: 100%;
        //     height: 100%;
        //     position: relative;
        //     transition-property: transform;
        //     display: block}
        //섹션3의 2번 슬라이드 
        var swiper = new Swiper(".section3_mid_2_2", {
                loop:true,
                slidesPerView: 3,
                spaceBetween: 30,
                allowTouchMove: false,
                navigation: {
                    nextEl: ".section3_circle2",
                    prevEl: ".section3_circle1",
                }
        });


        //섹션5번 슬라이드 끝에서 끝으로 이동 가능!
        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".section5_swiper", {
                slidesPerView: 6,
                spaceBetween: 30,
                allowTouchMove: false,
            });

            const slideStep = 6; // 👈 한 번 클릭할 때 넘길 슬라이드 수

            document.querySelector('.section5_circle2').addEventListener('click', function () {
                const nextIndex = swiper.activeIndex + slideStep;
                const maxIndex = swiper.slides.length - swiper.params.slidesPerView;

                swiper.slideTo(Math.min(nextIndex, maxIndex)); // 범위 초과 방지
            });

            document.querySelector('.section5_circle1').addEventListener('click', function () {
                const prevIndex = swiper.activeIndex - slideStep;
                swiper.slideTo(Math.max(prevIndex, 0)); // 최소 0 이상
            });
        });











        //new
        var swiper = new Swiper(".new_item", {
            slidesPerView: 6,
            spaceBetween: 0,
            centeredSlides: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
        });
