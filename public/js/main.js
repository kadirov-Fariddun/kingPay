// пишем скрипт переключения по кнопку
const btnsRegister = document.querySelectorAll('.btn-country');
for (let i = 0; i < btnsRegister.length; i++) {
    const btn = btnsRegister[i];
    btn.onclick = ()=>{
        for (let j = 0; j < btnsRegister.length; j++) {
            const btn2 = btnsRegister[j];
            btn2.classList.remove('btn-active');
        }
        btn.classList.add('btn-active');
    }
}

// script открыть мобильный меню и закрыть 
const mobMenu = document.querySelector('.mobile-menu');
const btnOpenMobMenu = document.querySelector('.burger-btn');
const btnCloseMobMenu = document.querySelector('.close-btn');
// при нажатии на кнопку бургер открываем меню 
btnOpenMobMenu.onclick = () => {
    mobMenu.classList.add('mobile-menu-active');
}
// при нажатии на кнопку X закрываем меню 
btnCloseMobMenu.onclick = () => {
    mobMenu.classList.remove('mobile-menu-active');
}

