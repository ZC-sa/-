// 生成 1 到 100 之间的随机数
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');
const resetButton = document.getElementById('resetButton');

guessButton.addEventListener('click', function () {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = '请输入 1 到 100 之间的有效数字。';
    } else if (userGuess < secretNumber) {
        message.textContent = '猜的数字太小了，再试一次！';
    } else if (userGuess > secretNumber) {
        message.textContent = '猜的数字太大了，再试一次！';
    } else {
        message.textContent = `恭喜你，猜对了！你用了 ${attempts} 次尝试。`;
        guessButton.disabled = true;
    }

    attemptsElement.textContent = `你已经尝试了 ${attempts} 次。`;
});

resetButton.addEventListener('click', function () {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = '';
    attemptsElement.textContent = '你已经尝试了 0 次。';
    guessInput.value = '';
    guessButton.disabled = false;
});