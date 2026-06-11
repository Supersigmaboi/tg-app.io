// /*   <!--Кнопка флага--> */
let currentLang = 'ru';

// Храним HTML-код картинок для каждого языка
const flags = {
  ru: `<img src="https://flagcdn.com/16x12/ru.png" width="18" height="14" alt="Russia">`,
  en: `<img src="https://flagcdn.com/16x12/us.png" width="18" height="14" alt="United States">`
};

function toggleLanguage() {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';

  // Меняем флаг через innerHTML, так как теперь это HTML-тег img, а не просто текст
  document.getElementById('flagEmoji').innerHTML = flags[currentLang];

  // Меняем все тексты с атрибутами data-ru / data-en
  document.querySelectorAll('[data-ru]').forEach(el => {
    el.textContent = el.getAttribute('data-' + currentLang);
  });
}
// /*   <!--/Кнопка флага--> */




//  /*   <!--Кнопка звука-->*/
const states = [
  { icon: 'ti-volume-off', label: '0%'   },
  { icon: 'ti-volume-2',     label: '50%'  },
  { icon: 'ti-volume',   label: '100%' }
];

let index = 0;
const btn = document.getElementById('soundBtn');
const icon = btn.querySelector('i');

btn.addEventListener('click', () => {
  index = (index + 1) % states.length;
  icon.className = 'ti ' + states[index].icon;
  btn.setAttribute('aria-label', 'Звук ' + states[index].label);

  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
});
//  /*   <!--/Кнопка звука-->*/



// /* <!--Данные пользователя--> */
const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
const infoBlock = document.getElementById('user-info');
const iconBlock = document.getElementById('user-icon');

if (user) {
  infoBlock.innerHTML = `<h1>${user.first_name}</h1>`;
  
  // Исправлено: добавлены фигурные скобки для первого if
  if (user.photo_url) {
    iconBlock.innerHTML = `<img src="${user.photo_url}" alt="avatar">`;
  }
} else {
  iconBlock.innerHTML = `<img src="static/img/avatar-profile.jpg" alt="avatar">`;
  infoBlock.innerHTML = '<h2>Night</h2>';
}
// /* <!--/Данные пользователя--> */



// /* <!--Кнопка пополнить--> */
// /* <!--/Кнопка пополнить--> */



// /* <!--Таб баланс--> */
// /* <!--/Таб баланс--> */



// /* <!--Таб стата,инвентарь--> */
function switchTab(tab) {
  // Убираем active у всех кнопок
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active',
      (i === 0 && tab === 'inventory') ||
      (i === 1 && tab === 'stats')
    );
  });

  // Показываем нужную панель
  document.getElementById('tab-inventory').classList.toggle('active', tab === 'inventory');
  document.getElementById('tab-stats').classList.toggle('active', tab === 'stats');
}
// /* <!--/Таб стата,инвентарь--> */



// /* <!--Продать всё--> */
// /* <!--/Продать всё--> */


function navigate(button) {
    const page = button.dataset.page;

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    button.classList.add('active');

    window.location.href = page;
}