// ============================================
// MAIN.JS - Funcții principale
// Claudia Toth · Nomen-Verb-Verbindungen
// ============================================

// ============================================
// TOGGLE SECȚIUNI PRINCIPALE
// ============================================
function toggleMainSection(i) {
    const content = document.getElementById('main-section-' + i);
    const arrow = document.querySelectorAll('.arrow')[i];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

// ============================================
// TOGGLE SUB-SECȚIUNI (în Teorie)
// ============================================
function toggleSubSection(i) {
    const content = document.getElementById('sub-section-' + i);
    const arrow = document.querySelectorAll('.sub-arrow')[i];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

// ============================================
// OPEN SECTION FROM NAVBAR
// ============================================
function openSection(index) {
    const contents = document.querySelectorAll('.section-content');
    const arrows = document.querySelectorAll('.arrow');
    if (contents[index] && !contents[index].classList.contains('active')) {
        contents[index].classList.add('active');
        if (arrows[index]) arrows[index].classList.add('rotated');
    }
}

// ============================================
// AUDIO CONTROL - Play / Pause cu PĂSTRARE poziție + RESUME
// localStorage per lecție × audio → cursantul reia de unde a rămas
// chiar și după închiderea browser-ului
// ============================================
let currentAudioId = null;

// Cheie localStorage per lecție + audio (window.location.pathname asigură scope per lecție)
function audioPositionKey(audioId) {
    return 'lesson-audio-pos::' + window.location.pathname + '::' + audioId;
}

function saveAudioPosition(audioId, time) {
    try { localStorage.setItem(audioPositionKey(audioId), String(time)); } catch (e) { /* quota ok */ }
}

function loadAudioPosition(audioId) {
    try {
        const v = localStorage.getItem(audioPositionKey(audioId));
        return v ? parseFloat(v) : 0;
    } catch (e) { return 0; }
}

function clearAudioPosition(audioId) {
    try { localStorage.removeItem(audioPositionKey(audioId)); } catch (e) { /* ok */ }
}

function formatAudioTime(seconds) {
    if (!isFinite(seconds) || seconds < 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return m + ':' + s;
}

function toggleAudio(event, audioId) {
    event.stopPropagation();

    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;

    // Dacă alt audio cântă, îl PAUZĂM (păstrăm poziția lui — nu mai resetăm)
    if (currentAudioId && currentAudioId !== audioId) {
        const prevAudio = document.getElementById(currentAudioId);
        const prevBtn = document.getElementById('btn-' + currentAudioId);
        if (prevAudio) {
            prevAudio.pause();
            saveAudioPosition(currentAudioId, prevAudio.currentTime);
        }
        if (prevBtn) prevBtn.textContent = '▶';
    }

    if (audio.paused) {
        // RESUME de la poziția salvată (dacă există + e validă)
        const savedTime = loadAudioPosition(audioId);
        const tryResume = () => {
            if (savedTime > 1 && audio.duration && savedTime < audio.duration - 1) {
                audio.currentTime = savedTime;
            }
        };
        // Dacă metadata nu e încărcată încă, aștept până se încarcă
        if (audio.readyState >= 1) {
            tryResume();
        } else {
            audio.addEventListener('loadedmetadata', tryResume, { once: true });
        }
        audio.play().then(() => {
            btn.textContent = '⏸';
            currentAudioId = audioId;
        }).catch(err => {
            console.log('Audio nu poate fi redat:', err);
            alert('Fișierul audio nu este disponibil. Verifică dacă MP3-ul a fost încărcat în folder.');
            btn.textContent = '▶';
        });
    } else {
        // PAUZĂ — păstrăm poziția în localStorage (NU mai resetăm)
        audio.pause();
        saveAudioPosition(audioId, audio.currentTime);
        btn.textContent = '▶';
        currentAudioId = null;
    }

    // Când audio se termină, reset poziție + buton
    audio.onended = function() {
        btn.textContent = '▶';
        currentAudioId = null;
        clearAudioPosition(audioId);  // a terminat → ștergem poziția
    };
}

// ============================================
// INIȚIALIZARE AUDIO — timecode vizibil + auto-save la fiecare 3s + beforeunload
// ============================================
function initLessonAudios() {
    document.querySelectorAll('audio[id^="audio-"]').forEach(audio => {
        // 1. Injectez timecode lângă buton (dacă nu există deja)
        const player = audio.closest('.audio-player');
        if (player && !player.querySelector('.audio-timecode')) {
            const tc = document.createElement('span');
            tc.className = 'audio-timecode';
            tc.id = 'time-' + audio.id;
            tc.textContent = '—:—';
            tc.style.cssText = 'font-size: 0.85rem; color: #5A5147; margin-left: 10px; font-family: \'Courier New\', monospace; font-weight: 600; white-space: nowrap;';
            player.appendChild(tc);
        }

        // 2. Update timecode + save position la fiecare 3 secunde de redare
        let lastSave = -10;
        audio.addEventListener('timeupdate', () => {
            const tc = document.getElementById('time-' + audio.id);
            if (tc) tc.textContent = formatAudioTime(audio.currentTime) + ' / ' + formatAudioTime(audio.duration);
            if (Math.abs(audio.currentTime - lastSave) >= 3) {
                saveAudioPosition(audio.id, audio.currentTime);
                lastSave = audio.currentTime;
            }
        });

        // 3. Când metadata se încarcă (durata disponibilă), afișez și poziția salvată
        audio.addEventListener('loadedmetadata', () => {
            const tc = document.getElementById('time-' + audio.id);
            if (tc) {
                const savedTime = loadAudioPosition(audio.id);
                const startTime = (savedTime > 1 && savedTime < audio.duration - 1) ? savedTime : 0;
                tc.textContent = formatAudioTime(startTime) + ' / ' + formatAudioTime(audio.duration);
            }
        });

        // 4. Salvează poziția la închiderea tab-ului/navigarea altundeva
        window.addEventListener('beforeunload', () => {
            if (!audio.paused) saveAudioPosition(audio.id, audio.currentTime);
        });
    });
}

// Apel direct — main.js se încarcă DUPĂ DOM (la sfârșitul body-ului)
if (document.readyState !== 'loading') {
    initLessonAudios();
} else {
    document.addEventListener('DOMContentLoaded', initLessonAudios);
}

// ============================================
// VERIFICĂ EXERCIȚIU INDIVIDUAL
// ============================================
function checkExercise(num) {
    let result;
    
    switch(num) {
        case 1: result = checkEx1(); break;
        case 2: result = checkEx2(); break;
        case 3: result = checkEx3(); break;
        case 4: result = checkEx4(); break;
        case 5: result = checkEx5(); break;
        default: return;
    }
    
    const percentage = Math.round((result.correct / result.total) * 100);
    
    let message = '';
    let emoji = '';
    if (percentage === 100) {
        emoji = '🏆';
        message = 'Perfekt! / Perfect!';
    } else if (percentage >= 80) {
        emoji = '⭐';
        message = 'Sehr gut! / Foarte bine!';
    } else if (percentage >= 60) {
        emoji = '👍';
        message = 'Gut! / Bine!';
    } else if (percentage >= 40) {
        emoji = '📚';
        message = 'Übe noch! / Mai exersează!';
    } else {
        emoji = '💪';
        message = 'Wiederhole die Theorie! / Repetă teoria!';
    }
    
    const scoreDiv = document.getElementById('score-' + num);
    scoreDiv.className = 'score show';
    scoreDiv.innerHTML = `
        <div class="score-value">${emoji} ${result.correct} / ${result.total} (${percentage}%)</div>
        <div class="score-message">${message}</div>
    `;
    
    scoreDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ============================================
// RESETEAZĂ EXERCIȚIU INDIVIDUAL
// Delegator: cheamă resetExN definit în exercises.js
// ============================================
function resetExercise(num) {
    const fnName = 'resetEx' + num;
    if (typeof window[fnName] === 'function') {
        window[fnName]();
    }

    // Reset score pentru exercițiul respectiv
    const scoreDiv = document.getElementById('score-' + num);
    if (scoreDiv) {
        scoreDiv.className = 'score';
        scoreDiv.innerHTML = '';
    }

    // Scroll la începutul exercițiului
    const exSection = document.getElementById('ex' + num);
    if (exSection) {
        exSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
