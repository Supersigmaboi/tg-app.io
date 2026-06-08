const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe.user;

console.log(user.id);       // появится в консоли браузера
console.log(user.username); // появится в консоли браузера