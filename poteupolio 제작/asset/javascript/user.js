const loginView = document.querySelector('.loginView');
const loginBtn = document.querySelector('.btn-left');

const signView = document.querySelector('.signView');
const signBtn = document.querySelector('.btn-right');

loginBtn.addEventListener('click', () => {
  loginBtn.classList.add('active');
  loginView.classList.remove('hide');

  signBtn.classList.remove('active');
  signView.classList.add('hide');

  loginBtn.classList.remove('inactive-left');
  signBtn.classList.add('inactive-right');
});

signBtn.addEventListener('click', () => {
  signBtn.classList.add('active');
  signView.classList.remove('hide');

  loginBtn.classList.remove('active');
  loginView.classList.add('hide');

  signBtn.classList.remove('inactive-right');
  loginBtn.classList.add('inactive-left');
});
