    
        //섹션1의 1번 슬라이드  
        var swiper1 = new Swiper(".section1_1", {
            loop:true,
                autoplay: {
                    delay: 500,
                    disableOnInteraction: false,
                    
                },
                navigation: {
                    nextEl: ".section1_nav2",
                    prevEl: ".section1_nav1",

                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "custom",
                    renderCustom: function (swiper, current, total) {
                        return current + ' - ' + total;
                    },
                }
        });
            document.querySelector('.swiper_stop_1_2').addEventListener('click', () => {
            swiper1.autoplay.start();
            });

            document.querySelector('.swiper_stop_1_1').addEventListener('click', () => {
            swiper1.autoplay.stop();
            });

                const playBtn = document.querySelector('.swiper_stop_1_1'); // 정지 모양
                const pauseBtn = document.querySelector('.swiper_stop_1_2'); // 재생 모양

                playBtn.addEventListener('click', () => {
                    playBtn.style.display = 'none';   // 정지 모양 숨기기
                    pauseBtn.style.display = 'block'; // 재생 모양 표시
                    // 여기에 슬라이더 재생 기능 추가 가능
                });

                pauseBtn.addEventListener('click', () => {
                    pauseBtn.style.display = 'none';   // 재생 모양 숨기기
                    playBtn.style.display = 'block';   // 정지 모양 표시
                    // 여기에 슬라이더 정지 기능 추가 가능
                }); 



        //섹션1의 2번 슬라이드
        var swiper = new Swiper(".section1_2", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",

                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "custom",
                    renderCustom: function (swiper, current, total) {
                        return current + ' - ' + total;
                    },
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

        //섹션12번 슬라이드
        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".section12_swiper", {
                slidesPerView: 6,
                spaceBetween: 30,
                allowTouchMove: false,
            });

            const slideStep = 6; // 👈 한 번 클릭할 때 넘길 슬라이드 수

            document.querySelector('.section12_circle2').addEventListener('click', function () {
                const nextIndex = swiper.activeIndex + slideStep;
                const maxIndex = swiper.slides.length - swiper.params.slidesPerView;

                swiper.slideTo(Math.min(nextIndex, maxIndex)); // 범위 초과 방지
            });

            document.querySelector('.section12_circle1').addEventListener('click', function () {
                const prevIndex = swiper.activeIndex - slideStep;
                swiper.slideTo(Math.max(prevIndex, 0)); // 최소 0 이상
            });
        });



        //섹션16번 슬라이드
        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".section16_swiper", {
                slidesPerView: 5,
                spaceBetween: 30,
                allowTouchMove: false,
            });

            const slideStep = 10; // 👈 한 번 클릭할 때 넘길 슬라이드 수

            document.querySelector('.section16_circle2').addEventListener('click', function () {
                const nextIndex = swiper.activeIndex + slideStep;
                const maxIndex = swiper.slides.length - swiper.params.slidesPerView;

                swiper.slideTo(Math.min(nextIndex, maxIndex)); // 범위 초과 방지
            });

            document.querySelector('.section16_circle1').addEventListener('click', function () {
                const prevIndex = swiper.activeIndex - slideStep;
                swiper.slideTo(Math.max(prevIndex, 0)); // 최소 0 이상
            });
        });





        // 섹션17번 슬라이드
        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".section17_swiper", {
                slidesPerView: 3,
                spaceBetween: 30,
                allowTouchMove: false,
            });

            const slideStep = 6; // 👈 한 번 클릭할 때 넘길 슬라이드 수

            document.querySelector('.section17_circle2').addEventListener('click', function () {
                const nextIndex = swiper.activeIndex + slideStep;
                const maxIndex = swiper.slides.length - swiper.params.slidesPerView;

                swiper.slideTo(Math.min(nextIndex, maxIndex)); // 범위 초과 방지
            });

            document.querySelector('.section17_circle1').addEventListener('click', function () {
                const prevIndex = swiper.activeIndex - slideStep;
                swiper.slideTo(Math.max(prevIndex, 0)); // 최소 0 이상
            });
        });



        //통합 슬라이드
    document.addEventListener("DOMContentLoaded", function () {
    const slideStep = 6; // 한 번에 이동할 슬라이드 수

    // 관리할 섹션 리스트
    const sections = [
        { swiper: ".section5_swiper", prev: ".section5_circle1", next: ".section5_circle2" },
        { swiper: ".section6_swiper", prev: ".section6_circle1", next: ".section6_circle2" },
        { swiper: ".section7_swiper", prev: ".section7_circle1", next: ".section7_circle2" },
        { swiper: ".section9_swiper", prev: ".section9_circle1", next: ".section9_circle2" },
        { swiper: ".section11_swiper", prev: ".section11_circle1", next: ".section11_circle2" },
        { swiper: ".section14_swiper", prev: ".section14_circle1", next: ".section14_circle2" },
        { swiper: ".section15_swiper", prev: ".section15_circle1", next: ".section15_circle2" },
    ];

    sections.forEach(({ swiper, prev, next }) => {
        const swiperInstance = new Swiper(swiper, {
            slidesPerView: 6,
            spaceBetween: 30,
            allowTouchMove: false,
        });

        // 다음 버튼
        document.querySelectorAll(next).forEach(btn => {
            btn.addEventListener("click", () => {
                const nextIndex = swiperInstance.activeIndex + slideStep;
                const maxIndex = swiperInstance.slides.length - swiperInstance.params.slidesPerView;
                swiperInstance.slideTo(Math.min(nextIndex, maxIndex));
            });
        });

        // 이전 버튼
        document.querySelectorAll(prev).forEach(btn => {
            btn.addEventListener("click", () => {
                const prevIndex = swiperInstance.activeIndex - slideStep;
                swiperInstance.slideTo(Math.max(prevIndex, 0));
            });
        });
    });
});





