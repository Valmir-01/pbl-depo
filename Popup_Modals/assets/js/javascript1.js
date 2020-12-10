const showAlert_body1 = () => {
  document.getElementById('alert_body1').classList.add('show')
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.height = '100vh';
  body.style.overflowY = 'hidden';
};
const closeAlert_body1 = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  body.style.height = '';
  body.style.overflowY = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  document.getElementById('alert_body1').classList.remove('show');
}
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});