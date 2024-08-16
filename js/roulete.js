const caseBox = [
    {
        item: {
            name: 'green',
            color: '#027800',
            img: '../img/roulete/green.png'
        }, chance: 49
    },
    {
        item: {
            name: 'blue',
            color: '#004196',
            img: '../img/roulete/blue.png'
        }, chance: 49
    },
    {
        item: {
            name: 'gold',
            color: '#D2B600',
            img: '../img/roulete/gold.png'
        }, chance: 2
    }
];

const users = [{id: 1, avatar: '../img/avatar/1.jpg', username: 'bakko28', balance: 300, chose_bet: '', price_bet: 0}]

function updateUser() {
    const userAvatar = document.querySelector('.user-avatar img')
    if (userAvatar) {
        userAvatar.src = users[0].avatar;
        document.querySelector('.balance').textContent = `${users[0].balance} $`
    } else {
        console.error('Элемент .user-avatar img не найден');
    }
}

const gamesBox = [];

function getRandomNum() {
    const random = Math.random() * 100;
    let cumulativeChance = 0;

    for (const box of caseBox) {
        cumulativeChance += box.chance;
        if (random < cumulativeChance) {
            console.log(box.item);
            return box.item;
        }
    }
}

function generate(value) {
    return new Promise((resolve) => {
        $('.raffle-roller-container').css({
            transition: "sdf",
            "margin-left": "0px"
        }, 10).html('');
        let randed2 = getRandomNum();
        for (let i = 0; i < 101; i++) {
            let element = '<div id="CardNumber' + i + '" class="item class_red_item" style="background-image:url(' + caseBox[0].item.img + ');"></div>';
            let randed = randomInt(1, 1000);
            if (randed < 50) {
                element = '<div id="CardNumber' + i + '" class="item class_red_item" style="background-image:url(' + caseBox[2].item.img + ');"></div>';
            } else if (500 < randed) {
                element = '<div id="CardNumber' + i + '" class="item class_red_item" style="background-image:url(' + caseBox[1].item.img + ');"></div>';
            }
            $(element).appendTo('.raffle-roller-container');
        }
        setTimeout(function() {
            if (randed2.name == 'gold') {
                goRoll(caseBox[2].item.color, caseBox[2].item.img, caseBox[2].item.name);
            } else if (randed2.name == 'green') {
                goRoll(caseBox[0].item.color, caseBox[0].item.img, caseBox[0].item.name);
            } else if (randed2.name == 'blue') {
                goRoll(caseBox[1].item.color, caseBox[1].item.img, caseBox[1].item.name);
            } else {
                console.warn('Нету элементов.');
            }

            // Обновление gamesBox
            const newGameId = gamesBox.length ? gamesBox[gamesBox.length - 1].game_id + 1 : 1;
            gamesBox.push({ game_id: newGameId, result_game: randed2.name });
        }, 500);

        setTimeout(resolve, 1000);
    });
}


function goRoll(skin, skinimg, color) {
    document.querySelector('.raffle-roller-holder-bar').style.display = 'flex';
    document.querySelector('.shadow-left').style.display = 'flex';
    document.querySelector('.shadow-right').style.display = 'flex';
    $('.raffle-roller-container').css({
        transition: "all 10s cubic-bezier(.08,.6,0,1)"
    });
    $('#CardNumber78').css({
        "background-image": "url(" + skinimg + ")"
    });
    setTimeout(function() {
        checkWinner(color)

        $('#CardNumber78').addClass('winning-item');
        let win_element = $(`<div class='item class_red_item' style='background-color: ${skin}'></div>`);
        win_element.appendTo('.inventory');
        win_element.addClass('win-ell');
        checkInventory()
        const result = countElements(gamesBox);
        document.getElementById('blue').textContent = `${result.blue}`
        document.getElementById('green').textContent = `${result.green}`
        document.getElementById('gold').textContent = `${result.gold}`
    }, 10500);
    $('.raffle-roller-container').css('margin-left', '-5260px');
}

