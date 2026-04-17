// Theme toggle: persist choice and respect prefers-color-scheme
const toggle = document.getElementById('theme-toggle');

function applyTheme(dark){
  document.documentElement.classList.toggle('dark', dark);
  toggle.setAttribute('aria-pressed', String(!!dark));
  toggle.textContent = dark ? '☾' : '☼';
}

const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
let isDark;
if(saved === 'dark' || saved === 'light') isDark = saved === 'dark';
else isDark = prefersDark;
applyTheme(isDark);

toggle.addEventListener('click', ()=>{
  const nowDark = !document.documentElement.classList.contains('dark');
  applyTheme(nowDark);
  localStorage.setItem('theme', nowDark ? 'dark' : 'light');
});

toggle.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter' || e.key === ' '){
    e.preventDefault();
    toggle.click();
  }
});
