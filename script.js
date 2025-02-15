  
  function toggleMusic() {
    const music = document.getElementById('bgMusic');
    if (music.paused) {
      music.play();
      document.querySelector('.music-button').textContent = '🎵 Pause Music 🎵';
    } else {
      music.pause();
      document.querySelector('.music-button').textContent = '🎵 Play Music 🎵';
    }
  }
  
  function createBubbles() {
    setInterval(() => {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.left = Math.random() * 100 + 'vw';
      bubble.style.width = bubble.style.height = Math.random() * 30 + 10 + 'px';
      bubble.style.animationDuration = Math.random() * 15 + 5 + 's';
      document.body.appendChild(bubble);
  
      setTimeout(() => bubble.remove(), 20000);
    }, 300);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    createPetals();
    createBubbles();
  });
  
  function showLove() {
    const messages = [
      "Terimakasih sudah ada ❤️",
      "Sayang abang !!! 💕",
      "Abang terbaik !!! 💖",
      "lovee youuu 💗",
      "Terimakasih sudah ada 💝",
      "Abang Comel sering bikin kesal🌟",
      "Bahagia Selalu !!! 💓",
      "Senang Mengenal abang 🌍",
      "Semangat trus yaa 💑",
      "Terimakasih abang ✨"
    ];
  
    const messageElement = document.querySelector('.message');
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;
  
    createHearts();
    createRoses();
  
    // Add sparkle effect to the message
    messageElement.style.animation = 'none';
    messageElement.offsetHeight; // Trigger reflow
    messageElement.style.animation = 'sparkle 2s ease-in-out';
  }
  
  function createRoses() {
    const roses = ['🌹', '🌺', '🌸', '💐'];
    for (let i = 0; i < 5; i++) {
      const rose = document.createElement('div');
      rose.classList.add('rose');
      rose.textContent = roses[Math.floor(Math.random() * roses.length)];
      rose.style.left = Math.random() * 100 + 'vw';
      rose.style.animationDelay = (Math.random() * 2) + 's';
      document.body.appendChild(rose);
  
      setTimeout(() => rose.remove(), 6000);
    }
  }
  
  function createHearts() {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.classList.add('floating-heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
      document.body.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
  }
  