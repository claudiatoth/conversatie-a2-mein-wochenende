// ============================================
// VERB-KONJUGATION - Mein Wochenende (Conversație A2)
// Claudia Toth · 5 verbe esențiale · Präsens + Präteritum (complet) + Perfekt (pe scurt)
// Verbe verificate pe PONS (de.pons.com/verbtabellen) · Präteritum → RO imperfect
// La A2 Perfekt-ul e ACTIV — îl folosești în vorbire.
// REGULĂ: NU backticks, NU ghilimele interne care rup template literal!
// ============================================

const verbsData = [
    {
        inf: 'machen', ro: 'a face', typ: 'slab / regulat', aux: 'haben', part: 'gemacht',
        praes: [['ich','mache','fac'],['du','machst','faci'],['er/sie/es','macht','face'],['wir','machen','facem'],['ihr','macht','faceți'],['sie/Sie','machen','fac']],
        praet: [['ich','machte','făceam'],['du','machtest','făceai'],['er/sie/es','machte','făcea'],['wir','machten','făceam'],['ihr','machtet','făceați'],['sie/Sie','machten','făceau']],
        perf: [['ich','habe gemacht','am făcut'],['du','hast gemacht','ai făcut'],['er/sie/es','hat gemacht','a făcut'],['wir','haben gemacht','am făcut'],['ihr','habt gemacht','ați făcut'],['sie/Sie','haben gemacht','au făcut']],
        note: 'Verb SLAB (regulat). Partizip: ge-mach-t. Întrebarea-cheie: „Was hast du am Wochenende gemacht?"'
    },
    {
        inf: 'sehen', ro: 'a vedea', typ: 'tare / neregulat', aux: 'haben', part: 'gesehen',
        praes: [['ich','sehe','văd'],['du','siehst','vezi'],['er/sie/es','sieht','vede'],['wir','sehen','vedem'],['ihr','seht','vedeți'],['sie/Sie','sehen','văd']],
        praet: [['ich','sah','vedeam'],['du','sahst','vedeai'],['er/sie/es','sah','vedea'],['wir','sahen','vedeam'],['ihr','saht','vedeați'],['sie/Sie','sahen','vedeau']],
        perf: [['ich','habe gesehen','am văzut'],['du','hast gesehen','ai văzut'],['er/sie/es','hat gesehen','a văzut'],['wir','haben gesehen','am văzut'],['ihr','habt gesehen','ați văzut'],['sie/Sie','haben gesehen','au văzut']],
        note: 'NEREGULAT: e→ie la du/er (siehst, sieht). Partizip: gesehen. „Ich habe einen Film gesehen."'
    },
    {
        inf: 'gehen', ro: 'a merge (pe jos)', typ: 'tare / neregulat', aux: 'sein', part: 'gegangen',
        praes: [['ich','gehe','merg'],['du','gehst','mergi'],['er/sie/es','geht','merge'],['wir','gehen','mergem'],['ihr','geht','mergeți'],['sie/Sie','gehen','merg']],
        praet: [['ich','ging','mergeam'],['du','gingst','mergeai'],['er/sie/es','ging','mergea'],['wir','gingen','mergeam'],['ihr','gingt','mergeați'],['sie/Sie','gingen','mergeau']],
        perf: [['ich','bin gegangen','am mers'],['du','bist gegangen','ai mers'],['er/sie/es','ist gegangen','a mers'],['wir','sind gegangen','am mers'],['ihr','seid gegangen','ați mers'],['sie/Sie','sind gegangen','au mers']],
        note: 'Verb de MIȘCARE → Perfekt cu SEIN. „Ich bin ins Kino gegangen." (NU „habe gegangen"!) — capcană pentru români.'
    },
    {
        inf: 'einkaufen', ro: 'a face cumpărături', typ: 'slab / separabil', aux: 'haben', part: 'eingekauft',
        praes: [['ich','kaufe ein','fac cumpărături'],['du','kaufst ein','faci cumpărături'],['er/sie/es','kauft ein','face cumpărături'],['wir','kaufen ein','facem cumpărături'],['ihr','kauft ein','faceți cumpărături'],['sie/Sie','kaufen ein','fac cumpărături']],
        praet: [['ich','kaufte ein','făceam cumpărături'],['du','kauftest ein','făceai cumpărături'],['er/sie/es','kaufte ein','făcea cumpărături'],['wir','kauften ein','făceam cumpărături'],['ihr','kauftet ein','făceați cumpărături'],['sie/Sie','kauften ein','făceau cumpărături']],
        perf: [['ich','habe eingekauft','am făcut cumpărături'],['du','hast eingekauft','ai făcut cumpărături'],['er/sie/es','hat eingekauft','a făcut cumpărături'],['wir','haben eingekauft','am făcut cumpărături'],['ihr','habt eingekauft','ați făcut cumpărături'],['sie/Sie','haben eingekauft','au făcut cumpărături']],
        note: 'SLAB + SEPARABIL (ein + kaufen). Partizip: ein-ge-kauft. „Ich habe am Samstag eingekauft."'
    },
    {
        inf: 'aufstehen', ro: 'a se trezi / a se scula', typ: 'tare / separabil', aux: 'sein', part: 'aufgestanden',
        praes: [['ich','stehe auf','mă trezesc'],['du','stehst auf','te trezești'],['er/sie/es','steht auf','se trezește'],['wir','stehen auf','ne trezim'],['ihr','steht auf','vă treziți'],['sie/Sie','stehen auf','se trezesc']],
        praet: [['ich','stand auf','mă trezeam'],['du','standst auf','te trezeai'],['er/sie/es','stand auf','se trezea'],['wir','standen auf','ne trezeam'],['ihr','standet auf','vă trezeați'],['sie/Sie','standen auf','se trezeau']],
        perf: [['ich','bin aufgestanden','m-am trezit'],['du','bist aufgestanden','te-ai trezit'],['er/sie/es','ist aufgestanden','s-a trezit'],['wir','sind aufgestanden','ne-am trezit'],['ihr','seid aufgestanden','v-ați trezit'],['sie/Sie','sind aufgestanden','s-au trezit']],
        note: 'SEPARABIL + schimbare de stare → Perfekt cu SEIN. Partizip: auf-ge-standen. „Ich bin früh aufgestanden."'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (cel mai folosit la A2!)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> er <strong>' + v.perf[2][1] + '</strong> · <em style="color:#6b7280;">' + v.perf[2][2] + '</em><br>' +
        '<small style="color:#6b7280;">Conjugi auxiliarul (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong> la final.</small></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe din lecție</strong> — Präsens + Präteritum (complet) · <strong>Perfekt</strong> (forma-cheie la A2).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Cele 5 verbe acoperă toate tiparele de Partizip II.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„La A2, Perfekt-ul nu mai e doar de referință — îl FOLOSEȘTI ca să povestești trecutul! Uită-te bine la coloana Perfekt: machen→gemacht (slab), sehen→gesehen (tare), gehen→gegangen (cu SEIN!), einkaufen→eingekauft (separabil), aufstehen→aufgestanden (separabil + SEIN). Verbele TARI sunt verificate pe PONS. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
