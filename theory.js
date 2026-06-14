// ============================================
// TEORIE - Mein Wochenende (Conversație A2)
// Claudia Toth · a povesti trecutul: PERFEKT activ (haben/sein + Partizip II)
// Sursă: vocabular A2 standard (PONS) · conținut 100% original
// ============================================

const theoryHTML = `
    <!-- 0: Situație + sarcină -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Situația & sarcina ta</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">Bun venit la A2! 🎉 Acum facem cel mai important pas: <strong>povestim trecutul</strong>. În germana vorbită, pentru trecut folosești <strong>Perfekt</strong>: <em>Ich habe Fußball gespielt</em> (am jucat fotbal), <em>Ich bin ins Kino gegangen</em> (m-am dus la cinema). Înveți cum se formează (haben/sein + Partizip II) și exersezi povestind weekendul tău. Eu îi povestesc lui <strong>Florian</strong> ce am făcut sâmbătă și duminică. La final povestești TU, cu voce tare!</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📍 Situation</h4>
                <p>🇩🇪 Es ist Montag. Andreea und Florian erzählen sich, was sie am Wochenende gemacht haben.</p>
                <p style="margin-top:6px;">🇷🇴 E luni. Andreea și Florian își povestesc ce au făcut în weekend.</p>
            </div>

            <div class="theory-box" style="background:#ecfdf5;border-color:#10b981;">
                <h4>🎯 Aufgabe / Sarcina</h4>
                <p>🇩🇪 Erzähl von deinem Wochenende im Perfekt: was du gemacht hast und wohin du gegangen bist.</p>
                <p style="margin-top:6px;">🇷🇴 Povestește despre weekendul tău la Perfekt: ce ai făcut și unde ai mers.</p>
            </div>

            <div class="theory-box" style="background:#F5F0E8;border-color:#D4A574;">
                <h4>✍️ Notă despre diacritice</h4>
                <p>Verificarea e blândă: poți scrie Umlaut-urile corect (<em>aufgeräumt</em>) sau cu varianta de înlocuire (<em>aufgeraeumt</em>). Ambele sunt acceptate peste tot în lecție.</p>
            </div>
        </div>
    </div>

    <!-- 1: Wortschatz — Wochenend-Aktivitäten + Partizip II -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📖 2. Vocabular: activități de weekend (+ Partizip II)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-wortschatz.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46;margin-bottom:8px;">2.1 🎲 Activități cu „haben" (infinitiv → Partizip II)</h4>
            <table class="grammar-table">
                <thead><tr><th>Infinitiv</th><th>Partizip II</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">machen</td><td>gemacht</td><td>a face</td></tr>
                    <tr><td class="verb">spielen</td><td>gespielt</td><td>a (se) juca</td></tr>
                    <tr><td class="verb">kochen</td><td>gekocht</td><td>a găti</td></tr>
                    <tr><td class="verb">lernen</td><td>gelernt</td><td>a învăța</td></tr>
                    <tr><td class="verb">arbeiten</td><td>gearbeitet</td><td>a lucra</td></tr>
                    <tr><td class="verb">einkaufen</td><td>eingekauft</td><td>a face cumpărături (separabil)</td></tr>
                    <tr><td class="verb">aufräumen</td><td>aufgeräumt</td><td>a face curat (separabil)</td></tr>
                    <tr><td class="verb">fernsehen</td><td>ferngesehen</td><td>a se uita la TV (separabil)</td></tr>
                    <tr><td class="verb">besuchen</td><td>besucht</td><td>a vizita (fără ge-)</td></tr>
                    <tr><td class="verb">telefonieren</td><td>telefoniert</td><td>a vorbi la telefon (fără ge-)</td></tr>
                    <tr><td class="verb">essen</td><td>gegessen</td><td>a mânca (neregulat)</td></tr>
                    <tr><td class="verb">trinken</td><td>getrunken</td><td>a bea (neregulat)</td></tr>
                    <tr><td class="verb">sehen</td><td>gesehen</td><td>a vedea (neregulat)</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#eef2ff;border-color:#6366f1;">
                <h4>🚶 Verbe cu „sein" (mișcare & schimbare de stare)</h4>
                <table class="grammar-table" style="margin-top:6px;">
                    <thead><tr><th>Infinitiv</th><th>Partizip II</th><th>Traducere RO</th></tr></thead>
                    <tbody>
                        <tr><td class="verb">gehen</td><td>(ist) gegangen</td><td>a merge (pe jos)</td></tr>
                        <tr><td class="verb">fahren</td><td>(ist) gefahren</td><td>a merge (cu un vehicul)</td></tr>
                        <tr><td class="verb">kommen</td><td>(ist) gekommen</td><td>a veni</td></tr>
                        <tr><td class="verb">aufstehen</td><td>(ist) aufgestanden</td><td>a se trezi (separabil)</td></tr>
                        <tr><td class="verb">bleiben</td><td>(ist) geblieben</td><td>a rămâne</td></tr>
                        <tr><td class="verb">sein</td><td>(ist) gewesen</td><td>a fi (Ich bin zu Hause gewesen)</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 2: Gramatică — Perfekt -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🧩 3. Gramatica de bază: Perfekt (haben/sein + Partizip II)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-grammatik.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46;margin-bottom:8px;">3.1 Cum se formează Perfekt</h4>
            <p style="margin-bottom:8px;">Perfekt = timpul trecut din <strong>vorbire</strong>. Are 2 părți: <strong>haben</strong> sau <strong>sein</strong> (conjugat, pe locul 2) + <strong>Partizip II</strong> (la FINALUL propoziției — regula KLAMMER).</p>
            <table class="grammar-table">
                <thead><tr><th>Subiect</th><th>haben/sein (loc 2)</th><th>…</th><th>Partizip II (final)</th></tr></thead>
                <tbody>
                    <tr><td>Ich</td><td class="verb">habe</td><td>am Samstag Fußball</td><td class="verb">gespielt.</td></tr>
                    <tr><td>Ich</td><td class="verb">bin</td><td>am Abend ins Kino</td><td class="verb">gegangen.</td></tr>
                    <tr><td>Wir</td><td class="verb">haben</td><td>zu Hause</td><td class="verb">gekocht.</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46;margin:16px 0 8px;">3.2 „haben" sau „sein"?</h4>
            <table class="grammar-table">
                <thead><tr><th>Auxiliar</th><th>Când</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td class="verb">haben</td><td>majoritatea verbelor</td><td><em>Ich habe gegessen / gespielt / gearbeitet.</em></td></tr>
                    <tr><td class="verb">sein</td><td>mișcare (gehen, fahren, kommen)</td><td><em>Ich bin gegangen / gefahren.</em></td></tr>
                    <tr><td class="verb">sein</td><td>schimbare de stare + bleiben, sein</td><td><em>Ich bin aufgestanden / geblieben / gewesen.</em></td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46;margin:16px 0 8px;">3.3 Partizip II — 3 tipare</h4>
            <table class="grammar-table">
                <thead><tr><th>Tip</th><th>Formula</th><th>Exemplu</th></tr></thead>
                <tbody>
                    <tr><td>slabe (regulate)</td><td class="verb">ge- + radical + -t</td><td>machen → <strong>ge</strong>mach<strong>t</strong></td></tr>
                    <tr><td>tari (neregulate)</td><td class="verb">ge- + radical + -en</td><td>trinken → <strong>ge</strong>trunk<strong>en</strong></td></tr>
                    <tr><td>fără „ge-"</td><td class="verb">be…/…-ieren</td><td>besuchen → besucht · telefonieren → telefoniert</td></tr>
                    <tr><td>separabile</td><td class="verb">prefix + ge + …</td><td>einkaufen → ein<strong>ge</strong>kauft</td></tr>
                </tbody>
            </table>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">Regula de aur a Perfekt: <strong>auxiliarul pe locul 2, Partizip II la coadă</strong>. „Ich <u>habe</u> am Wochenende viel <u>gemacht</u>." Nu uita: verbele de mișcare merg cu <strong>sein</strong> (Ich <u>bin</u> ins Kino <u>gegangen</u>) — capcană clasică pentru români! 🦋</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Fraze utile -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🗣️ 4. Fraze utile pe situații (Nützliche Phrasen)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-phrasen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46;margin-bottom:8px;">4.1 Ca să întrebi despre weekend</h4>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Was hast du am Wochenende gemacht?</td><td>Ce ai făcut în weekend?</td></tr>
                    <tr><td class="verb">Wie war dein Wochenende?</td><td>Cum a fost weekendul tău?</td></tr>
                    <tr><td class="verb">Wo warst du am Samstag?</td><td>Unde ai fost sâmbătă?</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46;margin:16px 0 8px;">4.2 Ca să povestești</h4>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Am Samstag habe ich Freunde getroffen.</td><td>Sâmbătă m-am întâlnit cu prieteni.</td></tr>
                    <tr><td class="verb">Am Abend bin ich ins Kino gegangen.</td><td>Seara m-am dus la cinema.</td></tr>
                    <tr><td class="verb">Und dann habe ich zu Hause gekocht.</td><td>Și apoi am gătit acasă.</td></tr>
                    <tr><td class="verb">Es war ein schönes Wochenende.</td><td>A fost un weekend frumos.</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46;margin:16px 0 8px;">4.3 Ca să reacționezi</h4>
            <table class="grammar-table">
                <thead><tr><th>Deutsch</th><th>Traducere RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Wie schön! / Das klingt toll!</td><td>Ce frumos! / Sună grozav!</td></tr>
                    <tr><td class="verb">Echt? / Wirklich?</td><td>Serios? / Pe bune?</td></tr>
                    <tr><td class="verb">Oh, schade!</td><td>O, păcat!</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 4: Mini-ghid -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🧭 5. Cum povestești weekendul în 5 pași</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-ghid.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>
            <div class="theory-box">
                <h4>🔑 Rețeta unei povestiri despre weekend (A2)</h4>
                <ol style="margin-left:22px;">
                    <li><strong>Începe cu ziua:</strong> „Am Samstag…"</li>
                    <li><strong>Spune ce ai făcut (haben):</strong> „…habe ich Fußball gespielt."</li>
                    <li><strong>Spune unde ai mers (sein):</strong> „Am Abend bin ich ins Kino gegangen."</li>
                    <li><strong>Leagă cu „und dann" / „danach":</strong> „Und dann habe ich gegessen."</li>
                    <li><strong>Încheie cu o părere:</strong> „Es war ein schönes Wochenende!"</li>
                </ol>
            </div>
            <div class="andreea-note">
                <img class="andreea-note-avatar" src="images/andreea.png" alt="Andreea">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea</div>
                    <div class="text">Acum ascultă cum îi povestesc lui Florian weekendul meu — vei auzi mult Perfekt: „habe… gespielt", „bin… gegangen", „habe… gekocht". Apoi treci la exerciții și, la final, îmi povestești TU ce ai făcut. Folosește 3-4 propoziții la Perfekt! 💚</div>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
