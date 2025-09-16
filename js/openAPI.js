async function loadBooksToSections() {
    const REST_API_KEY = '9eccad97c9d89d8994820bed8b25710a';

    // 섹션별 쿼리와 wrapper 선택자 매핑
    const sections = [
        { selector: '.section5_swiper .swiper-wrapper', query: '집가고싶다' ,size:10},
        { selector: '.section6_swiper .swiper-wrapper', query: '추천 ' ,size:6},
        { selector: '.section7_swiper .swiper-wrapper', query: 'AI기초',size:50 },
        { selector: '.section11_swiper .swiper-wrapper', query: '인기',size:10 },
        { selector: '.section14_swiper .swiper-wrapper', query: '교보문고',size:12 },
        { selector: '.section15_swiper .swiper-wrapper', query: '출판',size:7 },

        // 필요하면 더 추가
    ];

    sections.forEach(async ({ selector, query, size }) => {
        const wrapper = document.querySelector(selector);
        if (!wrapper) return; // 혹시 섹션이 없으면 무시

        const params = new URLSearchParams({
            target: 'title',
            query: query,
            size: size
        });

        const url = `https://dapi.kakao.com/v3/search/book?${params}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: { Authorization: `KakaoAK ${REST_API_KEY}` }
            });
            if (!response.ok) throw new Error('HTTP 오류 ' + response.status);

            const data = await response.json();
            const books = data.documents;

            wrapper.innerHTML = ''; // 기존 슬라이드 초기화

            books.forEach(book => {
                const slide = document.createElement('div');
                slide.classList.add('swiper-slide');
                slide.innerHTML = `
                    <a href="#">
                        <div class="section_slide">
                            <img src="${book.thumbnail}" alt="${book.title}">
                        </div>
                        <span class="section_span">${book.title}</span>
                    </a>
                `;
                wrapper.appendChild(slide);
            });

            // Swiper가 이미 초기화되어 있다면 업데이트
            if (wrapper.swiper) wrapper.swiper.update();

        } catch (error) {
            console.error(`${query} 로딩 오류:`, error);
        }
    });
}

document.addEventListener('DOMContentLoaded', loadBooksToSections);
