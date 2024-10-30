window.addEventListener('load', () => {
    flipCard(0);
    if (window.innerWidth > 640) {
        flipCard(1);
        flipCard(2);
    }
    for (let i = 0; i < 300; i++) {
        let el = document.querySelector('#background');
        el.innerHTML += '<span>🎩</span>';
        el.innerHTML += '<span>🍷</span>';
        el.innerHTML += '<span>🌔</span>';
    }
});
function flipCard(i) {
    const backCards = document.querySelectorAll('.card .back');
    const frontCards = document.querySelectorAll('.card .front');
    setTimeout(function () {
        backCards[i].style.transform = 'rotateY(180deg)';
        frontCards[i].style.transform = 'rotateY(0)';
    }, i * 300);
}
function flipCards() {
    let cards = document.querySelectorAll('.card');
    for (let i = 0; i < cards.length; i++) {
        var scroll = window.scrollY; //スクロール量を取得
        var windowHeight = window.innerHeight; //画面の高さを取得
        var targetPos = cards[i].getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
        if (scroll > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
            flipCard(i);
        }
    }
}
window.addEventListener('scroll', () => {
    flipCards();
});