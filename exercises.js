// ============================================
// EXERCIȚII - Mein Wochenende (Conversație A2)
// Claudia Toth · 4 exerciții gradate + producere orală liberă (Ex5)
// Sursă: vocabular A2 standard · conținut 100% original
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/[.!?;:]/g, '').replace(/\s+/g, ' ').trim();
}
function shuffleArr(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function checkTextItems(items, prefix) {
    let correct = 0;
    items.forEach(item => {
        const input = document.getElementById(`${prefix}-${item.id}`), fb = document.getElementById(`${prefix}-f${item.id}`);
        if (!input || !fb) return;
        const ua = normalizeAnswer(input.value);
        const valid = [item.answer, ...(item.accept || [])].map(normalizeAnswer);
        if (ua && valid.includes(ua)) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${item.answer}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${item.answer}`; }
    });
    return { correct, total: items.length };
}
// ===== click-match =====
const dmState = {};
function buildClickMatch(prefix, pairs, instruction, deTitle, roTitle) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    dmState[prefix] = { matched: {}, selDE: null, selRO: null, pairs };
    const shuffledRO = shuffleArr(pairs.map(p => p.ro));
    let deHTML = ''; pairs.forEach(p => { deHTML += `<div class="dm-tile dm-de" data-de="${p.de}" onclick="dmClickDE('${prefix}',this)">${p.de}</div>`; });
    let roHTML = ''; shuffledRO.forEach(ro => { roHTML += `<div class="dm-tile dm-ro" data-ro="${ro}" onclick="dmClickRO('${prefix}',this)">${ro}</div>`; });
    container.innerHTML = `<div class="exercise-instruction">${instruction}</div>
        <div class="dm-board"><div class="dm-col"><div class="dm-col-title">${deTitle}</div>${deHTML}</div><div class="dm-col"><div class="dm-col-title">${roTitle}</div>${roHTML}</div></div>
        <div class="dm-status" id="${prefix}-status">Perechi formate: 0 / ${pairs.length}</div>`;
}
function dmClickDE(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-de`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selDE = el; dmTry(prefix); }
function dmClickRO(prefix, el) { if (el.classList.contains('dm-correct')) return; document.querySelectorAll(`#${prefix}-container .dm-ro`).forEach(t => t.classList.remove('dm-selected')); el.classList.add('dm-selected'); dmState[prefix].selRO = el; dmTry(prefix); }
function dmTry(prefix) {
    const s = dmState[prefix];
    if (!s.selDE || !s.selRO) return;
    const de = s.selDE.dataset.de, ro = s.selRO.dataset.ro;
    const pair = s.pairs.find(p => p.de === de);
    if (pair && pair.ro === ro) { s.selDE.classList.add('dm-correct'); s.selRO.classList.add('dm-correct'); s.selDE.classList.remove('dm-selected'); s.selRO.classList.remove('dm-selected'); s.matched[de] = ro; }
    else { const a = s.selDE, b = s.selRO; a.classList.add('dm-wrong'); b.classList.add('dm-wrong'); setTimeout(() => { a.classList.remove('dm-wrong', 'dm-selected'); b.classList.remove('dm-wrong', 'dm-selected'); }, 700); }
    s.selDE = null; s.selRO = null;
    const st = document.getElementById(`${prefix}-status`); if (st) st.textContent = `Perechi formate: ${Object.keys(s.matched).length} / ${s.pairs.length}`;
}
// ===== multiple-choice =====
const mcPicked = {};
function buildMC(prefix, items, instruction) {
    const container = document.getElementById(prefix + '-container');
    if (!container) return;
    let html = `<div class="exercise-instruction">${instruction}</div>`;
    items.forEach((item, idx) => {
        let opts = '';
        item.options.forEach((opt, oi) => { opts += `<div class="mistake-opt" onclick="mcPick('${prefix}','${item.id}',${oi},this)"><span class="mistake-opt-letter">${String.fromCharCode(65 + oi)}.</span> ${opt}</div>`; });
        html += `<div class="exercise-item"><span class="exercise-number">${idx + 1}</span><div class="input-group"><label>${item.q}</label><div class="mistake-options" id="${prefix}-opts-${item.id}">${opts}</div></div><div class="feedback" id="${prefix}-f${item.id}"></div></div>`;
    });
    container.innerHTML = html;
}
function mcPick(prefix, itemId, optIdx, el) { mcPicked[prefix + '-' + itemId] = optIdx; const c = document.getElementById(`${prefix}-opts-${itemId}`); if (c) c.querySelectorAll('.mistake-opt').forEach(o => o.classList.remove('mistake-picked')); el.classList.add('mistake-picked'); }
function checkMC(prefix, items) {
    let correct = 0;
    items.forEach(item => {
        const fb = document.getElementById(`${prefix}-f${item.id}`);
        const pick = mcPicked[prefix + '-' + item.id], txt = item.options[item.correct];
        if (pick === item.correct) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect: ${txt} — ${item.explanation}`; correct++; }
        else { fb.className = 'feedback incorrect'; fb.textContent = `✗ Corect: ${txt} — ${item.explanation}`; }
    });
    return { correct, total: items.length };
}

// ============================================
// EX1: Potrivește infinitivul cu Partizip II
// ============================================
const ex1Pairs = [
    { de: 'machen', ro: 'gemacht' },
    { de: 'spielen', ro: 'gespielt' },
    { de: 'essen', ro: 'gegessen' },
    { de: 'trinken', ro: 'getrunken' },
    { de: 'gehen', ro: 'gegangen' },
    { de: 'fahren', ro: 'gefahren' },
    { de: 'einkaufen', ro: 'eingekauft' },
    { de: 'besuchen', ro: 'besucht' },
    { de: 'aufstehen', ro: 'aufgestanden' },
    { de: 'bleiben', ro: 'geblieben' }
];
function buildEx1() { buildClickMatch('ex1', ex1Pairs, '<strong>📖 Potrivește infinitivul cu participiul (Partizip II).</strong><br>Click pe infinitiv, apoi pe forma corectă de Partizip II.', '🇩🇪 Infinitiv', '✓ Partizip II'); }
function checkEx1() { const s = dmState['ex1']; return { correct: Object.keys(s.matched).length, total: ex1Pairs.length }; }
function resetEx1() { buildEx1(); const s = document.getElementById('score-1'); if (s) s.textContent = ''; }

// ============================================
// EX2: haben oder sein? (auxiliarul corect)
// ============================================
const ex2Items = [
    { id: 'a', q: 'Ich ____ am Samstag Fußball gespielt.', options: ['habe', 'bin'], correct: 0, explanation: 'spielen → haben: Ich habe gespielt.' },
    { id: 'b', q: 'Ich ____ am Sonntag ins Kino gegangen.', options: ['habe', 'bin'], correct: 1, explanation: 'gehen (mișcare) → sein: Ich bin gegangen.' },
    { id: 'c', q: 'Ich ____ zu Hause gekocht.', options: ['habe', 'bin'], correct: 0, explanation: 'kochen → haben: Ich habe gekocht.' },
    { id: 'd', q: 'Ich ____ nach Berlin gefahren.', options: ['habe', 'bin'], correct: 1, explanation: 'fahren (mișcare) → sein: Ich bin gefahren.' },
    { id: 'e', q: 'Ich ____ einen Film gesehen.', options: ['habe', 'bin'], correct: 0, explanation: 'sehen → haben: Ich habe gesehen.' },
    { id: 'f', q: 'Ich ____ früh aufgestanden.', options: ['habe', 'bin'], correct: 1, explanation: 'aufstehen (schimbare de stare) → sein: Ich bin aufgestanden.' },
    { id: 'g', q: 'Ich ____ Freunde besucht.', options: ['habe', 'bin'], correct: 0, explanation: 'besuchen → haben: Ich habe besucht.' },
    { id: 'h', q: 'Ich ____ zu Hause geblieben.', options: ['habe', 'bin'], correct: 1, explanation: 'bleiben → sein: Ich bin geblieben.' }
];
function buildEx2() { buildMC('ex2', ex2Items, '<strong>🧩 haben sau sein?</strong><br>Majoritatea → haben. Mișcare (gehen, fahren) și schimbare de stare (aufstehen) + bleiben → sein.'); }
function checkEx2() { return checkMC('ex2', ex2Items); }
function resetEx2() { ex2Items.forEach(i => delete mcPicked['ex2-' + i.id]); buildEx2(); const s = document.getElementById('score-2'); if (s) s.textContent = ''; }

// ============================================
// EX3: Partizip II corect
// ============================================
const ex3Items = [
    { id: 'a', q: 'machen → ?', options: ['gemacht', 'gemachen', 'machte'], correct: 0, explanation: 'Verb slab: ge- + mach + -t = gemacht.' },
    { id: 'b', q: 'trinken → ?', options: ['getrinkt', 'getrunken', 'getrank'], correct: 1, explanation: 'Verb tare: getrunken (cu schimbare de vocală).' },
    { id: 'c', q: 'gehen → ?', options: ['gegangen', 'gegeht', 'gegehen'], correct: 0, explanation: 'Verb tare: gegangen.' },
    { id: 'd', q: 'einkaufen → ?', options: ['eingekauft', 'gekauft ein', 'einkauft'], correct: 0, explanation: 'Separabil: ein + ge + kauft = eingekauft.' },
    { id: 'e', q: 'essen → ?', options: ['geesst', 'gegessen', 'geessen'], correct: 1, explanation: 'Verb tare: gegessen.' },
    { id: 'f', q: 'besuchen → ?', options: ['besucht', 'gebesucht', 'besuchte'], correct: 0, explanation: 'Prefix neaccentuat be- → fără ge-: besucht.' },
    { id: 'g', q: 'aufstehen → ?', options: ['aufgestanden', 'aufgesteht', 'gestanden auf'], correct: 0, explanation: 'Separabil + tare: auf + ge + standen = aufgestanden.' },
    { id: 'h', q: 'telefonieren → ?', options: ['telefoniert', 'getelefoniert', 'telefonierte'], correct: 0, explanation: 'Verb în -ieren → fără ge-: telefoniert.' }
];
function buildEx3() { buildMC('ex3', ex3Items, '<strong>🔧 Care e Partizip II corect?</strong><br>Atenție la cele 3 tipare: slab (ge-…-t), tare (ge-…-en), fără ge- (be-/-ieren).'); }
function checkEx3() { return checkMC('ex3', ex3Items); }
function resetEx3() { ex3Items.forEach(i => delete mcPicked['ex3-' + i.id]); buildEx3(); const s = document.getElementById('score-3'); if (s) s.textContent = ''; }

// ============================================
// EX4: Ce spui? — povestești weekendul
// ============================================
const ex4Items = [
    { id: 'a', q: 'Întrebi ce a făcut cineva în weekend. Spui:', options: ['Was hast du am Wochenende gemacht?', 'Was machst du morgen?', 'Wie heißt du?', 'Wo wohnst du?'], correct: 0, explanation: 'Was hast du am Wochenende gemacht? = Ce ai făcut în weekend? (Perfekt)' },
    { id: 'b', q: 'Spui că ai jucat fotbal sâmbătă. Spui:', options: ['Am Samstag habe ich Fußball gespielt.', 'Ich spiele Fußball.', 'Ich will Fußball spielen.', 'Fußball ist toll.'], correct: 0, explanation: 'Am Samstag habe ich Fußball gespielt. = Sâmbătă am jucat fotbal.' },
    { id: 'c', q: 'Spui că te-ai dus la cinema. Spui:', options: ['Ich bin ins Kino gegangen.', 'Ich habe ins Kino gegangen.', 'Ich gehe ins Kino.', 'Das Kino ist groß.'], correct: 0, explanation: 'gehen → SEIN: Ich BIN ins Kino gegangen (nu „habe").' },
    { id: 'd', q: 'Întrebi cum a fost weekendul. Spui:', options: ['Wie war dein Wochenende?', 'Wie ist das Wetter?', 'Wie viel kostet das?', 'Wie spät ist es?'], correct: 0, explanation: 'Wie war dein Wochenende? = Cum a fost weekendul tău?' },
    { id: 'e', q: 'Spui că ai gătit acasă. Spui:', options: ['Ich habe zu Hause gekocht.', 'Ich bin zu Hause gekocht.', 'Ich koche zu Hause.', 'Zu Hause ist schön.'], correct: 0, explanation: 'kochen → HABEN: Ich HABE gekocht (nu „bin").' },
    { id: 'f', q: 'Reacționezi pozitiv la o poveste. Spui:', options: ['Wie schön! Das klingt toll!', 'Tut mir leid.', 'Ich weiß nicht.', 'Das ist teuer.'], correct: 0, explanation: 'Wie schön! Das klingt toll! = Ce frumos! Sună grozav!' },
    { id: 'g', q: 'Spui că ai rămas acasă. Spui:', options: ['Ich bin zu Hause geblieben.', 'Ich habe zu Hause geblieben.', 'Ich bleibe zu Hause.', 'Zu Hause ist gut.'], correct: 0, explanation: 'bleiben → SEIN: Ich BIN geblieben.' },
    { id: 'h', q: 'Spui că seara ai învățat germană. Spui:', options: ['Am Abend habe ich Deutsch gelernt.', 'Am Abend lerne ich Deutsch.', 'Ich will Deutsch lernen.', 'Deutsch ist schwer.'], correct: 0, explanation: 'Am Abend habe ich Deutsch gelernt. = Seara am învățat germană.' }
];
function buildEx4() { buildMC('ex4', ex4Items, '<strong>💬 Povestește weekendul: ce spui?</strong><br>Alege propoziția corectă la Perfekt (atenție la haben/sein!).'); }
function checkEx4() { return checkMC('ex4', ex4Items); }
function resetEx4() { ex4Items.forEach(i => delete mcPicked['ex4-' + i.id]); buildEx4(); const s = document.getElementById('score-4'); if (s) s.textContent = ''; }

document.addEventListener('DOMContentLoaded', function () { buildEx1(); buildEx2(); buildEx3(); buildEx4(); });
