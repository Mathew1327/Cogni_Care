document.addEventListener('DOMContentLoaded', () => {
    const memoryGame = document.querySelector('.memory-game');
    const startButton = document.getElementById('start-button');
    const resetButton = document.getElementById('reset-button');
    const timerDisplay = document.getElementById('timer');

    let cards = [
        1, 1, 2, 2, 3, 3, 4, 4,
        5, 5, 6, 6, 7, 7, 8, 8,
    ]; // Replace these numbers with your own content (e.g., images)
    let flippedCards = [];
    let lockBoard = false;
    let timer = 0;
    let timerInterval;

    // Shuffle the cards
    function shuffleCards() {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }

    // Create card elements
    function createCard(number, index) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;

        const frontFace = document.createElement('div');
        frontFace.classList.add('front-face');
        frontFace.textContent = '?';

        const backFace = document.createElement('div');
        backFace.classList.add('back-face');
        backFace.textContent = number;

        card.appendChild(frontFace);
        card.appendChild(backFace);

        card.addEventListener('click', () => flipCard(card));

        return card;
    }

    // Initialize the game
    function init() {
        shuffleCards();
        memoryGame.innerHTML = '';
        for (let i = 0; i < cards.length; i++) {
            const card = createCard(cards[i], i);
            memoryGame.appendChild(card);
        }
    }

    // Flip a card
    function flipCard(card) {
        if (lockBoard || card.classList.contains('flipped')) return;

        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            lockBoard = true;
            setTimeout(checkForMatch, 1000);
        }
    }

    // Check if the flipped cards match
    function checkForMatch() {
        const [card1, card2] = flippedCards;
        const match = card1.querySelector('.back-face').textContent === card2.querySelector('.back-face').textContent;

        if (match) {
            card1.removeEventListener('click', () => flipCard(card1));
            card2.removeEventListener('click', () => flipCard(card2));
        } else {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }

        flippedCards = [];
        lockBoard = false;
    }

    // Function to start the timer
    function startTimer() {
        timerInterval = setInterval(() => {
            timer++;
            timerDisplay.textContent = `Time: ${timer}s`;
        }, 1000);
    }

    // Function to stop the timer
    function stopTimer() {
        clearInterval(timerInterval);
    }

    // Event listener for start button
    startButton.addEventListener('click', () => {
        init();
        startTimer();
        startButton.style.display = 'none';
        resetButton.style.display = 'inline-block';
    });

    // Event listener for reset button
    resetButton.addEventListener('click', () => {
        stopTimer();
        init();
    });

    init(); // Initialize the game
});