function saveGamesBoxToFile(gamesBox) {
    const gamesBoxContent = JSON.stringify(gamesBox, null, 2);

    const blob = new Blob([gamesBoxContent], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'gamesBox.txt';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}

function checkInventory() {
    const inventory = $('.inventory');
    const items = inventory.children('.item');

    if (items.length >= 20) {
        items.first().remove();
    }
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function countElements(gamesBox) {
    let counts = { green: 0, gold: 0, blue: 0 };
    const last100Games = gamesBox.slice(-100);

    for (const game of last100Games) {
        if (counts.hasOwnProperty(game.result_game)) {
            counts[game.result_game]++;
        }
    }

    return counts;
}

const depInfoBoxes = {
    green: document.querySelector('.dep-info-green'),
    gold: document.querySelector('.dep-info-gold'),
    blue: document.querySelector('.dep-info-blue')
};

function checkColorBtn(color) {
    if (color === 'green') {
        document.getElementById('betBlue').disabled = true;
        document.getElementById('betGold').disabled = true;
    } else if (color === 'blue') {
        document.getElementById('betGreen').disabled = true;
        document.getElementById('betGold').disabled = true;
    } else if (color === 'gold') {
        document.getElementById('betGreen').disabled = true;
        document.getElementById('betBlue').disabled = true;
    }

    let betCount = parseInt(prompt(`Вы выбрали ${color}. Введите сумму ставки.`), 10);
    console.log(betCount)

    if (betCount > users[0].balance) {
        alert('Недостаточно денег на балансе. Пополнить баланс можно в личном кабинете');
    } else if (betCount === 0) {
        alert('Сумма не может быть равна нулю. Введите значение');
    } else if (betCount === null || isNaN(betCount) || betCount === '') {
        alert('Поле не может быть пустым. Введите значение');
    } else {
        users[0].chose_bet = color;
        users[0].price_bet = betCount;

        users[0].balance = users[0].balance - betCount
        console.log(users[0].balance)
        updateUser()
    
        const cardHTML = `
            <div class="card">
                <div class="imagebox">
                    <img src="${users[0].avatar}" alt="">
                </div>
                <p class="username">${users[0].username}</p>
                <p class="price">${users[0].price_bet} $</p>
            </div>
        `;
    
        depInfoBoxes[color].innerHTML = cardHTML;
    }
    
}

function checkWinner(color) { 
    let pickColor = users[0].chose_bet
    let resultPrice = users[0].price_bet

    if (color === pickColor) {
        alert(`Вы выиграли: ${resultPrice * 2} $`)
        users[0].balance = users[0].balance + (resultPrice * 2)
        console.log(users[0].balance)
        updateUser()
    } else if (pickColor === ''){
        console.log('color = ""')
    } else {
        alert('Увы вы проиграли')
    }
}

function clearGame() {
    document.getElementById('betGreen').disabled = false;
    document.getElementById('betBlue').disabled = false;
    document.getElementById('betGold').disabled = false;
    users[0].chose_bet = ''
    users[0].price_bet = 0

    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.remove();
    });
}

function game() {
    let countdownElement = document.getElementById('countdown');
    let timeLeft = 10;

    let countdownInterval = setInterval(() => {
        if (timeLeft > 0) {
            document.querySelector('.raffle-roller-holder-bar').style.display = 'none';
            countdownElement.textContent = `До начала игры: ${timeLeft.toFixed(2)}s`;
            timeLeft -= 0.01;
        } else {
            clearInterval(countdownInterval);
            countdownElement.textContent = `Игра началась!`;
            generate(1).then(() => {
                setTimeout(() => {
                    clearGame()
                    game(); // Запуск нового цикла после 11 секунд
                }, 11000);
            });
        }
    }, 10);
}

updateUser()
game();