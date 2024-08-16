const cards = [{items: [
    // aces
    { id: 'As', dignity: 10 || 1,  suit: 'spades', used: false, img: '../img/cards/aces/as.png'},
    { id: 'Ah',dignity: 10 || 1,  suit: 'hearts', used: false, img: '../img/cards/aces/ah.png' },
    { id: 'Ad',dignity: 10 || 1,  suit: 'diamonds', used: false, img: '../img/cards/aces/ad.png' },
    { id: 'Ac',dignity: 10 || 1,  suit: 'clubs', used: false, img: '../img/cards/aces/ac.png' },
    // kings
    { id: 'Ks', dignity: 10,  suit: 'spades', used: false, img: '../img/cards/kings/ks.png' },
    { id: 'Kh',dignity: 10,  suit: 'hearts', used: false, img: '../img/cards/kings/kh.png' },
    { id: 'Kd',dignity: 10,  suit: 'diamonds', used: false, img: '../img/cards/kings/kd.png' },
    { id: 'Kc',dignity: 10,  suit: 'clubs', used: false, img: '../img/cards/kings/kc.png' },
    // queens
    { id: 'Qs', dignity: 10,  suit: 'spades', used: false, img: '../img/cards/queens/qs.png' },
    { id: 'Qh',dignity: 10,  suit: 'hearts', used: false, img: '../img/cards/queens/qh.png' },
    { id: 'Qd',dignity: 10,  suit: 'diamonds', used: false, img: '../img/cards/queens/qd.png' },
    { id: 'Qc',dignity: 10,  suit: 'clubs', used: false, img: '../img/cards/queens/qc.png' },
    // jacks
    { id: 'Js', dignity: 10,  suit: 'spades', used: false, img: '../img/cards/jacks/js.png' },
    { id: 'Jh',dignity: 10,  suit: 'hearts', used: false, img: '../img/cards/jacks/jh.png' },
    { id: 'Jd',dignity: 10,  suit: 'diamonds', used: false, img: '../img/cards/jacks/js.png' },
    { id: 'Jc',dignity: 10,  suit: 'clubs', used: false, img: '../img/cards/jacks/jc.png' },
    // 10
    { id: '10s', dignity: 10,  suit: 'spades', used: false, img: '../img/cards/10/10s.png' },
    { id: '10h',dignity: 10,  suit: 'hearts', used: false, img: '../img/cards/10/10h.png' },
    { id: '10d',dignity: 10,  suit: 'diamonds', used: false, img: '../img/cards/10/10d.png' },
    { id: '10c',dignity: 10,  suit: 'clubs', used: false, img: '../img/cards/10/10c.png' },
    // 9
    { id: '9s', dignity: 9,  suit: 'spades', used: false, img: '../img/cards/9/9s.png' },
    { id: '9h',dignity: 9,  suit: 'hearts', used: false, img: '../img/cards/9/9h.png' },
    { id: '9d',dignity: 9,  suit: 'diamonds', used: false, img: '../img/cards/9/9d.png' },
    { id: '9c',dignity: 9,  suit: 'clubs', used: false, img: '../img/cards/9/9c.png' },
    // 8
    { id: '8s', dignity: 8,  suit: 'spades', used: false, img: '../img/cards/8/8s.png' },
    { id: '8h',dignity: 8,  suit: 'hearts', used: false, img: '../img/cards/8/8h.png' },
    { id: '8d',dignity: 8,  suit: 'diamonds', used: false, img: '../img/cards/8/8d.png' },
    { id: '8c',dignity: 8,  suit: 'clubs', used: false, img: '../img/cards/8/8c.png' },
    // 7
    { id: '7s', dignity: 7,  suit: 'spades', used: false, img: '../img/cards/7/7s.png' },
    { id: '7h',dignity: 7,  suit: 'hearts', used: false, img: '../img/cards/7/7h.png' },
    { id: '7d',dignity: 7,  suit: 'diamonds', used: false, img: '../img/cards/7/7d.png' },
    { id: '7c',dignity: 7,  suit: 'clubs', used: false, img: '../img/cards/7/7c.png' },
    // 6
    { id: '6s', dignity: 6,  suit: 'spades', used: false, img: '../img/cards/6/6s.png' },
    { id: '6h',dignity: 6,  suit: 'hearts', used: false, img: '../img/cards/6/6h.png' },
    { id: '6d',dignity: 6,  suit: 'diamonds', used: false, img: '../img/cards/6/6d.png' },
    { id: '6c',dignity: 6,  suit: 'clubs', used: false, img: '../img/cards/6/6c.png' },
    // 5
    { id: '5s', dignity: 5,  suit: 'spades', used: false, img: '../img/cards/5/5s.png' },
    { id: '5h',dignity: 5,  suit: 'hearts', used: false, img: '../img/cards/5/5h.png' },
    { id: '5d',dignity: 5,  suit: 'diamonds', used: false, img: '../img/cards/5/5d.png' },
    { id: '5c',dignity: 5,  suit: 'clubs', used: false, img: '../img/cards/5/5c.png' },
    // 4
    { id: '4s', dignity: 4,  suit: 'spades', used: false, img: '../img/cards/4/4s.png' },
    { id: '4h',dignity: 4,  suit: 'hearts', used: false, img: '../img/cards/4/4h.png' },
    { id: '4d',dignity: 4,  suit: 'diamonds', used: false, img: '../img/cards/4/4d.png' },
    { id: '4c',dignity: 4,  suit: 'clubs', used: false, img: '../img/cards/4/4c.png' },
    // 3
    { id: '3s', dignity: 3,  suit: 'spades', used: false, img: '../img/cards/3/3s.png' },
    { id: '3h',dignity: 3,  suit: 'hearts', used: false, img: '../img/cards/3/3h.png' },
    { id: '3d',dignity: 3,  suit: 'diamonds', used: false, img: '../img/cards/3/3d.png' },
    { id: '3c',dignity: 3,  suit: 'clubs', used: false, img: '../img/cards/3/3c.png' },
    // 2
    { id: '2s', dignity: 2,  suit: 'spades', used: false, img: '../img/cards/2/2s.png' },
    { id: '2h',dignity: 2,  suit: 'hearts', used: false, img: '../img/cards/2/2h.png' },
    { id: '2d',dignity: 2,  suit: 'diamonds', used: false, img: '../img/cards/2/2d.png' },
    { id: '2c',dignity: 2,  suit: 'clubs', used: false, img: '../img/cards/2/2c.png' },
]},]

function genRandomCard() {
    let randomNum = Math.floor(Math.random() * 52) + 1;
    console.log(cards)
    console.log('Number: ',randomNum - 1);

    let card = cards[0].items[randomNum - 1];
    if (card.used != true) {
        card.used = true;
        console.log(card);
        return card;
    } else {
        console.log('Карта уже выбранна') ;
        genRandomCard();
    }
}

function startGame() {
    return new Promise((resolve, reject) => {
        let card1 = genRandomCard()
        let card2 = genRandomCard()
        let card3 = genRandomCard()
    });
}



function game() {
    let countdownElement = document.getElementById('countdown');
    let timeLeft = 10;

    let countdownInterval = setInterval(() => {
        if (timeLeft > 0) {
            countdownElement.textContent = `До начала игры: ${timeLeft.toFixed(2)}s`;
            timeLeft -= 0.01;
        } else {
            clearInterval(countdownInterval);
            countdownElement.textContent = `Игра началась!`;
            startGame().then(() => {
                setTimeout(() => {
                    game(); // Запуск нового цикла после 11 секунд
                }, 11000);
            });
        }
    }, 10);
}

// game()