const navMenuCategory = document.querySelector('.nav_menu-category');
const navMenuCategoryContainer = document.querySelector(
  '.nav_menu-category-container'
);

function navOver() {
  navMenuCategoryContainer.style.height = '500px';
}
function navOuth() {
  navMenuCategoryContainer.style.height = '0';
}
navMenuCategory.addEventListener('mouseover', navOver);
navMenuCategory.addEventListener('mouseout', navOuth);
//네비 호버

// 로그인 유저 버튼
const headerUser = document.querySelector('.header_user');
const headerUserInfo = document.querySelector('.header_user_info');

headerUser.addEventListener('click', () => {
  headerUserInfo.classList.toggle('show');
});
// headerUser.addEventListener('blur', () => {
//   headerUserInfo.classList.remove('show');

// });

//로그인 탭메뉴

const signUpBtn = document.querySelector('.sign-up-btn');
const loginWrap = document.querySelector('.login-wrap');
const dim = document.querySelector('.dim');

signUpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loginWrap.classList.remove('hide');
  dim.classList.remove('hide');
});

const cencel = document.querySelector('.btn-cencel');

cencel.addEventListener('click', (e) => {
  e.preventDefault();
  loginWrap.classList.add('hide');
  dim.classList.add('hide');
});

// 슬라이드

const slideContanier = document.querySelector('.slide_contanier'),
  prev = document.querySelector('.prev'),
  next = document.querySelector('.next');

makeClone();
// 슬라이드 너비 구하기
let slideItems = document.querySelectorAll('.slide_contanier li');

let slideCount = slideItems.length;
// 슬라이드 총 개수
let currentIndex = 0;

function makeClone() {
  let slideItems = document.querySelectorAll('.slide_contanier li');
  slideItems.forEach((i) => {
    const cloneSlide = i.cloneNode(true);
    cloneSlide.classList.add('clone');
    slideContanier.appendChild(cloneSlide);
  });
  for (let i = slideItems.length - 1; i >= 0; i--) {
    const cloneSlide = slideItems[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slideContanier.prepend(cloneSlide);
  }
}

function nextMove() {
  currentIndex++;
  if (currentIndex < slideCount) {
    slideItems.forEach((i) => {
      i.setAttribute('style', `left:${currentIndex * -100}%`);
    });
  } else {
    currentIndex = 0;
    slideItems.forEach((i) => {
      i.setAttribute('style', `transition:${0}s; left:${currentIndex * -100}%`);
    });
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute(
          'stlye',
          `transition:${0.15}s; left:${currentIndex * -100}%`
        );
      });
    }, 50);
  }
}

function prevMove() {
  currentIndex--;
  if (currentIndex >= 0) {
    slideItems.forEach((i) => {
      i.setAttribute('style', `left:${currentIndex * -100}%`);
    });
  } else {
    currentIndex = slideCount;
    currentIndex--;
    slideItems.forEach((i) => {
      i.setAttribute('style', `transition:${0}s; left:${currentIndex * -100}%`);
    });
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute(
          'stlye',
          `transition:${0.15}s; left:${currentIndex * -100}%`
        );
      });
    }, 50);
  }
}

// 자동 슬라이드
let loopInterval = setInterval(() => {
  nextMove();
  console.log('dks');
}, 5000);

slideContanier.addEventListener('mouseover', () => {
  clearInterval(loopInterval);
  console.log('오버');
});
slideContanier.addEventListener('mouseout', () => {
  loopInterval = setInterval(() => {
    console.log('아웃');
    nextMove();
  }, 5000);
});

// 오른쪽 이동
next.addEventListener('click', (e) => {
  e.preventDefault();
  nextMove();
});

