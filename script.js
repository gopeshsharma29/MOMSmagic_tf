// navigation bar js----------

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');    
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');    
    })
};
// pages active js----------
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
});

// form time & date ----------
















