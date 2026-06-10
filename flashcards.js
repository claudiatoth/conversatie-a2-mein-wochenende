// ============================================
// FLASHCARDS - Mein Wochenende (Conversație A2)
// Claudia Toth · 32 carduri (Partizip II + fraze Perfekt) cu TTS
// REGULĂ QA: fără ghilimele interioare în stringuri (CAPS/paranteze pentru emfază)
// ============================================

const flashcardsData = [
    // Infinitiv → Partizip II (+ auxiliar)
    { de: "machen → gemacht", ro: "a face (haben)" },
    { de: "spielen → gespielt", ro: "a (se) juca (haben)" },
    { de: "kochen → gekocht", ro: "a găti (haben)" },
    { de: "lernen → gelernt", ro: "a învăța (haben)" },
    { de: "arbeiten → gearbeitet", ro: "a lucra (haben)" },
    { de: "essen → gegessen", ro: "a mânca (haben, neregulat)" },
    { de: "trinken → getrunken", ro: "a bea (haben, neregulat)" },
    { de: "sehen → gesehen", ro: "a vedea (haben, neregulat)" },
    { de: "besuchen → besucht", ro: "a vizita (haben, fără ge-)" },
    { de: "telefonieren → telefoniert", ro: "a vorbi la telefon (haben, fără ge-)" },
    { de: "einkaufen → eingekauft", ro: "a face cumpărături (haben, separabil)" },
    { de: "gehen → gegangen", ro: "a merge (SEIN!)" },
    { de: "fahren → gefahren", ro: "a merge cu un vehicul (SEIN!)" },
    { de: "kommen → gekommen", ro: "a veni (SEIN!)" },
    { de: "aufstehen → aufgestanden", ro: "a se trezi (SEIN, separabil)" },
    { de: "bleiben → geblieben", ro: "a rămâne (SEIN)" },
    // Fraze la Perfekt
    { de: "Was hast du am Wochenende gemacht?", ro: "Ce ai făcut în weekend?" },
    { de: "Wie war dein Wochenende?", ro: "Cum a fost weekendul tău?" },
    { de: "Ich habe Fußball gespielt.", ro: "Am jucat fotbal." },
    { de: "Ich bin ins Kino gegangen.", ro: "M-am dus la cinema." },
    { de: "Ich habe zu Hause gekocht.", ro: "Am gătit acasă." },
    { de: "Ich bin nach Berlin gefahren.", ro: "Am mers la Berlin." },
    { de: "Ich habe einen Film gesehen.", ro: "Am văzut un film." },
    { de: "Ich bin früh aufgestanden.", ro: "M-am trezit devreme." },
    { de: "Ich bin zu Hause geblieben.", ro: "Am rămas acasă." },
    { de: "Ich habe Freunde getroffen.", ro: "M-am întâlnit cu prieteni." },
    { de: "Und dann habe ich gegessen.", ro: "Și apoi am mâncat." },
    { de: "Es war ein schönes Wochenende.", ro: "A fost un weekend frumos." },
    { de: "Wie schön!", ro: "Ce frumos!" },
    { de: "Das klingt toll!", ro: "Sună grozav!" },
    { de: "Echt?", ro: "Serios?" },
    { de: "Oh, schade!", ro: "O, păcat!" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri: infinitiv → Partizip II + fraze la Perfekt pentru weekend.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție germană automată.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}
function updateFlashcard() {
    const card = document.getElementById('flashcard'), de = document.getElementById('flashcard-de'), ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter'), prevBtn = document.getElementById('prev-btn'), nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de; ro.textContent = c.ro; card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}
function flipCard() { const card = document.getElementById('flashcard'); if (card) card.classList.toggle('flipped'); }
function nextCard() { if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); } }
function prevCard() { if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); } }
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) { window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(card.de); u.lang = 'de-DE'; u.rate = 0.85; window.speechSynthesis.speak(u); }
    else { alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.'); }
}
document.addEventListener('DOMContentLoaded', function() { buildFlashcards(); });
