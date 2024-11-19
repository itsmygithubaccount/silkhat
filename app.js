window.addEventListener('load', () => {
    showLoadingScreen();
    setTimeout(() => {
        flipCard(0);
        if (window.innerWidth > 640) {
            flipCard(1);
            flipCard(2);
        }
    }, 1500);
    let el = document.querySelector('#background');
    el.innerHTML += '<div>';
    for (let i = 0; i < 300; i++) {
        el.innerHTML += '<span>🎩</span>';
        el.innerHTML += '<span>🍷</span>';
        el.innerHTML += '<span>🌔</span>';
    }
    el.innerHTML += '</div>';
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
        var targetPos = cards[i].getBoundingClientRect().top + scroll + getComputedStyle(cards[i]).fontSize.replace('px', '') * 20; //ターゲット要素の位置を取得
        if (scroll > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
            flipCard(i);
        }
    }
}
window.addEventListener('scroll', () => {
    flipCards();
});

function showLoadingScreen() {
    // 画面全体を覆う要素を作成
    const loadingScreen = document.createElement('div');
    loadingScreen.classList.add('loading-screen');
    document.body.appendChild(loadingScreen);

    // アニメーション用の要素を作成
    const animation = document.createElement('div');
    animation.classList.add('animation');
    loadingScreen.appendChild(animation);

    // 3つの絵文字を順番に表示する
    const emojis = ['🎩読み込み中...', '🍷読み込み中...', '🌒読み込み中...'];
    let emojiIndex = 0;
    const intervalId = setInterval(() => {
        animation.textContent = emojis[emojiIndex];
        emojiIndex = (emojiIndex + 1) % emojis.length;
    }, 500); // 0.5秒ごとに絵文字を切り替える

    // 1秒後にカバーを削除
    setTimeout(() => {
        clearInterval(intervalId);
        loadingScreen.remove();
        document.querySelector('.container').style.display = 'block';
        document.querySelector('#background').style.display = 'block';
    }, 1000);
}
