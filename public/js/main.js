// проверяем какая тема у пользователя 
if(localStorage.getItem('theme') === 'dark'){
    const ls = localStorage;
    document.body.classList.toggle('dark');
    const btns = document.querySelectorAll('.black-theme-btn');
    const logo = document.querySelector('.logo');
    btns.forEach(btn => {
        const icon  = btn.querySelector('span');
        const img  = icon.querySelector('img');
        icon.style.right = '50%';
        btn.classList.remove('bg-black');
        btn.classList.add('bg-white');
        img.src = '/images/icons/iconamoon_mode-light.svg';
    });
     // меняем лого на белый 
     logo.src= '/images/icons/logo-white.svg';
}

// пишем скрипт переключения по кнопку
function changeSelect(classN,activeClass){
    const btnsRegister = document.querySelectorAll(`.${classN}`);
    if(btnsRegister){
        for (let i = 0; i < btnsRegister.length; i++) {
            const btn = btnsRegister[i];
            btn.onclick = ()=>{
                for (let j = 0; j < btnsRegister.length; j++) {
                    const btn2 = btnsRegister[j];
                    btn2.classList.remove(activeClass);
                }
                btn.classList.add(activeClass);
            }
        }
    }
}
const btnsRegister = document.querySelectorAll('.btn-country');
if(btnsRegister){
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
}


// script открыть мобильный меню и закрыть 
const mobMenu = document.querySelector('.mobile-menu');
const btnOpenMobMenu = document.querySelector('.burger-btn');
const btnCloseMobMenu = document.querySelector('.close-btn');
if(btnOpenMobMenu){
    // при нажатии на кнопку бургер открываем меню 
    btnOpenMobMenu.onclick = () => {
        mobMenu.classList.add('mobile-menu-active');
    }
}
if(btnCloseMobMenu){
    // при нажатии на кнопку X закрываем меню 
    btnCloseMobMenu.onclick = () => {
        mobMenu.classList.remove('mobile-menu-active');
    }
}



// switch to black theme 
function switchBlackTheme(){
    const btns = document.querySelectorAll('.black-theme-btn');
    btns.forEach(btn => {
        const ls = localStorage;
        
        btn.onclick = ()=> {
            const icon = btn.querySelector('span');
            const img = icon.querySelector('img');
            const logo = document.querySelector('.logo');
            if(ls.getItem('theme') === 'dark'){
                ls.setItem('theme','light');
                icon.style.right = '0%';
                btn.classList.add('bg-black');
                btn.classList.remove('bg-white');
                img.src = '/images/icons/iconamoon_mode-dark-light.svg';
                document.body.classList.remove('dark');
                // меняем лого на обычный 
                logo.src= '/images/logo.svg';
            }else{
                ls.setItem('theme','dark');
                icon.style.right = '50%';
                btn.classList.add('bg-white');
                btn.classList.remove('bg-black');
                img.src = '/images/icons/iconamoon_mode-light.svg';
                document.body.classList.add('dark');
                // меняем лого на белый 
                logo.src= '/images/icons/logo-white.svg';
            }
            
        }
    })
}
switchBlackTheme();
changeSelect('btn-change-card','btn-change-card-active')