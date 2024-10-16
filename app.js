window.addEventListener('load', () => {
    setTimeout(function(){
        for (let index = 0; index < 3; index++) {
            flipCards(index);
        }
    },500);
})
function flipCards(i) {
    const backCards = document.querySelectorAll('.card .back');
    const frontCards = document.querySelectorAll('.card .front');
    setTimeout(function () {
        backCards[i].style.transform = 'rotateY(180deg)';
        frontCards[i].style.transform = 'rotateY(0)';
    }, i * 300);
}