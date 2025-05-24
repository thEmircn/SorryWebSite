let noClickCount = 0;
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

const messages = [
  "Lütfen... Hatalıyım, biliyorum...",
  "Yani ama... Bir düşün nolur...",
  "Gerçekten özür dilerimmmmm...",
  "Hadi ya lütfennn...",
  "Beni seviyosannn...",
  "Bi daha olmicak sözzz...",
  "Lütfen Lütfen Lütfennn...",
  "Hadi Ya Nolurrrr...",
  "Özüe dilerim gerçekten...",
  "Haddiii güzelim lütfennnn.... 😢"
];

noBtn.addEventListener('click', () => {
  noClickCount++;
  if (noClickCount < 10) {
    // Evet butonu büyüsün
    let scale = 1 + noClickCount * 0.1;
    yesBtn.style.transform = `scale(${scale})`;
    message.textContent = messages[noClickCount - 1] || message.textContent;
  } else {
    noBtn.remove(); // Hayır butonunu kaldır
    message.textContent = "O zaman Zorla affet başka seçenek kalmadı 😔";
  }
});

yesBtn.addEventListener('click', () => {
  message.textContent = "Teşekkürler Yavru 💖";
  yesBtn.remove();
  noBtn?.remove();
});