// 왼쪽 이동
prev.addEventListener('click', (e) => {
  e.preventDefault();
  prevMove();
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// //자동 슬라이드

let startPoint = 0;
let endPoint = 0;

// PC 클릭 이벤트 (드래그)
slideContainer.addEventListener('mousedown', (e) => {
  e.preventDefault();

  console.log('mousedown', e.pageX);
  startX = e.offsetX - slideItems.offsetLeft;
  startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
});

slideContainer.addEventListener('mouseup', (e) => {
  e.preventDefault();

  console.log('mouseup', e.pageX);

  endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint < endPoint) {
    // 마우스가 오른쪽으로 드래그 된 경우
    console.log('prev move');
    prevMove();
  } else if (startPoint > endPoint) {
    // 마우스가 왼쪽으로 드래그 된 경우
    console.log('next move');
    nextMove();
  }
});

// 모바일 터치 이벤트 (스와이프)
slideContainer.addEventListener('touchstart', (e) => {
  console.log('touchstart', e.touches[0].pageX);
  startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
});
slideContainer.addEventListener('touchend', (e) => {
  console.log('touchend', e.changedTouches[0].pageX);
  endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
  if (startPoint < endPoint) {
    // 오른쪽으로 스와이프 된 경우
    console.log('prev move');
    prevMove();
  } else if (startPoint > endPoint) {
    // 왼쪽으로 스와이프 된 경우
    console.log('next move');
    nextMove();
  }
});

// 고객제안 슬라이드
const elemSlideWrapper = document.querySelector('.element-slides-wrap');
const elemSlideContainer = document.querySelector('.element-slide-container');
const elemSlide = document.querySelectorAll('.element-slide-container li');
const BSlideWrapper = document.querySelector('.bast-slides-wrap');
const BSlideContainer = document.querySelector('.bast-slide-container');
const BSlide = document.querySelectorAll('.bast-slide-container li');
const elemSlideCount = elemSlide.length;
function updataWidth(elem, container) {
  const currentSlide = elem;
  const slideCount = currentSlide.length;
  let slideWidth = elem[0].clientWidth;
  const newWidth = slideWidth * slideCount + 'px';
  container.style.width = newWidth;
=======

// 고객제안 슬라이드
=======

// 고객제안 슬라이드
>>>>>>> parent of 5312c30 (slide.js 수정)
=======

// 고객제안 슬라이드
>>>>>>> parent of 5312c30 (slide.js 수정)
const elemSlideContanier = document.querySelector('.element-slide-contanier');
const elemPrev = document.querySelector('.element-prev');
const elemNext = document.querySelector('.element-next');

let elemSlideItems = document.querySelectorAll('.element-slide-contanier li');

let elemSlideCount = elemSlideItems.length;

let elemCurrentIndex = 0;

function elemNextMove() {
  elemCurrentIndex++;
>>>>>>> parent of 5312c30 (slide.js 수정)
}
updataWidth(elemSlide, elemSlideContainer);
updataWidth(BSlide, BSlideContainer);
let pressed = false;
let startX;
let x;
function slide(wrap, container) {
  wrap.addEventListener('mousedown', (e) => {
    pressed = true;
    startX = e.offsetX - container.offsetLeft;
  });
  wrap.addEventListener('touchstart', (e) => {
    pressed = true;
    startX = e.offsetX - container.offsetLeft;
  });
  wrap.addEventListener('mouseenter', () => {});
  wrap.addEventListener('mouseup', () => {});
  wrap.addEventListener('mouseup', () => {
    pressed = false;
  });
  wrap.addEventListener('touchend', () => {
    pressed = false;
  });
  wrap.addEventListener('mousemove', (e) => {
    if (!pressed) return;
    e.preventDefault();
    x = e.offsetX;
    container.style.left = `${x - startX}px`;
    checkboundary();
  });
  function checkboundary() {
    let outer = wrap.getBoundingClientRect();
    let inner = container.getBoundingClientRect();
    if (parseInt(container.style.left) > 0) {
      container.style.left = '0px';
    } else if (inner.right < outer.right) {
      container.style.left = `-${inner.width - outer.width}px`;
    }
  }
}
slide(elemSlideWrapper, elemSlideContainer);
slide(BSlideWrapper, BSlideContainer);
// //고객제안 슬라이드
