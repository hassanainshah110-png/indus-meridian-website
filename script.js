const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-product]').forEach(link => {
  link.addEventListener('click', () => {
    const select = document.getElementById('product-select');
    if (select) select.value = link.dataset.product;
  });
});

document.getElementById('inquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const emailTo = 'REPLACE_WITH_YOUR_BUSINESS_EMAIL';
  if (emailTo === 'REPLACE_WITH_YOUR_BUSINESS_EMAIL') {
    const status = document.getElementById('form-status');
    status.textContent = 'Website preview only: add your business email in script.js before publishing. No information has been sent.';
    status.scrollIntoView({behavior:'smooth', block:'nearest'});
    return;
  }
  const subject = encodeURIComponent('IME Business Inquiry — ' + data.get('product'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') + '\\n' +
    'Company: ' + data.get('company') + '\\n' +
    'Email: ' + data.get('email') + '\\n' +
    'Country: ' + data.get('country') + '\\n' +
    'Product: ' + data.get('product') + '\\n' +
    'Quantity: ' + data.get('quantity') + '\\n\\n' +
    'Requirements:\\n' + data.get('message')
  );
  window.location.href = 'mailto:' + emailTo + '?subject=' + subject + '&body=' + body;
});
