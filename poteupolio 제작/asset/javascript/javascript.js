const navMenuCategory = document.querySelector('.nav_menu-category');
const navMenuCategoryContainer = document.querySelector(
  '.nav_menu-category-container'
);

function navOver() {
  navMenuCategoryContainer.style.height = '450px';
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

// //자동 슬라이드

// //드래그 슬라이드
// let stratPoint = 0;
// let endPoint = 0;
// //PC 클릭 이벤트
// slideContainer.addEventListener('mousedown', (e) => {
//   stratPoint = e.pageX;
// });

// slideContainer.addEventListener('mouseup', (e) => {
//   endPoint = e.pageX;
//   if (stratPoint < endPoint) {
//     prevMove();
//   } else if (stratPoint > endPoint) {
//     nextMove();
//   }
// });

// //모바일 터치 이벤트
// slideContainer.addEventListener('touchstart', (e) => {
//   stratPoint = e.touches[0].pageX;
// });
// slideContainer.addEventListener('thouchend', (e) => {
//   endPoint = e.changedTouches[0].pageX;
//   if (stratPoint > endPoint) {
//     prevMove();
//   } else if (endPoint > stratPoint) {
//     nextMove();
//   }
// });

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
<<<<<<< HEAD
=======

// 고객제안 슬라이드
const elemSlideContainer = document.querySelector('.element-slide-container');
const elemPrev = document.querySelector('.element-prev');
const elemNext = document.querySelector('.element-next');

let elemSlideItems = document.querySelectorAll('.element-slide-container li');

let elemSlideCount = elemSlideItems.length;

let elemCurrentIndex = 0;

function elemNextMove() {
  elemCurrentIndex++;
}
// //고객제안 슬라이드
>>>>>>> parent of 6745c1a (slide 고객제안 완성)
