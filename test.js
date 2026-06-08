const user = window.Telegram?.WebApp?.initDataUnsafe?.user;

if (user) {
  document.body.innerHTML = `
    <p>ID: ${user.id}</p>
    <p>Ник: @${user.username || 'нет никнейма'}</p>
  `;
} else {
  document.body.innerHTML = '<p>Открой в Telegram</p>';
}