'use strict';
const nav = document.querySelector('#navigation');
const navToggle = document.querySelector('.menu-toggle');
navToggle.addEventListener('click', () => { const open = navToggle.getAttribute('aria-expanded') !== 'true'; navToggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); }));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); navToggle.focus(); } });
const moods = {
  day: { kicker: 'TAKE YOUR TIME', title: 'Let the city wait.', description: 'Coffee, tea and something to eat, surrounded by the textures of old Bangkok. Make it a quiet pause on your way through Nang Loeng.', tags: ['Coffee & tea', 'Slow conversations', 'Old-city wandering'], link: 'Explore the café selection ↗', href: '#menu' },
  night: { kicker: 'FOLLOW THE MUSIC', title: 'Stay for another set.', description: 'As the evening unfolds, live jazz and the bar take centre stage. Check the official social channels for the latest performers, set times and booking conditions.', tags: ['Live jazz', 'Cocktails', 'Confirm the current lineup'], link: 'Plan a jazz evening ↗', href: '#plan' }
};
document.querySelectorAll('[data-mood]').forEach(button => button.addEventListener('click', () => {
  const mood = button.dataset.mood, content = moods[mood];
  document.querySelectorAll('[data-mood]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  document.querySelector('#mood-panel').className = `mood-panel ${mood}`;
  for (const key of ['kicker', 'title', 'description']) document.querySelector(`#mood-${key}`).textContent = content[key];
  document.querySelector('#mood-tags').replaceChildren(...content.tags.map(tag => { const span = document.createElement('span'); span.textContent = tag; return span; }));
  const link = document.querySelector('#mood-link'); link.textContent = content.link; link.href = content.href;
}));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => { item.classList.toggle('active', item === button); item.setAttribute('aria-pressed', String(item === button)); });
  document.querySelectorAll('[data-category]').forEach(item => { item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter; });
}));
const dateInput = document.querySelector('#visit-date');
const bangkokToday = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Bangkok', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
dateInput.min = bangkokToday();
dateInput.addEventListener('input', () => dateInput.setCustomValidity(''));
document.querySelector('#visit-form').addEventListener('submit', event => {
  event.preventDefault();
  dateInput.min = bangkokToday();
  if (!dateInput.value || dateInput.value < dateInput.min) { dateInput.setCustomValidity('Please choose today or a future date in Bangkok.'); dateInput.reportValidity(); return; }
  dateInput.setCustomValidity('');
  const date = new Date(`${dateInput.value}T12:00:00+07:00`);
  const formatted = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Bangkok', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(date);
  const party = document.querySelector('#party').value;
  const result = document.querySelector('#plan-result');
  const title = document.createElement('strong'); title.textContent = 'Your illustrative visit plan';
  const summary = document.createElement('p'); summary.textContent = `${formatted} · ${document.querySelector('#time').value} (Bangkok) · ${party} ${party === '1' ? 'guest' : 'guests'} · ${document.querySelector('#seating').value}.`;
  const disclaimer = document.createElement('p'); disclaimer.textContent = 'Demo only — no reservation has been submitted. Please contact the business to make an actual booking. Your preferred time and seat are not confirmed.';
  const contact = document.createElement('a'); contact.href = 'tel:+66615859283'; contact.textContent = 'Call Buddha & Pals: 061 585 9283 ↗';
  result.replaceChildren(title, summary, disclaimer, contact); result.hidden = false; result.focus();
});
