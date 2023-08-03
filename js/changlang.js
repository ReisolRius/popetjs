let eng = document.querySelector('#eng'),
    rus = document.querySelector('#rus'),
    changeFont = document.querySelector('#getrus');

let mobeng = document.querySelector('#mobeng'),
    mobrus = document.querySelector('#mobrus');

mobeng.addEventListener('click', changeLengEng);
mobrus.addEventListener('click', changeLeng);

rus.addEventListener('click', changeLeng);
eng.addEventListener('click', changeLengEng);

function changeLeng() {
    let lang = "rus";
    location.href = window.location.pathname + '#' + lang;
    changeFont.href = 'styles/rus.css';
    console.log(123);

    rus.style.order = '1';
    eng.style.order = '2';

    mobeng.style.display = 'block';
    mobrus.style.display = 'none';

    goChange();
}

function changeLengEng() {
    let lang = "eng";
    location.href = window.location.pathname + '#' + lang;
    changeFont.href = 'styles/main.css';

    rus.style.order = '2';
    eng.style.order = '1';

    mobeng.style.display = 'none';
    mobrus.style.display = 'block';

    goChange();
}

function goChange() {
    let hash = window.location.hash;
    if (hash == '') {
        location.href = window.location.pathname + '#eng';
        hash = window.location.hash;
    }
    hash = hash.substr(1);
    console.log(hash);
    document.querySelector('title').innerHTML = langArr['title'][hash];
    document.querySelector('#main').innerHTML = langArr['main'][hash];
    document.querySelector('#news').innerHTML = langArr['news'][hash];
    document.querySelector('#on').innerHTML = langArr['on'][hash];
    document.querySelector('#off').innerHTML = langArr['off'][hash];
    eng.innerHTML = langArr['eng'][hash];
    rus.innerHTML = langArr['rus'][hash];
    document.querySelector('#details__caption').innerHTML = langArr['details'][hash];
    document.querySelector('#details__caption-left').innerHTML = langArr['details-left-caption'][hash];
    document.querySelector('#details__left-text').innerHTML = langArr['details-left-text'][hash];
    document.querySelector('#details__caption-right').innerHTML = langArr['details-right-caption'][hash];
    document.querySelector('#details__right-text').innerHTML = langArr["details-right-text"][hash];
    document.querySelector('#task').innerHTML = langArr['task'][hash];
    document.querySelector('#preparation').innerHTML = langArr['preparation'][hash];
    document.querySelector('#work').innerHTML = langArr['work'][hash];
    document.querySelector('#success').innerHTML = langArr['success'][hash];
    document.querySelector('#cani').innerHTML = langArr['cani'][hash];
    document.querySelector('#text1').innerHTML = langArr['1text'][hash];
    document.querySelector('#ftext1').innerHTML = langArr['1ftext'][hash];
    document.querySelector('#text2').innerHTML = langArr['2text'][hash];
    document.querySelector('#ftext2').innerHTML = langArr['2ftext'][hash];
    document.querySelector('#text3').innerHTML = langArr['3text'][hash]
    document.querySelector('#ftext3').innerHTML = langArr['3ftext'][hash];
    document.querySelector('#well').innerHTML = langArr['well'][hash];
    document.querySelector('#hope').innerHTML = langArr['hope'][hash];
    document.querySelector('#fornow').innerHTML = langArr['fornow'][hash];

    document.querySelector('#menu').innerHTML = langArr['menu'][hash];
    document.querySelector('#func').innerHTML = langArr['functions'][hash];
    document.querySelector('#mobmain').innerHTML = langArr['main'][hash];
    document.querySelector('#mobnews').innerHTML = langArr['news'][hash];
    document.querySelector('#moblight').innerHTML = langArr['light'][hash];

    document.querySelector('#mOops').innerHTML = langArr['oops'][hash];
    modelWC.innerHTML = langArr['close'][hash];
    document.querySelector('#modelMtext').innerHTML = langArr['modeltext'][hash];
    document.querySelector('#modelOps').innerHTML = langArr['oops'][hash];
    modelWCM.innerHTML = langArr['close'][hash];
    document.querySelector('#modelText').innerHTML = langArr['modeltext'][hash];

    charP.innerHTML = langArr['char'][hash];
    charBM.innerHTML = langArr['char'][hash];
    document.querySelector('#myname').innerHTML = langArr['name'][hash];
    document.querySelector('#age').innerHTML = langArr['age'][hash];
    document.querySelector('#web').innerHTML = langArr['web'][hash];
    document.querySelector('#education').innerHTML = langArr['education'][hash];
    document.querySelector('#teawork').innerHTML = langArr['teaWork'][hash];

    document.querySelector('#nameM').innerHTML = langArr['name'][hash];
    document.querySelector('#ageM').innerHTML = langArr['age'][hash];
    document.querySelector('#webM').innerHTML = langArr['web'][hash];
    document.querySelector('#educationM').innerHTML = langArr['education'][hash];
    document.querySelector('#teaworkM').innerHTML = langArr['teaWork'][hash];
    document.querySelector('.closeBtnM').innerHTML = langArr['close'][hash];

    window.scrollTo(0, -200)
}

window.addEventListener('load', () => {
    let hash = window.location.hash;
    if (hash == '#rus') {
        rus.style.order = '1';
        eng.style.order = '2';
    }
    goChange();
});