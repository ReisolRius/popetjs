let lightBtn = document.querySelector('.light'),
    ligthL = document.querySelector('#lightLine'),
    ligthC = document.querySelector('#lightCircle'),
    lightFlag = true;

    let lightBtnM = document.querySelector('.mobile__light-btn'),
    ligthLM = document.querySelector('.mobile__light-line'),
    ligthCM = document.querySelector('.mobile__light-circle'),
    lightFlagM = true;

let theme = document.querySelector('#theme'),
    vk = document.querySelector('#vk'),
    tg = document.querySelector('#tg'),
    ds = document.querySelector('#ds');


let mobileBtn = document.querySelector('.mobile__button'),
    span1 = document.querySelector('#span1'),
    span2 = document.querySelector('#span2'),
    span3 = document.querySelector('#span3'),
    mobileMenu = document.querySelector('.mobile__menu'),
    mobileFlag = true;

let modelWB = document.querySelector('#news'),
    modelW = document.querySelector('.model__window-container'),
    modelWC = document.querySelector('#modelWClose');

let modelWBM = document.querySelector('#mobnews'),
    modelWM = document.querySelector('.model__window__container-mobile'),
    modelWCM = document.querySelector('#modelWMClose'),
    modelWMT = document.querySelector('.model__window-mobile');

let charP = document.querySelector('#character'),
    charD = document.querySelector('.char__container'),
    charC = document.querySelector('.closeBtn');

let block1 = document.querySelector('.menu-1'),
    block2 = document.querySelector('.menu-2'),
    modelBlock = document.querySelector('.char__blur');

charP.addEventListener('click', () => {
    charD.style.display = 'flex';
    setTimeout( () => {charD.style.opacity = '1';}, 400);
});

charC.addEventListener('click', () => {
    charD.style.opacity = '0';
    setTimeout(() => { charD.style.display = 'none';}, 400);
});

let charBM = document.querySelector('#character-moba'),
    charDM = document.querySelector('.char__container-mobile'),
    charCM = document.querySelector('.closeBtnM'),
    charBlur = document.querySelector('.char__blur');

charBM.addEventListener('click', () =>{
    charBlur.style.display = 'flex';
    setTimeout(() => {charDM.style.bottom = '0px';}, 300)
});

charCM.addEventListener('click', () => {
    charDM.style.bottom = '-1000px';
    setTimeout(() => {charBlur.style.display = 'none';}, 300)
})

modelWB.addEventListener('click', a => {
    modelW.style.display = 'flex';
});
modelWC.addEventListener('click', a => {
    modelW.style.display = 'none';
});

modelWBM.addEventListener('click', a => {
    modelWM.style.display = 'flex';
    setTimeout(() => {  modelWMT.style.bottom = '0px'; }, 200);
});
modelWCM.addEventListener('click', a => {
    modelWMT.style.bottom = '-500px';
    setTimeout(() => {  modelWM.style.display = 'none'; }, 200);
})

lightBtn.addEventListener('click', changeTheme);
lightBtnM.addEventListener('click', changeThemeMobile);

mobileBtn.addEventListener('click', goMenu);

localStorage.setItem('theme', 'light');

function changeTheme() {
    try {
        if (localStorage.getItem('theme') === 'light') {
            ligthC.style.left = '35px';
            ligthCM.style.left = '109px';
            theme.href = 'styles/index-light.css';
            vk.src = 'img/вкл.png';
            tg.src = 'img/тгл.png';
            ds.src = 'img/дсл.png';
            localStorage.removeItem('theme');
        } else {
            ligthC.style.left = '0px';
            ligthCM.style.left = '67px';
            theme.href = 'styles/index-dark.css';
            vk.src = 'img/vk111 1.png';
            tg.src = 'img/tg111 1.png';
            ds.src = 'img/lc11 1.png';
            localStorage.setItem('theme', 'light');
        }
    } catch(err) {}
}

function changeThemeMobile() {
    try {
        if (localStorage.getItem('theme') === 'light') {
            ligthCM.style.left = '109px';
            ligthC.style.left = '35px';
            theme.href = 'styles/index-light.css';
            vk.src = 'img/вкл.png';
            tg.src = 'img/тгл.png';
            ds.src = 'img/дсл.png';
            localStorage.removeItem('theme');
        } else {
            ligthCM.style.left = '67px';
            ligthC.style.left = '0px';
            theme.href = 'styles/index-dark.css';
            vk.src = 'img/vk111 1.png';
            tg.src = 'img/tg111 1.png';
            ds.src = 'img/lc11 1.png';
            localStorage.setItem('theme', 'light');
        }
    } catch(err) {}
}

let body = document.querySelector('body');

function goMenu() {
    if (mobileFlag) {
        span1.style.marginLeft = '-15px';
        span2.style.marginRight = '-15px';
        mobileMenu.style.opacity = '1';
        mobileMenu.style.zIndex = '5';
        mobileFlag = !mobileFlag;
        body.classList.add('scroll-off'); 
    } else {
        span1.style.marginLeft = '0';
        span2.style.marginRight = '0';
        mobileMenu.style.opacity = '0';
        mobileMenu.style.zIndex = '-5';
        mobileFlag = !mobileFlag;
        body.classList.remove('scroll-off'); 
    }
}

document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(block1);
    const vClick = e.composedPath().includes(block2);
    const sClick = e.composedPath().includes(mobileBtn);
    const mClick = e.composedPath().includes(modelBlock);
    const nClick = e.composedPath().includes(modelWM);
    if ((!click) && (!vClick) && (!sClick) && (!mClick) && (!nClick)) {
        span1.style.marginLeft = '0';
        span2.style.marginRight = '0';
        mobileMenu.style.opacity = '0';
        mobileMenu.style.zIndex = '-5';
        mobileFlag = !mobileFlag;
        body.classList.remove('scroll-off'); 
    }
});
