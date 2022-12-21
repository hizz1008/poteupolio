const navMenuCategory = document.querySelector('.nav_menu-category');
const navMenuCategoryContainer = document.querySelector(
  '.nav_menu-category-container'
);

function navOver() {
  navMenuCategoryContainer.style.height = '430px';
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

const slideContainer = document.querySelector('.slide_container'),
  prev = document.querySelector('.prev'),
  next = document.querySelector('.next');

makeClone();
// 슬라이드 너비 구하기
let slideItems = document.querySelectorAll('.slide_container li');

let slideCount = slideItems.length;
// 슬라이드 총 개수
let currentIndex = 0;

function makeClone() {
  let slideItems = document.querySelectorAll('.slide_container li');
  slideItems.forEach((i) => {
    const cloneSlide = i.cloneNode(true);
    cloneSlide.classList.add('clone');
    slideContainer.appendChild(cloneSlide);
  });
  for (let i = slideItems.length - 1; i >= 0; i--) {
    const cloneSlide = slideItems[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slideContainer.prepend(cloneSlide);
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

// 자동 슬라이드
let loopInterval = setInterval(() => {
  nextMove();
}, 5000);

slideContainer.addEventListener('mouseover', () => {
  clearInterval(loopInterval);
});
slideContainer.addEventListener('mouseout', () => {
  loopInterval = setInterval(() => {
    nextMove();
  }, 5000);
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

  startX = e.offsetX - slideItems.offsetLeft;
  startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
});

slideContainer.addEventListener('mouseup', (e) => {
  e.preventDefault();

  endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint < endPoint) {
    // 마우스가 오른쪽으로 드래그 된 경우

    prevMove();
  } else if (startPoint > endPoint) {
    // 마우스가 왼쪽으로 드래그 된 경우

    nextMove();
  }
});

// 모바일 터치 이벤트 (스와이프)
slideContainer.addEventListener('touchstart', (e) => {
  startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
});
slideContainer.addEventListener('touchend', (e) => {
  endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
  if (startPoint < endPoint) {
    // 오른쪽으로 스와이프 된 경우

    prevMove();
  } else if (startPoint > endPoint) {
    // 왼쪽으로 스와이프 된 경우

    nextMove();
  }
});

// 고객제안 슬라이드
const elemSlideView = document.querySelector('.elem-slides-view');
const elemSlideContainer = document.querySelector('.element-slide-container');
const elemSlide = document.querySelectorAll('.element-slide-container li');

let elemSlideCount = elemSlide.length;
let elemCurentIndex = 0;
let slideWidth = elemSlide[0].clientWidth;
let responsiveSlideView = 3;
let moveAmt = slideWidth * slideCount;

let slideMargin = 20;

// 슬라이드 너비 구하기
function updataWidth(elem, container) {
  const currentSlide = elem;
  const slideCount = currentSlide.length;
  let slideWidth = elem[0].clientWidth;
  let moveAmt = slideWidth * slideCount;
  const newWidth = moveAmt + 'px';
  container.style.width = newWidth;
}
window.addEventListener('resize', () => {
  resizeWidth();
});
window.addEventListener('load', () => {
  resizeWidth();
});
function resizeWidth() {
  currentWidth = document.querySelector('body').offsetWidth;
  if (currentWidth > 1500) {
    let slidesWidth = 335;
    moveAmt = slideWidth;
    elemSlide.forEach((i) => {
      i.style.width = slidesWidth + 'px';
    });
  } else if (currentWidth < 1580 && currentWidth > 960) {
    let slidesWidth =
      elemSlideView.offsetWidth - (responsiveSlideView - 1) * slideMargin;
    moveAmt = slidesWidth / 3;
    elemSlide.forEach((i) => {
      i.style.width = moveAmt + 'px';
    });
  } else if (currentWidth < 960) {
    let slidesWidth = elemSlideView.offsetWidth;
    moveAmt = slidesWidth;
    elemSlide.forEach((i) => {
      i.style.width = moveAmt + 'px';
    });
  }

  updataWidth(elemSlide, elemSlideContainer);
}

// //슬라이드 너비 구하기

function moveSlide(num) {
  elemSlideContainer.style.left = -(num * (moveAmt + slideMargin)) + 'px';
  elemCurentIndex = num;
}
updataWidth(elemSlide, elemSlideContainer);
// 오른쪽 이동
function elemNext() {
  if (elemCurentIndex < elemSlideCount - 4) {
    moveSlide(elemCurentIndex + 1);
  } else {
    moveSlide(0);
    elemSlideContainer.style.left = 0;
  }
}
// 왼쪽 이동
function elemPrev() {
  if (elemCurentIndex > 0) {
    moveSlide(elemCurentIndex - 1);
  }
}
// //이동 함수

// elemNextBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (elemCurentIndex < elemSlideCount - 4) {
//     moveSlide(elemCurentIndex + 1);
//     console.log(elemCurentIndex);
//   } else {
//     moveSlide(0);
//   }
// });

let pressed = false;
let startX;
let x;
function dragSlide(view, container) {
  view.addEventListener('mousedown', (e) => {
    pressed = true;
    startX = e.clientX - container.offsetLeft;
    elemSlideContainer.classList.remove('elem-slide-animated');
  });
  view.addEventListener('mouseup', () => {
    pressed = false;
    elemSlideContainer.classList.add('elem-slide-animated');
  });
  view.addEventListener('mouseleave', () => {
    pressed = false;
    elemSlideContainer.classList.add('elem-slide-animated');
  });

  view.addEventListener('mousemove', (e) => {
    if (!pressed) return;
    e.preventDefault();
    x = e.offsetX;
    container.style.left = `${x - startX}px`;
    checkboundary();
  });

  // 슬라이드뷰가 화면을 넘어가지 않게 하기 위한 함수
  function checkboundary() {
    let outer = view.getBoundingClientRect();
    let inner = container.getBoundingClientRect();
    if (parseInt(container.style.left) > 0) {
      container.style.left = '0px';
    } else if (inner.right < outer.right) {
      container.style.left = `0px`;
    }
  }
  // //슬라이드뷰가 화면을 넘어가지 않게 하기 위한 함수

  let elemStartPoint = 0;
  let elemEndPoint = 0;
  elemSlideView.addEventListener('mousedown', (e) => {
    elemStartPoint = e.pageX;
  });
  elemSlideView.addEventListener('mouseup', (e) => {
    elemEndPoint = e.pageX;
    if (elemStartPoint < elemEndPoint) {
      elemPrev();
    } else if (elemStartPoint > elemEndPoint) {
      elemNext();
    }
  });
}

dragSlide(elemSlideView, elemSlideContainer);
elemSlideView.addEventListener('touchmove', () => {
  console.log('앵냉');
});

// 반응형 레이아웃
// //고객제안 슬라이드
// const BSlideWrapper = document.querySelector('.bast-slides-wrap');
// const BSlideContainer = document.querySelector('.bast-slide-container');
// const BSlide = document.querySelectorAll('.bast-slide-container li');
