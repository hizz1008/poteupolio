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
const elemSlideWrapper = document.querySelector('.elem-slides-view');
const elemSlideContainer = document.querySelector('.element-slide-container');
const elemSlide = document.querySelectorAll('.element-slide-container li');
const elemPrevBtn = document.querySelector('.elem-prev');
const elemNextBtn = document.querySelector('.elem-next');

let elemSlideCount = elemSlide.length;
let elemCurentIndex = 0;
let slideWidth = elemSlide[0].clientWidth;
let slideMargin = 20;

// 슬라이드 너비 구하기
function updataWidth(elem, container) {
  const currentSlide = elem;
  const slideCount = currentSlide.length;
  let slideWidth = elem[0].clientWidth;
  let slideMargin = 20;

  const newWidth = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';
  container.style.width = newWidth;
}
function moveSlide(num) {
  elemSlideContainer.style.left = -num * 355 + 'px';
  elemCurentIndex = num;
}
// //슬라이드 너비 구하기

// 오른쪽 이동
function elemNext() {
  if (elemCurentIndex < elemSlideCount - 4) {
    moveSlide(elemCurentIndex + 1);
    console.log(elemCurentIndex);
  } else {
    moveSlide(0);
  }
}
// 왼쪽 이동
function elemPrev() {
  if (elemCurentIndex > 0) {
    moveSlide(elemCurentIndex - 1);
  } else {
  }
}
elemNextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  elemNext();
});
elemPrevBtn.addEventListener('click', (e) => {
  e.preventDefault();
  elemPrev();
});
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
updataWidth(elemSlide, elemSlideContainer);

let pressed = false;
let startX;
let x;
function slide(wrap, container) {
  wrap.addEventListener('mousedown', (e) => {
    pressed = true;
    startX = e.clientX - container.offsetLeft;
    console.log(e.offsetX);
    elemSlideContainer.classList.remove('elem-slide-animated');
  });
  wrap.addEventListener('mouseup', () => {
    pressed = false;
    elemSlideContainer.classList.add('elem-slide-animated');
  });
  wrap.addEventListener('mouseleave', () => {
    pressed = false;
    elemSlideContainer.classList.add('elem-slide-animated');
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
      container.style.left = `0px`;
    }
  }
}
let elemStartPoint = 0;
let elemEndPoint = 0;
elemSlideWrapper.addEventListener('mousedown', (e) => {
  elemStartPoint = e.pageX;
});
elemSlideWrapper.addEventListener('mouseup', (e) => {
  elemEndPoint = e.pageX;
  if (elemStartPoint < elemEndPoint) {
    elemPrev();
  } else if (elemStartPoint > elemEndPoint) {
    elemNext();
  }
});

slide(elemSlideWrapper, elemSlideContainer);

// //고객제안 슬라이드
// const BSlideWrapper = document.querySelector('.bast-slides-wrap');
// const BSlideContainer = document.querySelector('.bast-slide-container');
// const BSlide = document.querySelectorAll('.bast-slide-container li');
