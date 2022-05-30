const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');
const closemenu = document.getElementById('closemenu');

document.onclick = function (e) {
  if (e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
    toggle.classList.remove('active');
    sidebar.classList.remove('active');
  }
};

toggle.onclick = function () {
  toggle.classList.toggle('active');
  sidebar.classList.toggle('active');
};
closemenu.onclick = function () {
  toggle.classList.toggle('active');
  sidebar.classList.toggle('active');
};
