/**
 * Modul 1 - Absolutismus (Geschichts-Klassenarbeit, Klasse 8).
 *   L1 Überblick & Zeitstrahl 1661-1799 - Buch S. 84/85
 *   L2 Absolutismus & Gottesgnadentum (Ludwig XIV.) - Buch S. 88/89
 *   L3 Die 4 Säulen der Macht (Beamte, Heer, Richter, Kirche) + Versailles/Etikette - Buch S. 88-91
 *
 * Jede Lektion: Erklärung (mit Analogie/Tipp/Warnung) -> Beispiel -> Übungen.
 * Zielgruppe: Leonie, Klasse 8, Realschule BW, M-Niveau. Einfache Sprache, Alltagsanalogien.
 * Inhalte in eigenen Worten nach dem Schulbuch + Lernzettel (kein kopierter Verlagstext).
 */

window.LESSON_DATA = (window.LESSON_DATA || []).concat([

  // ===================================================================
  // Lektion 1: Überblick & Zeitstrahl 1661-1799
  // ===================================================================
  {
    id: 1,
    title: "Überblick & Zeitstrahl 1661–1799",
    explanation: {
      html: `
        <h2>Worum geht es? Der große Überblick</h2>
        <p>In dieser Arbeit geht es um eine spannende Zeit: Erst herrscht in Frankreich ein König
        mit <strong>uneingeschränkter Macht</strong> (der <strong>Absolutismus</strong>). Dann lehnt sich
        das Volk auf - das ist die <strong>Französische Revolution</strong>. Am Ende ist der König tot und
        Frankreich eine <strong>Republik</strong>.</p>

        <div class="analogy-box">
          <strong>Wie ein Film in drei Akten:</strong><br>
          - <strong>Akt 1 (Absolutismus):</strong> Ein König bestimmt alles allein - niemand darf widersprechen.<br>
          - <strong>Akt 2 (Aufklärung):</strong> Kluge Denker sagen: "Moment, das ist ungerecht!"<br>
          - <strong>Akt 3 (Revolution):</strong> Das Volk steht auf und stürzt den König.<br>
          Die Jahreszahlen unten sind die wichtigsten "Szenen" dieses Films.
        </div>

        <h3>Der Zeitstrahl - die 7 wichtigsten Punkte</h3>
        <svg viewBox="0 0 440 70" role="img" aria-label="Zeitstrahl von 1661 bis 1799" style="max-width:430px;width:100%;height:auto;display:block;margin:1rem auto;font-family:sans-serif;">
          <line x1="20" y1="38" x2="420" y2="38" stroke="#2563EB" stroke-width="3"/>
          <circle cx="40" cy="38" r="5" fill="#2563EB"/><text x="40" y="22" text-anchor="middle" font-size="11" fill="#1f2937">1661</text>
          <circle cx="170" cy="38" r="5" fill="#2563EB"/><text x="170" y="22" text-anchor="middle" font-size="11" fill="#1f2937">1789</text>
          <circle cx="300" cy="38" r="5" fill="#dc2626"/><text x="300" y="22" text-anchor="middle" font-size="11" fill="#1f2937">1792/93</text>
          <circle cx="400" cy="38" r="5" fill="#2563EB"/><text x="400" y="22" text-anchor="middle" font-size="11" fill="#1f2937">1799</text>
          <text x="40" y="56" text-anchor="middle" font-size="9" fill="#6b7280">Ludwig XIV.</text>
          <text x="170" y="56" text-anchor="middle" font-size="9" fill="#6b7280">Revolution</text>
          <text x="300" y="56" text-anchor="middle" font-size="9" fill="#6b7280">Republik</text>
          <text x="400" y="56" text-anchor="middle" font-size="9" fill="#6b7280">Napoleon</text>
        </svg>

        <table class="icon-table">
          <tr><th>Wann?</th><th>Was passiert?</th></tr>
          <tr><td><strong>1661–1715</strong></td><td><strong>Ludwig XIV.</strong> regiert Frankreich als absoluter König (der "Sonnenkönig").</td></tr>
          <tr><td><strong>18. Jh.</strong></td><td>Die <strong>Aufklärung</strong> kritisiert die unbeschränkte Macht des Königs.</td></tr>
          <tr><td><strong>14. Juli 1789</strong></td><td>Bürger stürmen in Paris die <strong>Bastille</strong> - die Revolution beginnt.</td></tr>
          <tr><td><strong>26. August 1789</strong></td><td>Die Nationalversammlung beschließt die <strong>Menschen- und Bürgerrechte</strong>.</td></tr>
          <tr><td><strong>1792</strong></td><td>Frankreich wird eine <strong>Republik</strong> (Staat ohne König).</td></tr>
          <tr><td><strong>1793</strong></td><td>Der <strong>König wird hingerichtet</strong> - es beginnt eine Zeit des Terrors.</td></tr>
          <tr><td><strong>1799</strong></td><td><strong>Napoleon</strong> übernimmt die Macht und erklärt die Revolution für beendet.</td></tr>
        </table>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> Auf deinem Lernzettel steht ganz oben "Zeitstrahl (mit Zahlen)".
          In der Arbeit sollst du Ereignisse den richtigen Jahren zuordnen oder in die richtige Reihenfolge
          bringen. Wenn du diese 7 Punkte sicher kannst, hast du das Gerüst der ganzen Arbeit im Kopf.
        </div>

        <div class="tip-box">
          <strong>Merk-Anker:</strong> Drei Zahlen musst du blind können:<br>
          <strong>1789</strong> = die Revolution beginnt (Sturm auf die Bastille).<br>
          <strong>1792</strong> = Frankreich wird Republik.<br>
          <strong>1793</strong> = der König wird hingerichtet.<br>
          Alles andere ordnet sich um diese drei herum.
        </div>

        <div class="warning-box">
          <strong>Achtung, leicht zu verwechseln:</strong> 1789 beginnt die Revolution, aber der König lebt
          noch und bleibt erst einmal König! Erst <strong>1792</strong> wird Frankreich Republik und <strong>1793</strong>
          wird der König hingerichtet. Also: <em>erst Revolution, dann Republik, dann Hinrichtung</em>.
        </div>

        <div class="info-card">
          <strong>Das musst du wissen:</strong> Die Forderung der Revolution lautete
          <strong>"Freiheit – Gleichheit – Brüderlichkeit"</strong> (französisch: liberté, égalité, fraternité).
          Diesen Dreiklang solltest du nennen können.
        </div>
      `
    },
    example: {
      title: "Beispiel: Ereignisse in die richtige Reihenfolge bringen",
      steps: [
        {
          label: "Die Aufgabe",
          html: `<p>Du bekommst vier Ereignisse durcheinander und sollst sie ordnen:<br>
            <em>Frankreich wird Republik · Sturm auf die Bastille · Napoleon übernimmt die Macht · der König wird hingerichtet.</em></p>`
        },
        {
          label: "So gehst du vor",
          html: `<p>Häng jedes Ereignis an seine Jahreszahl:<br>
            Sturm auf die Bastille = <strong>1789</strong>, Republik = <strong>1792</strong>,
            König hingerichtet = <strong>1793</strong>, Napoleon = <strong>1799</strong>.
            Jetzt musst du nur noch die Zahlen aufsteigend sortieren.</p>`
        },
        {
          label: "Die Lösung",
          html: `<p><strong>1.</strong> Sturm auf die Bastille (1789) &rarr; <strong>2.</strong> Frankreich wird Republik (1792)
            &rarr; <strong>3.</strong> König wird hingerichtet (1793) &rarr; <strong>4.</strong> Napoleon übernimmt die Macht (1799).</p>`
        }
      ]
    },
    exercisesIntro: "Tipp: Häng jedes Ereignis an seine Jahreszahl - dann kannst du alles ordnen und zuordnen.",
    exercises: [
      {
        type: "ordering",
        question: "Bringe die Ereignisse in die richtige zeitliche Reihenfolge (frühestes zuerst):",
        items: [
          "Sturm auf die Bastille (Revolution beginnt)",
          "Frankreich wird Republik",
          "Der König wird hingerichtet",
          "Napoleon übernimmt die Macht"
        ],
        correctOrder: [0, 1, 2, 3],
        explanation: "1789 (Bastille) → 1792 (Republik) → 1793 (Hinrichtung) → 1799 (Napoleon). Immer in dieser Reihenfolge."
      },
      {
        type: "multiple-choice",
        question: "Was geschah am <strong>14. Juli 1789</strong>?",
        options: [
          "Bürger stürmten in Paris die Bastille - die Revolution begann.",
          "Frankreich wurde eine Republik.",
          "Der König wurde hingerichtet.",
          "Napoleon wurde Kaiser."
        ],
        correct: 0,
        explanation: "Richtig! Der 14. Juli 1789 (Sturm auf die Bastille) ist der Beginn der Revolution - heute Frankreichs Nationalfeiertag.",
        wrongExplanations: {
          1: "Republik wurde Frankreich erst 1792, drei Jahre später.",
          2: "Der König wurde erst 1793 hingerichtet.",
          3: "Napoleon kam erst ab 1799 an die Macht."
        }
      },
      {
        type: "fill-in-blank",
        question: "Fülle die drei wichtigsten Jahreszahlen ein:",
        text: "Die Revolution begann im Jahr {{blank}} mit dem Sturm auf die Bastille. {{blank}} wurde Frankreich eine Republik, und {{blank}} wurde der König hingerichtet.",
        blanks: [
          { correct: "1789" },
          { correct: "1792" },
          { correct: "1793" }
        ],
        explanation: "1789 Revolution, 1792 Republik, 1793 Hinrichtung - diese Reihenfolge ist das Grundgerüst."
      },
      {
        type: "multiple-choice",
        question: "Wie hieß die berühmte Forderung der Französischen Revolution?",
        options: [
          "Freiheit – Gleichheit – Brüderlichkeit",
          "Brot – Frieden – Land",
          "Gott – Kaiser – Vaterland",
          "Einigkeit – Recht – Freiheit"
        ],
        correct: 0,
        explanation: "Genau! 'Freiheit, Gleichheit, Brüderlichkeit' (liberté, égalité, fraternité) war der Leitspruch der Revolution.",
        wrongExplanations: {
          1: "Das ist eine Parole aus der Russischen Revolution (1917), nicht der Französischen.",
          2: "Das ist ein Spruch aus dem deutschen Kaiserreich.",
          3: "'Einigkeit und Recht und Freiheit' ist der Beginn der deutschen Nationalhymne."
        }
      }
    ]
  },

  // ===================================================================
  // Lektion 2: Absolutismus & Gottesgnadentum
  // ===================================================================
  {
    id: 2,
    title: "Absolutismus & Gottesgnadentum",
    explanation: {
      html: `
        <h2>Der König, der alles allein bestimmt</h2>
        <p>König <strong>Ludwig XIV.</strong> von Frankreich (gesprochen: "der Vierzehnte") regierte von
        1661 bis 1715. Er führte eine Herrschaftsform, die man <strong>Absolutismus</strong> nennt. Das heißt:
        Der König hat die <strong>absolute (= uneingeschränkte) Macht</strong> - ganz allein, ohne dass ihm
        jemand reinredet.</p>

        <div class="analogy-box">
          <strong>Stell dir eine Klasse ohne Mitsprache vor:</strong> Der Lehrer macht ALLES allein - er
          schreibt die Regeln, kontrolliert sie, bestraft Verstöße und es gibt keinen Klassenrat, keine SMV,
          keine Beschwerde. Niemand darf widersprechen. Genau so regierte Ludwig XIV. ein ganzes Land:
          Er war Regel-Macher, Richter und Kontrolleur in einer Person.
        </div>

        <h3>1. "Der Staat bin ich"</h3>
        <p>Über Ludwig XIV. wird der Satz <strong>"Der Staat bin ich"</strong> (französisch: "L'État, c'est moi")
        überliefert. Damit ist gemeint: Der König <em>ist</em> der Staat. Es gibt keine Gewaltenteilung -
        er macht die Gesetze, er regiert, er ist oberster Richter. Ein Parlament, das ihn kontrolliert, gibt es nicht.</p>

        <h3>2. Gottesgnadentum - die Macht "von Gottes Gnaden"</h3>
        <p>Warum durfte der König das? Die Begründung hieß <strong>Gottesgnadentum</strong>: Der König glaubte,
        seine Macht <strong>direkt von Gott</strong> bekommen zu haben ("König von Gottes Gnaden"). Deshalb war
        er <strong>nur Gott Rechenschaft schuldig</strong> - keinem Menschen. Wer sich gegen den König stellte,
        stellte sich also (so die Idee) gegen Gott selbst.</p>

        <div class="info-card">
          <strong>Zwei Schlüsselbegriffe:</strong>
          <ul>
            <li><strong>Absolutismus</strong> = der König hat die uneingeschränkte (absolute) Macht und regiert allein.</li>
            <li><strong>Gottesgnadentum</strong> = die Vorstellung, dass der König seine Macht von Gott erhalten hat und nur Gott verantwortlich ist.</li>
          </ul>
        </div>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> Auf deinem Lernzettel stehen "Absolutismus, Gottesgnadentum"
          und "Der König als absoluter Herrscher". Das sind klassische Definitions-Fragen: Du sollst beide
          Begriffe in einem Satz erklären können.
        </div>

        <div class="tip-box">
          <strong>So merkst du dir die Begriffe:</strong><br>
          - <strong>Absolut</strong> kennst du vom Handy: "absolut voll" = ganz und gar voll. Absolute Macht = ganz und gar alle Macht.<br>
          - <strong>Gottesgnaden</strong>tum: Die Macht ist ein "Geschenk" (eine Gnade) von <em>Gott</em> - das steckt im Wort.
        </div>

        <div class="warning-box">
          <strong>Typischer Fehler:</strong> "Absolutismus" und "Gottesgnadentum" sind nicht dasselbe!
          Der <strong>Absolutismus</strong> beschreibt, <em>wie</em> der König herrscht (allein, mit aller Macht).
          Das <strong>Gottesgnadentum</strong> ist die <em>Begründung</em>, <em>warum</em> er das darf (weil Gott es so will).
        </div>
      `
    },
    example: {
      title: "Beispiel: Woran erkennt man absolute Herrschaft?",
      steps: [
        {
          label: "Die Situation",
          html: `<p>Ein König sagt: "Ich erlasse dieses Gesetz, ich entscheide über Krieg und Frieden, und
            wer mich kritisiert, wird bestraft. Verantwortung trage ich nur vor Gott." Welche Merkmale erkennst du?</p>`
        },
        {
          label: "Merkmal 1 - alle Macht",
          html: `<p>Er macht Gesetze, regiert und richtet - alles allein. Keine Gewaltenteilung.
            &rarr; Das ist <strong>Absolutismus</strong> ("Der Staat bin ich").</p>`
        },
        {
          label: "Merkmal 2 - die Begründung",
          html: `<p>"Verantwortung nur vor Gott" &rarr; Er beruft sich auf das <strong>Gottesgnadentum</strong>.
            Niemand auf der Erde darf ihn zur Rechenschaft ziehen.</p>`
        }
      ]
    },
    exercisesIntro: "Frag dich bei jeder Aussage: Beschreibt sie die <strong>Macht</strong> (Absolutismus) oder die <strong>Begründung</strong> (Gottesgnadentum)?",
    exercises: [
      {
        type: "multiple-choice",
        question: "Was bedeutet <strong>Absolutismus</strong>?",
        options: [
          "Der König hat die uneingeschränkte Macht und regiert allein.",
          "Das Volk wählt den König alle vier Jahre.",
          "Der König muss alle Gesetze vom Parlament genehmigen lassen.",
          "Mehrere Fürsten teilen sich die Macht gleichberechtigt."
        ],
        correct: 0,
        explanation: "Richtig! Absolut = uneingeschränkt. Der absolute König herrscht allein, ohne Kontrolle.",
        wrongExplanations: {
          1: "Im Absolutismus wird der König nicht gewählt - er ist König durch Geburt und Gottesgnadentum.",
          2: "Genau das gibt es im Absolutismus NICHT - kein Parlament kontrolliert den König.",
          3: "Das wäre das Gegenteil. Im Absolutismus hat EINE Person alle Macht."
        }
      },
      {
        type: "multiple-choice",
        question: "Was versteht man unter <strong>Gottesgnadentum</strong>?",
        options: [
          "Der König glaubt, seine Macht von Gott erhalten zu haben, und ist nur Gott verantwortlich.",
          "Der König muss jeden Sonntag in die Kirche gehen.",
          "Die Kirche bestimmt, wer König wird.",
          "Der König schenkt den Armen Geld aus Gnade."
        ],
        correct: 0,
        explanation: "Genau! 'Von Gottes Gnaden' - die Macht kommt (angeblich) direkt von Gott, deshalb darf kein Mensch den König kontrollieren.",
        wrongExplanations: {
          1: "Mit Kirchgang hat der Begriff nichts zu tun. Es geht um die Herkunft der Macht.",
          2: "Nein, der König wird König durch Geburt (Erbfolge), nicht durch die Kirche.",
          3: "Das ist Wohltätigkeit, nicht Gottesgnadentum. Es geht um die Begründung der Herrschaft."
        }
      },
      {
        type: "fill-in-blank",
        question: "Vervollständige den berühmten Satz und seine Bedeutung:",
        text: "Ludwig XIV. wird der Satz 'Der {{blank}} bin ich' zugeschrieben. Er bedeutet, dass der König alle Macht allein besitzt - es gibt keine {{blank}}.",
        blanks: [
          { correct: "Staat", alternatives: ["staat"] },
          { correct: "Gewaltenteilung", alternatives: ["gewaltenteilung", "Mitsprache", "Kontrolle"] }
        ],
        explanation: "'Der Staat bin ich' bedeutet: Der König IST der Staat - er macht Gesetze, regiert und richtet allein. Keine Gewaltenteilung."
      },
      {
        type: "free-text",
        question: "<strong>Erkläraufgabe:</strong> Erkläre in 2-3 Sätzen, was man unter dem Absolutismus versteht und wie der König seine Macht begründete.",
        hint: "Nenne zuerst, wie der König herrscht (Absolutismus), und dann die Begründung (Gottesgnadentum).",
        minWords: 20,
        modelAnswer: "Unter dem Absolutismus versteht man eine Herrschaftsform, bei der der König die gesamte, uneingeschränkte Macht allein besitzt. Er macht die Gesetze, regiert das Land und ist oberster Richter - eine Gewaltenteilung gibt es nicht. Seine Macht begründete der König mit dem Gottesgnadentum: Er glaubte, sie direkt von Gott erhalten zu haben, und musste sich deshalb nur vor Gott verantworten, nicht vor den Menschen."
      }
    ]
  },

  // ===================================================================
  // Lektion 3: Die 4 Säulen der Macht
  // ===================================================================
  {
    id: 3,
    title: "Die 4 Säulen der Macht",
    explanation: {
      html: `
        <h2>Worauf der absolute König seine Macht stützt</h2>
        <p>Ein König kann nicht ganz allein ein riesiges Land beherrschen. Er braucht <strong>Werkzeuge der Macht</strong>.
        Man spricht von den <strong>vier Säulen des Absolutismus</strong> - vier Stützen, auf denen die Macht des
        Königs ruht. Fällt eine weg, wackelt die Herrschaft.</p>

        <div class="analogy-box">
          <strong>Wie ein Tisch mit vier Beinen:</strong> Eine Tischplatte (die Macht des Königs) braucht
          vier stabile Beine, sonst kippt sie um. Beim absoluten König sind diese vier "Beine":
          die <strong>Beamten</strong>, das <strong>Heer</strong>, die <strong>Richter</strong> und die <strong>Kirche</strong>.
        </div>

        <svg viewBox="0 0 440 150" role="img" aria-label="Vier Säulen tragen die absolute Macht des Königs: Beamte, Heer, Richter, Kirche" style="max-width:430px;width:100%;height:auto;display:block;margin:1rem auto;font-family:sans-serif;">
          <rect x="40" y="14" width="360" height="26" rx="5" fill="#2563EB"/>
          <text x="220" y="32" text-anchor="middle" font-size="13" fill="#ffffff" font-weight="bold">Absolute Macht des Königs</text>
          <rect x="55" y="50" width="70" height="80" rx="4" fill="#dbeafe" stroke="#2563EB" stroke-width="2"/>
          <text x="90" y="95" text-anchor="middle" font-size="11" fill="#1e3a8a" font-weight="bold">Beamte</text>
          <rect x="148" y="50" width="70" height="80" rx="4" fill="#dbeafe" stroke="#2563EB" stroke-width="2"/>
          <text x="183" y="95" text-anchor="middle" font-size="12" fill="#1e3a8a" font-weight="bold">Heer</text>
          <rect x="241" y="50" width="70" height="80" rx="4" fill="#dbeafe" stroke="#2563EB" stroke-width="2"/>
          <text x="276" y="95" text-anchor="middle" font-size="11" fill="#1e3a8a" font-weight="bold">Richter</text>
          <rect x="334" y="50" width="70" height="80" rx="4" fill="#dbeafe" stroke="#2563EB" stroke-width="2"/>
          <text x="369" y="95" text-anchor="middle" font-size="12" fill="#1e3a8a" font-weight="bold">Kirche</text>
          <rect x="40" y="134" width="360" height="10" rx="3" fill="#9ca3af"/>
        </svg>

        <h3>Die vier Säulen im Einzelnen</h3>
        <table class="icon-table">
          <tr><th>Säule</th><th>Wozu der König sie braucht</th></tr>
          <tr><td><strong>Heer</strong><br>(stehendes Heer)</td><td>Ein großes Berufs-Heer, das immer bereit ist. Damit führt der König Kriege und hält im Inneren <strong>Aufstände</strong> nieder. Macht durch Soldaten.</td></tr>
          <tr><td><strong>Beamte</strong><br>(Verwaltung)</td><td>Bezahlte Beamte führen im ganzen Land die Befehle des Königs aus, treiben Steuern ein und kontrollieren alles. So reicht die Macht des Königs bis in den letzten Winkel.</td></tr>
          <tr><td><strong>Richter</strong><br>(Recht &amp; Gesetz)</td><td>Der König ist der <strong>oberste Richter</strong>. Er macht die Gesetze und steht selbst <strong>über dem Gesetz</strong> - niemand kann ihn vor Gericht stellen (keine Gewaltenteilung).</td></tr>
          <tr><td><strong>Kirche</strong><br>(eine Religion)</td><td>Die Kirche predigt den Gehorsam gegenüber dem König (Gottesgnadentum). Eine einheitliche Religion sorgt dafür, dass alle "an einem Strang ziehen".</td></tr>
        </table>

        <h3>Versailles und die Etikette - der entmachtete Adel</h3>
        <p>Eine besondere Stütze war das gewaltige Schloss <strong>Versailles</strong> bei Paris (über 2000 Räume).
        Ludwig XIV. zwang den mächtigen <strong>Adel</strong>, am Hof zu leben. Dort hielt er die Adligen mit Festen,
        Jagden und strengen Hofregeln beschäftigt - der <strong>Etikette</strong>. So konnten sie keine eigene Macht
        gegen den König aufbauen. Weil Ludwig die Sonne zu seinem Zeichen machte, nennt man ihn den
        <strong>"Sonnenkönig"</strong>.</p>

        <div class="info-card">
          <strong>Etikette</strong> = die genauen, komplizierten Regeln dafür, wie man sich bei Hofe zu verhalten hatte
          (z.B. wer dem König das Hemd reichen durfte). Wer sie nicht beachtete, machte sich lächerlich.
        </div>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> Auf deinem Lernzettel stehen genau diese "4 Säulen
          (Beamte, Heer, Richter, Kirche)" und "Der König als absoluter Herrscher". Du sollst die vier
          Säulen aufzählen und erklären können, wozu der König jede einzelne brauchte.
        </div>

        <div class="tip-box">
          <strong>Eselsbrücke für die 4 Säulen:</strong> <strong>B</strong>eamte, <strong>H</strong>eer,
          <strong>R</strong>ichter, <strong>K</strong>irche. Merksatz:
          "<strong>B</strong>ei <strong>H</strong>ofe <strong>R</strong>egiert der <strong>K</strong>önig."
        </div>

        <div class="warning-box">
          <strong>Achtung beim Adel:</strong> Ludwig XIV. hat den Adel nicht abgeschafft - er hat ihn
          <em>entmachtet</em>, indem er ihn nach Versailles holte und mit Festen und Etikette beschäftigte.
          Der Adel behielt seine Privilegien, verlor aber seine politische Macht an den König.
        </div>
      `
    },
    example: {
      title: "Beispiel: Welche Säule steckt dahinter?",
      steps: [
        {
          label: "Situation A",
          html: `<p><em>Der König lässt im ganzen Land bezahlte Verwalter die Steuern eintreiben und seine
            Befehle durchsetzen.</em><br>&rarr; Das ist die Säule <strong>Beamte (Verwaltung)</strong>.</p>`
        },
        {
          label: "Situation B",
          html: `<p><em>Mit einem großen, immer bereiten Heer schlägt der König einen Bauernaufstand nieder.</em><br>
            &rarr; Das ist die Säule <strong>Heer</strong>.</p>`
        },
        {
          label: "Situation C",
          html: `<p><em>Der König holt die Adligen nach Versailles und beschäftigt sie mit Festen und strengen
            Hofregeln.</em><br>&rarr; So <strong>entmachtet</strong> er den Adel mithilfe von Schloss und <strong>Etikette</strong>.</p>`
        }
      ]
    },
    exercisesIntro: "Frag dich bei jedem Beispiel: Welche der vier Säulen (Beamte, Heer, Richter, Kirche) ist gemeint?",
    exercises: [
      {
        type: "matching",
        question: "Ordne jeder Säule des Absolutismus ihre Aufgabe zu:",
        pairs: [
          { left: "Beamte", right: "Befehle ausführen, Steuern eintreiben, das Land verwalten" },
          { left: "Heer", right: "Kriege führen und Aufstände im Inneren niederschlagen" },
          { left: "Richter", right: "Recht sprechen; der König ist oberster Richter über dem Gesetz" },
          { left: "Kirche", right: "Gehorsam predigen und das Gottesgnadentum stützen" }
        ],
        explanation: "Beamte = Verwaltung, Heer = Soldaten/Macht, Richter = Recht/Gesetz, Kirche = Gehorsam. Das sind die vier Stützen."
      },
      {
        type: "multiple-choice",
        question: "Warum zwang Ludwig XIV. den Adel, am Schloss Versailles zu leben?",
        options: [
          "Um ihn zu beschäftigen und zu kontrollieren, damit er keine eigene Macht aufbaut.",
          "Weil der Adel im Schloss arbeiten und putzen musste.",
          "Weil der Adel sonst keine Wohnung gehabt hätte.",
          "Damit der Adel den König mit Steuern unterstützt."
        ],
        correct: 0,
        explanation: "Richtig! Am Hof, beschäftigt mit Festen und Etikette, konnte der Adel keine Macht gegen den König sammeln. So entmachtete Ludwig den Adel.",
        wrongExplanations: {
          1: "Der Adel musste nicht arbeiten - er wurde mit Festen und Jagden beschäftigt, um ihn von der Politik fernzuhalten.",
          2: "Adlige hatten eigene Schlösser. Es ging darum, sie unter Kontrolle zu halten.",
          3: "Im Gegenteil - der Adel zahlte kaum Steuern. Es ging um Kontrolle, nicht um Geld."
        }
      },
      {
        type: "fill-in-blank",
        question: "Fülle die Lücken zu den Stützen der Macht:",
        text: "Die vier Säulen des Absolutismus sind die Beamten (Verwaltung), das {{blank}} (Soldaten), die {{blank}} (Recht) und die Kirche. Die komplizierten Hofregeln in Versailles nannte man {{blank}}.",
        blanks: [
          { correct: "Heer", alternatives: ["heer", "Militär", "stehende Heer"] },
          { correct: "Richter", alternatives: ["richter", "Gericht", "Justiz"] },
          { correct: "Etikette", alternatives: ["etikette"] }
        ],
        explanation: "Beamte, Heer, Richter, Kirche - das sind die vier Säulen. Die Hofregeln hießen Etikette."
      },
      {
        type: "multiple-choice",
        question: "Warum wird Ludwig XIV. der 'Sonnenkönig' genannt?",
        options: [
          "Er machte die Sonne zu seinem Zeichen - als Symbol seiner alles überstrahlenden Macht.",
          "Weil in Versailles immer die Sonne schien.",
          "Weil er nur am Tag regierte.",
          "Weil er die Sonnenfinsternis vorhergesagt hat."
        ],
        correct: 0,
        explanation: "Genau! Wie die Sonne alles überstrahlt, sollte der König über allem stehen. Er ließ das Sonnensymbol überall in Versailles anbringen.",
        wrongExplanations: {
          1: "Mit dem Wetter hat der Name nichts zu tun, sondern mit dem Sonnensymbol seiner Macht.",
          2: "Auch das stimmt nicht - es geht um die Sonne als Macht-Symbol.",
          3: "Nein, der Name steht für seine strahlende, überragende Macht."
        }
      }
    ]
  }

]);
