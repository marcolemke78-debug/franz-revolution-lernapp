/**
 * Modul 3 - Französische Revolution (Geschichts-Klassenarbeit, Klasse 8).
 *   L6  Die Ständegesellschaft - Buch S. 96/97
 *   L7  Frankreich in der Krise - Buch S. 96/97
 *   L8  Die Revolution beginnt (1789) - Buch S. 98
 *   L9  Die Erklärung der Menschenrechte - Buch S. 102
 *   L10 Frankreich wird Republik - Buch S. 104
 *   L11 Das Ende der Revolution - Buch S. 108
 *   L12 Prüfungssimulation (gemischte Übungen über alle Themen)
 *
 * Inhalte in eigenen Worten nach dem Schulbuch + Lernzettel. Zielgruppe: Leonie, Klasse 8, M-Niveau.
 */

window.LESSON_DATA = (window.LESSON_DATA || []).concat([

  // ===================================================================
  // Lektion 6: Die Ständegesellschaft
  // ===================================================================
  {
    id: 6,
    title: "Die Ständegesellschaft",
    explanation: {
      html: `
        <h2>Eine Gesellschaft in drei Schubladen</h2>
        <p>Vor der Revolution war die Gesellschaft in Frankreich in drei <strong>Stände</strong> eingeteilt -
        feste Gruppen, in die man <strong>hineingeboren</strong> wurde und aus denen man kaum herauskam.
        Welche Rechte du hattest, hing nicht von deiner Leistung ab, sondern von deinem Stand.</p>

        <div class="analogy-box">
          <strong>Wie ein Stadion mit festen Plätzen:</strong> Es gibt VIP-Logen (1. und 2. Stand) für ganz
          wenige Leute mit besten Plätzen und Sonderrechten - und die riesigen Stehränge (3. Stand) für fast
          alle anderen. Das Gemeine: Den Platz erbst du bei der Geburt, du kannst ihn nicht durch Leistung
          wechseln. Und die teure Eintrittskarte (die Steuern) bezahlen ausgerechnet die auf den Stehrängen.
        </div>

        <h3>Die drei Stände</h3>
        <table class="icon-table">
          <tr><th>Stand</th><th>Wer gehört dazu?</th><th>Anteil am Volk</th></tr>
          <tr><td><strong>1. Stand</strong></td><td>die <strong>Geistlichkeit</strong> (Kirche: Bischöfe, Priester)</td><td>ca. 0,5 %</td></tr>
          <tr><td><strong>2. Stand</strong></td><td>der <strong>Adel</strong></td><td>ca. 1,5 %</td></tr>
          <tr><td><strong>3. Stand</strong></td><td><strong>alle anderen</strong>: Bürger, Handwerker, Bauern (Bürgertum + einfaches Volk)</td><td>ca. 98 %</td></tr>
        </table>

        <h3>Das Ungerechte: Privilegien</h3>
        <p>Der 1. und 2. Stand hatten <strong>Privilegien</strong> - das sind <strong>Sonderrechte</strong>.
        Das wichtigste: Sie mussten <strong>kaum oder gar keine Steuern</strong> zahlen. Der 3. Stand dagegen -
        also fast das ganze Volk - musste <strong>fast alle Steuern allein</strong> tragen, hatte aber politisch
        <strong>nichts zu sagen</strong>. Besonders hart traf es die <strong>Bauern</strong>, die zusätzlich
        Abgaben an Adel und Kirche leisten mussten.</p>

        <div class="info-card">
          <strong>Privileg</strong> = ein Sonderrecht, einen Vorteil, den nur eine bestimmte Gruppe hat
          (hier: keine Steuern zahlen müssen). Das Wort kommt aus dem Lateinischen und heißt wörtlich "Sondergesetz".
        </div>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> "Ständegesellschaft" und "Privilegien" stehen auf deinem
          Lernzettel. Diese Ungerechtigkeit ist der wichtigste <strong>Grund für die Wut des Volkes</strong> -
          du brauchst sie, um die Ursachen der Revolution zu erklären.
        </div>

        <div class="tip-box">
          <strong>Die eine Zahl, die alles erklärt:</strong> Der 3. Stand war rund <strong>98 %</strong> des Volkes,
          zahlte fast alle Steuern und durfte trotzdem nicht mitbestimmen. Diese Ungerechtigkeit ist der Kern -
          wenn du sie nennen kannst, hast du das Wichtigste.
        </div>

        <div class="warning-box">
          <strong>Verwechsle die Reihenfolge nicht:</strong> 1. Stand = <strong>Geistlichkeit/Kirche</strong>,
          2. Stand = <strong>Adel</strong>, 3. Stand = <strong>alle anderen</strong> (Bürger und Bauern).
          Eselsbrücke: erst kommt Gott (Kirche), dann der Adel, dann das Volk.
        </div>
      `
    },
    example: {
      title: "Beispiel: Warum war das System ungerecht?",
      steps: [
        {
          label: "Wer zahlt?",
          html: `<p>Der 3. Stand (ca. 98 % der Menschen) musste <strong>fast alle Steuern</strong> bezahlen.</p>`
        },
        {
          label: "Wer ist befreit?",
          html: `<p>Der 1. Stand (Kirche) und der 2. Stand (Adel) - zusammen nur ca. 2 % - waren durch ihre
            <strong>Privilegien</strong> von den meisten Steuern <strong>befreit</strong>.</p>`
        },
        {
          label: "Das Ergebnis",
          html: `<p>Die wenigen Reichen zahlten fast nichts, die vielen einfachen Leute trugen die ganze Last -
            und durften nicht mitbestimmen. Diese <strong>Ungerechtigkeit</strong> machte das Volk wütend.</p>`
        }
      ]
    },
    exercisesIntro: "Merke: 1. Stand = Kirche, 2. Stand = Adel, 3. Stand = alle anderen (98 %, zahlen die Steuern).",
    exercises: [
      {
        type: "matching",
        question: "Ordne jedem Stand die richtige Gruppe zu:",
        pairs: [
          { left: "1. Stand", right: "Geistlichkeit (Kirche: Bischöfe, Priester)" },
          { left: "2. Stand", right: "Adel" },
          { left: "3. Stand", right: "alle anderen: Bürger, Handwerker, Bauern (ca. 98 %)" }
        ],
        explanation: "1. Stand = Kirche, 2. Stand = Adel, 3. Stand = das Volk (Bürger und Bauern)."
      },
      {
        type: "multiple-choice",
        question: "Was war an der Ständegesellschaft besonders ungerecht?",
        options: [
          "Der 3. Stand (fast alle Menschen) zahlte die Steuern, durfte aber nicht mitbestimmen.",
          "Der Adel musste die meisten Steuern zahlen.",
          "Alle Stände zahlten genau gleich viel Steuern.",
          "Die Bauern durften als Einzige wählen."
        ],
        correct: 0,
        explanation: "Richtig! Die rund 98 % im 3. Stand trugen fast die ganze Steuerlast, hatten aber politisch nichts zu sagen. 1. und 2. Stand waren durch Privilegien befreit.",
        wrongExplanations: {
          1: "Genau andersherum: Der Adel (2. Stand) war durch Privilegien von den meisten Steuern befreit.",
          2: "Nein - der 1. und 2. Stand zahlten kaum Steuern, der 3. Stand fast alles.",
          3: "Die Bauern (3. Stand) durften gerade NICHT mitbestimmen - das war ja das Problem."
        }
      },
      {
        type: "fill-in-blank",
        question: "Fülle die Lücken zur Ständegesellschaft:",
        text: "Der 1. Stand war die {{blank}}, der 2. Stand der {{blank}}. Im 3. Stand waren alle anderen - rund {{blank}} Prozent der Menschen. Die Sonderrechte der oberen Stände nennt man {{blank}}.",
        blanks: [
          { correct: "Geistlichkeit", alternatives: ["geistlichkeit", "Kirche", "Klerus"] },
          { correct: "Adel", alternatives: ["adel"] },
          { correct: "98", alternatives: ["98 %", "98%", "rund 98"] },
          { correct: "Privilegien", alternatives: ["privilegien", "Sonderrechte", "Privileg"] }
        ],
        explanation: "1. Stand = Geistlichkeit, 2. Stand = Adel, 3. Stand = ca. 98 % (das Volk). Sonderrechte = Privilegien."
      }
    ]
  },

  // ===================================================================
  // Lektion 7: Frankreich in der Krise
  // ===================================================================
  {
    id: 7,
    title: "Frankreich in der Krise",
    explanation: {
      html: `
        <h2>Warum die Lage 1789 explodierte</h2>
        <p>Die Ständegesellschaft war schon lange ungerecht. Aber 1789 kamen mehrere Probleme gleichzeitig
        zusammen - wie bei einem Fass, das schließlich überläuft. Diese <strong>Ursachen der Revolution</strong>
        musst du kennen.</p>

        <div class="analogy-box">
          <strong>Wie ein überfülltes Fass:</strong> Jahrelang lief Wasser hinein (die alte Ungerechtigkeit
          der Stände). 1789 kamen drei dicke Schwälle dazu - <strong>Hunger</strong>, <strong>leere Staatskasse</strong>
          und die <strong>neuen Ideen der Aufklärung</strong>. Da lief das Fass über: die Revolution brach aus.
        </div>

        <h3>Die wichtigsten Ursachen der Krise</h3>
        <table class="icon-table">
          <tr><th>Ursache</th><th>Was bedeutet das?</th></tr>
          <tr><td><strong>Missernten</strong></td><td>Schlechte Ernten führten zu zu wenig Getreide. Brot wurde knapp.</td></tr>
          <tr><td><strong>Hohe Brotpreise</strong></td><td>Weil Brot knapp war, stieg der Preis stark. Brot war das Hauptnahrungsmittel - viele <strong>hungerten</strong>.</td></tr>
          <tr><td><strong>Staat ist pleite</strong></td><td>Der Staat hatte durch teure Kriege und den Luxus am Hof riesige <strong>Schulden</strong> - die Staatskasse war leer (Staatsbankrott drohte).</td></tr>
          <tr><td><strong>Ungerechte Steuern</strong></td><td>Nur der 3. Stand zahlte - und sollte jetzt sogar noch mehr zahlen, um die Schulden zu decken.</td></tr>
          <tr><td><strong>Ideen der Aufklärung</strong></td><td>Das Bürgertum hatte gelernt: Alle Menschen sind gleich. Es wollte nicht länger rechtlos bleiben.</td></tr>
        </table>

        <p>Dazu kam: König <strong>Ludwig XVI.</strong> (der Sechzehnte - nicht zu verwechseln mit dem
        Sonnenkönig Ludwig XIV.!) war <strong>schwach und entschlussunfähig</strong>. Er konnte die Krise
        nicht lösen.</p>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> Auf deinem Lernzettel steht "Gründe für die Krise" mit den
          Stichworten Missernten, hohe Brotpreise und "Staat vor der Pleite". Eine typische Aufgabe ist:
          Nenne drei Ursachen der Französischen Revolution.
        </div>

        <div class="tip-box">
          <strong>Drei Ursachen, die immer ziehen:</strong> 1. <strong>Hunger</strong> (Missernten, teures Brot),
          2. <strong>Geld</strong> (Staat ist pleite, ungerechte Steuern), 3. <strong>Ideen</strong> (Aufklärung:
          alle Menschen sind gleich). Hunger - Geld - Ideen. Mit diesen drei Stichworten kannst du die Krise erklären.
        </div>

        <div class="warning-box">
          <strong>Wichtig: zwei verschiedene Ludwigs!</strong> Der <strong>Sonnenkönig</strong> hieß Ludwig <strong>XIV.</strong>
          (14.) und stand für die Glanzzeit des Absolutismus. Der König <em>der Revolution</em> war Ludwig <strong>XVI.</strong>
          (16.) - schwach, und am Ende hingerichtet. Verwechsle die beiden nicht!
        </div>
      `
    },
    example: {
      title: "Beispiel: Vom Problem zur Wut",
      steps: [
        {
          label: "Der Hunger",
          html: `<p>Nach Missernten ist Getreide knapp. Der Brotpreis steigt enorm. Eine Familie gibt fast
            ihr ganzes Geld für Brot aus - und hat trotzdem nicht genug. <strong>Hunger</strong> macht wütend.</p>`
        },
        {
          label: "Das Geld",
          html: `<p>Gleichzeitig ist der Staat <strong>pleite</strong>. Statt die reichen Stände zur Kasse zu
            bitten, soll wieder der 3. Stand mehr Steuern zahlen. Das empfinden die Menschen als zutiefst ungerecht.</p>`
        },
        {
          label: "Die Idee",
          html: `<p>Aus der Aufklärung kennt das Bürgertum den Gedanken: <strong>Alle Menschen sind gleich.</strong>
            Warum sollen also nur die Armen zahlen und die Reichen bestimmen? Aus Hunger + Ungerechtigkeit + Idee
            wird der Wille zur <strong>Revolution</strong>.</p>`
        }
      ]
    },
    exercisesIntro: "Denk an die drei Stichworte: Hunger - Geld - Ideen. Und: Ludwig XVI. ist der König der Revolution.",
    exercises: [
      {
        type: "multiple-choice",
        question: "Welche der folgenden Punkte war eine <strong>Ursache</strong> der Französischen Revolution?",
        options: [
          "Missernten und hohe Brotpreise führten zu Hunger im Volk.",
          "Der König senkte die Steuern für alle.",
          "Das Volk hatte zu viel Geld und Freizeit.",
          "Es gab keine Probleme, die Revolution kam plötzlich."
        ],
        correct: 0,
        explanation: "Richtig! Missernten machten Brot knapp und teuer - viele Menschen hungerten. Das war eine der Hauptursachen.",
        wrongExplanations: {
          1: "Das Gegenteil war der Fall: Der 3. Stand sollte sogar noch mehr Steuern zahlen.",
          2: "Im 3. Stand herrschten Armut und Hunger - nicht Reichtum und Freizeit.",
          3: "Doch, es gab klare Ursachen: Hunger, leere Staatskasse und die Ideen der Aufklärung."
        }
      },
      {
        type: "multiple-choice",
        question: "Welcher König saß zur Zeit der Revolution auf dem Thron?",
        options: [
          "Ludwig XVI.",
          "Ludwig XIV. (der Sonnenkönig)",
          "Napoleon",
          "Rousseau"
        ],
        correct: 0,
        explanation: "Richtig! Ludwig XVI. (der 16.) war der König während der Revolution. Er war schwach und wurde 1793 hingerichtet.",
        wrongExplanations: {
          1: "Ludwig XIV. (der Sonnenkönig) lebte rund 75 Jahre früher - er stand für die Glanzzeit des Absolutismus.",
          2: "Napoleon kam erst 1799 an die Macht, am ENDE der Revolution.",
          3: "Rousseau war ein Aufklärer (Philosoph), kein König."
        }
      },
      {
        type: "fill-in-blank",
        question: "Fülle die drei großen Ursachen ein:",
        text: "Schlechte Ernten ({{blank}}) machten das Brot knapp und teuer, sodass viele Menschen hungerten. Gleichzeitig war der Staat durch Schulden fast {{blank}}. Und die Ideen der {{blank}} ließen das Bürgertum nach Gleichheit verlangen.",
        blanks: [
          { correct: "Missernten", alternatives: ["missernten", "Misernten"] },
          { correct: "pleite", alternatives: ["bankrott", "Pleite", "zahlungsunfähig"] },
          { correct: "Aufklärung", alternatives: ["aufklärung", "aufklaerung"] }
        ],
        explanation: "Missernten (Hunger), Staat pleite (Geld) und die Aufklärung (Ideen) - die drei Hauptursachen."
      },
      {
        type: "free-text",
        question: "<strong>Erkläraufgabe:</strong> Nenne und erkläre kurz drei Gründe, warum es 1789 zur Französischen Revolution kam.",
        hint: "Denk an die drei Stichworte Hunger, Geld und Ideen - und an die ungerechte Ständegesellschaft.",
        minWords: 25,
        modelAnswer: "Erstens herrschte Hunger: Nach Missernten war Brot knapp und sehr teuer, sodass viele einfache Menschen nicht genug zu essen hatten. Zweitens war der Staat fast pleite, weil teure Kriege und der Luxus am Hof riesige Schulden verursacht hatten - und ausgerechnet der arme 3. Stand sollte noch mehr Steuern zahlen. Drittens hatten die Ideen der Aufklärung das Bürgertum geprägt: Es wollte nicht länger rechtlos sein, sondern forderte Gleichheit und Mitbestimmung. Dazu kam die ungerechte Ständegesellschaft und ein schwacher König (Ludwig XVI.)."
      }
    ]
  },

  // ===================================================================
  // Lektion 8: Die Revolution beginnt (1789)
  // ===================================================================
  {
    id: 8,
    title: "Die Revolution beginnt (1789)",
    explanation: {
      html: `
        <h2>1789 - das Jahr, in dem alles begann</h2>
        <p>1789 spitzte sich die Krise zu. In wenigen Monaten überschlugen sich die Ereignisse. Drei
        Schlüsselmomente solltest du in der richtigen Reihenfolge kennen: die <strong>Generalstände</strong>,
        der <strong>Ballhausschwur</strong> und der <strong>Sturm auf die Bastille</strong>.</p>

        <div class="analogy-box">
          <strong>Wie ein Streit, der eskaliert:</strong> Erst will man reden (Generalstände), dann fühlt sich
          eine Seite betrogen und schließt einen festen Pakt ("Wir geben nicht nach!" = Ballhausschwur), und
          schließlich kippt die Stimmung ganz und es kommt zur offenen Auseinandersetzung (Sturm auf die Bastille).
        </div>

        <h3>1. Die Generalstände (Mai 1789)</h3>
        <p>Weil der Staat pleite war, rief König Ludwig XVI. die <strong>Generalstände</strong> ein - eine
        Versammlung aller drei Stände. Doch es gab Streit ums <strong>Abstimmen</strong>: Bisher hatte jeder
        Stand <em>eine</em> Stimme - so konnten 1. und 2. Stand (Kirche und Adel) den 3. Stand immer mit 2:1
        überstimmen. Der 3. Stand wollte das nicht mehr hinnehmen.</p>

        <h3>2. Der Ballhausschwur (Juni 1789)</h3>
        <p>Der 3. Stand erklärte sich selbst zur <strong>Nationalversammlung</strong> - der wahren Vertretung
        des Volkes. Als der König sie aussperrte, traf sie sich in einer Ballspielhalle und schwor: Wir gehen
        nicht auseinander, bis Frankreich eine <strong>Verfassung</strong> hat. Das war der <strong>Ballhausschwur</strong> -
        ein offener Widerstand gegen den König.</p>

        <h3>3. Sturm auf die Bastille (14. Juli 1789)</h3>
        <p>Die Stimmung in Paris war explosiv: Hunger, Wut, Angst, dass der König Soldaten gegen das Volk
        schickt. Am <strong>14. Juli 1789</strong> stürmten die Bürger die <strong>Bastille</strong>, ein
        Gefängnis und Symbol der königlichen Macht. Sie suchten Waffen und Pulver. Dieser Tag gilt als
        <strong>Beginn der Revolution</strong> - bis heute Frankreichs Nationalfeiertag.</p>

        <div class="info-card">
          <strong>Warum greifen die Bürger zu den Waffen?</strong> (Diese Frage steht auf deinem Lernzettel!)
          Weil sie <strong>Hunger</strong> hatten, sich <strong>ungerecht behandelt</strong> fühlten und
          <strong>Angst</strong> hatten, der König werde die Nationalversammlung mit Soldaten gewaltsam auflösen.
          Aus Verzweiflung und Wut wurde der Aufstand.
        </div>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> "Revolution" und "Warum greifen die Bürger zu den Waffen?"
          stehen auf deinem Lernzettel. Du sollst den Ablauf 1789 (Generalstände &rarr; Ballhausschwur &rarr;
          Bastille) und die Gründe für den Aufstand erklären können.
        </div>

        <div class="tip-box">
          <strong>Reihenfolge merken - "G-B-B":</strong> <strong>G</strong>eneralstände (man redet) &rarr;
          <strong>B</strong>allhausschwur (man schwört Widerstand) &rarr; <strong>B</strong>astille (man kämpft).
          Vom Reden über den Schwur zum Sturm.
        </div>

        <div class="warning-box">
          <strong>Nicht verwechseln:</strong> Der <strong>Ballhausschwur</strong> war ein <em>Schwur</em>
          (ein Versprechen in einer Ballspielhalle) - dort floss kein Blut. Der <strong>Sturm auf die Bastille</strong>
          war die <em>gewaltsame</em> Erstürmung eines Gefängnisses. Beides 1789, aber zwei verschiedene Ereignisse.
        </div>
      `
    },
    example: {
      title: "Beispiel: Die Ereignisse 1789 ordnen",
      steps: [
        {
          label: "Frühling",
          html: `<p>Mai 1789: Der König ruft die <strong>Generalstände</strong> ein, weil er Geld braucht.
            Sofort gibt es Streit ums Abstimmen.</p>`
        },
        {
          label: "Sommer-Anfang",
          html: `<p>Juni 1789: Der 3. Stand macht sich zur <strong>Nationalversammlung</strong> und leistet den
            <strong>Ballhausschwur</strong>: keine Trennung ohne Verfassung.</p>`
        },
        {
          label: "14. Juli",
          html: `<p>Die Lage eskaliert: <strong>Sturm auf die Bastille</strong>. Die Revolution hat begonnen.</p>`
        }
      ]
    },
    exercisesIntro: "Merke die Reihenfolge G-B-B: Generalstände → Ballhausschwur → Bastille.",
    exercises: [
      {
        type: "ordering",
        question: "Bringe die Ereignisse von 1789 in die richtige Reihenfolge:",
        items: [
          "Der König ruft die Generalstände ein",
          "Der 3. Stand leistet den Ballhausschwur",
          "Sturm auf die Bastille (14. Juli)"
        ],
        correctOrder: [0, 1, 2],
        explanation: "G-B-B: erst die Generalstände (Mai), dann der Ballhausschwur (Juni), dann der Sturm auf die Bastille (14. Juli)."
      },
      {
        type: "multiple-choice",
        question: "Warum griffen die Bürger 1789 zu den Waffen und stürmten die Bastille?",
        options: [
          "Aus Hunger, Wut über die Ungerechtigkeit und Angst vor den Soldaten des Königs.",
          "Weil sie das Schloss Versailles besichtigen wollten.",
          "Weil der König sie dazu aufgefordert hatte.",
          "Weil sie mehr Steuern zahlen wollten."
        ],
        correct: 0,
        explanation: "Richtig! Hunger, das Gefühl der Ungerechtigkeit und die Angst, der König werde die Nationalversammlung gewaltsam auflösen, trieben die Menschen zum Aufstand.",
        wrongExplanations: {
          1: "Die Bastille war ein Gefängnis und Waffenlager, kein Ausflugsziel. Es ging um Waffen und Wut.",
          2: "Im Gegenteil - der Aufstand richtete sich GEGEN den König.",
          3: "Niemand will mehr Steuern zahlen. Die ungerechten Steuern waren ja ein Grund für die Wut."
        }
      },
      {
        type: "multiple-choice",
        question: "Was war der <strong>Ballhausschwur</strong>?",
        options: [
          "Der 3. Stand schwor, nicht auseinanderzugehen, bis Frankreich eine Verfassung hat.",
          "Ein Fußballturnier am Hof des Königs.",
          "Der Schwur des Königs, mehr Brot zu verteilen.",
          "Die Krönung von Napoleon."
        ],
        correct: 0,
        explanation: "Richtig! In einer Ballspielhalle schwor der 3. Stand (als Nationalversammlung), bis zu einer Verfassung zusammenzubleiben - offener Widerstand gegen den König.",
        wrongExplanations: {
          1: "Der Name kommt von der Ballspielhalle, aber es war ein politischer Schwur, kein Spiel.",
          2: "Nein, der Schwur kam vom 3. Stand, nicht vom König.",
          3: "Napoleons Krönung war viel später (1804). Der Ballhausschwur war 1789."
        }
      },
      {
        type: "fill-in-blank",
        question: "Fülle die Lücken zum Revolutionsbeginn:",
        text: "Am {{blank}}. Juli 1789 stürmten die Bürger die {{blank}} - das gilt als Beginn der Revolution. Zuvor hatte sich der 3. Stand zur {{blank}} erklärt.",
        blanks: [
          { correct: "14", alternatives: ["14."] },
          { correct: "Bastille", alternatives: ["bastille"] },
          { correct: "Nationalversammlung", alternatives: ["nationalversammlung"] }
        ],
        explanation: "14. Juli 1789 = Sturm auf die Bastille. Der 3. Stand hatte sich vorher zur Nationalversammlung erklärt."
      }
    ]
  },

  // ===================================================================
  // Lektion 9: Die Erklärung der Menschenrechte
  // ===================================================================
  {
    id: 9,
    title: "Die Erklärung der Menschenrechte",
    explanation: {
      html: `
        <h2>26. August 1789 - Rechte für alle</h2>
        <p>Nur wenige Wochen nach dem Sturm auf die Bastille beschloss die Nationalversammlung am
        <strong>26. August 1789</strong> die <strong>"Erklärung der Menschen- und Bürgerrechte"</strong>.
        Das war ein revolutionärer Schritt: Zum ersten Mal wurden Rechte für <strong>alle Menschen</strong>
        festgeschrieben.</p>

        <div class="analogy-box">
          <strong>Wie neue Spielregeln für alle:</strong> Stell dir vor, in einem Spiel hatten bisher ein
          paar Spieler heimliche Sonderrechte. Jetzt schreibt man neue Regeln auf ein großes Plakat, das für
          <strong>jeden gleich</strong> gilt: gleiche Rechte, gleiche Freiheit. Genau das war die Erklärung der
          Menschenrechte - das Ende der alten Sonderrechte.
        </div>

        <h3>Was in der Erklärung stand</h3>
        <table class="icon-table">
          <tr><th>Grundsatz</th><th>Bedeutung</th></tr>
          <tr><td><strong>Freiheit</strong></td><td>Jeder Mensch ist frei (z.B. Meinungsfreiheit, Religionsfreiheit).</td></tr>
          <tr><td><strong>Gleichheit</strong></td><td>Alle Menschen sind <strong>vor dem Gesetz gleich</strong> - keine Sonderrechte mehr.</td></tr>
          <tr><td><strong>Rechte von Geburt an</strong></td><td>Diese Rechte hat jeder Mensch von Geburt an. Niemand darf sie ihm nehmen.</td></tr>
          <tr><td><strong>Volkssouveränität</strong></td><td>Die Macht im Staat geht vom Volk aus, nicht vom König.</td></tr>
        </table>

        <h3>"Weg mit den Privilegien!"</h3>
        <p>Mit der Gleichheit vor dem Gesetz waren die <strong>Privilegien</strong> von Adel und Kirche
        <strong>abgeschafft</strong>. Schon in der "Nacht vom 4. August 1789" hatte die Nationalversammlung
        die alten Feudalrechte aufgehoben. Jetzt galt: <strong>kein Sonderrecht mehr durch Geburt</strong>.
        Das war das Ende der Ständegesellschaft.</p>

        <div class="info-card">
          <strong>Erkenne den roten Faden:</strong> Die Ideen der <strong>Aufklärung</strong> (Modul 2:
          Freiheit, Gleichheit, Menschenrechte) werden hier <strong>Wirklichkeit</strong>. Was Montesquieu,
          Rousseau und Voltaire gedacht hatten, steht jetzt schwarz auf weiß in einem Gesetz.
        </div>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> "Menschenrechte" und das Datum stehen auf deinem Lernzettel.
          Du solltest das Datum (26. August 1789) und die Kernidee nennen können: gleiche Rechte und Freiheit
          für alle, Ende der Privilegien.
        </div>

        <div class="tip-box">
          <strong>Zwei Daten im August 1789 - so ordnest du sie:</strong> In der <strong>Nacht vom 4. August</strong>
          werden die Privilegien/Feudalrechte abgeschafft. Am <strong>26. August</strong> kommt die Erklärung der
          Menschenrechte. Beides August 1789 - das Wichtigste ist der 26. August (Menschenrechte).
        </div>

        <div class="warning-box">
          <strong>Vorsicht:</strong> Die Menschenrechte galten 1789 noch nicht wirklich für ALLE - Frauen und
          arme Männer hatten zunächst nicht die vollen (Wahl-)Rechte. Die Idee "alle Menschen sind gleich" war
          ein riesiger Fortschritt, wurde aber erst nach und nach für alle umgesetzt.
        </div>
      `
    },
    example: {
      title: "Beispiel: Was änderte sich für einen Bauern?",
      steps: [
        {
          label: "Vorher (Ständegesellschaft)",
          html: `<p>Ein Bauer im 3. Stand zahlt viele Abgaben an Adel und Kirche, hat kaum Rechte und ist
            rechtlich <strong>weniger wert</strong> als ein Adliger.</p>`
        },
        {
          label: "Nachher (ab 1789)",
          html: `<p>Die Erklärung der Menschenrechte sagt: <strong>Alle sind vor dem Gesetz gleich.</strong>
            Die Privilegien des Adels sind abgeschafft. Der Bauer ist jetzt rechtlich gleichgestellt.</p>`
        },
        {
          label: "Die Bedeutung",
          html: `<p>Das ist das Ende der alten <strong>Ständeordnung</strong>. Nicht mehr die Geburt entscheidet
            über die Rechte, sondern jeder Mensch hat dieselben Grundrechte.</p>`
        }
      ]
    },
    exercisesIntro: "Merke: 26. August 1789 = Erklärung der Menschenrechte = Freiheit + Gleichheit für alle, Ende der Privilegien.",
    exercises: [
      {
        type: "multiple-choice",
        question: "Was wurde am <strong>26. August 1789</strong> beschlossen?",
        options: [
          "Die Erklärung der Menschen- und Bürgerrechte.",
          "Die Hinrichtung des Königs.",
          "Die Krönung von Napoleon.",
          "Der Bau des Schlosses Versailles."
        ],
        correct: 0,
        explanation: "Richtig! Am 26. August 1789 beschloss die Nationalversammlung die Erklärung der Menschen- und Bürgerrechte: Freiheit und Gleichheit für alle.",
        wrongExplanations: {
          1: "Die Hinrichtung des Königs war erst 1793.",
          2: "Napoleon kam erst ab 1799 an die Macht.",
          3: "Versailles wurde rund 100 Jahre früher unter Ludwig XIV. gebaut."
        }
      },
      {
        type: "multiple-choice",
        question: "Was bedeutete die Erklärung der Menschenrechte für die Privilegien von Adel und Kirche?",
        options: [
          "Sie wurden abgeschafft - alle sind vor dem Gesetz gleich.",
          "Sie wurden noch erweitert.",
          "Sie blieben genau gleich wie vorher.",
          "Nur die Kirche behielt ihre Privilegien."
        ],
        correct: 0,
        explanation: "Richtig! Gleichheit vor dem Gesetz bedeutet: keine Sonderrechte mehr durch Geburt. Die Privilegien waren abgeschafft - das Ende der Ständegesellschaft.",
        wrongExplanations: {
          1: "Genau das Gegenteil - die Privilegien wurden abgeschafft, nicht erweitert.",
          2: "Nein, die Gleichheit vor dem Gesetz hob die Sonderrechte gerade auf.",
          3: "Auch die Kirche (1. Stand) verlor ihre Privilegien."
        }
      },
      {
        type: "fill-in-blank",
        question: "Fülle die Lücken zur Erklärung der Menschenrechte:",
        text: "Am 26. August {{blank}} beschloss die Nationalversammlung die Erklärung der Menschenrechte. Ihr Kern: Alle Menschen sind frei und vor dem Gesetz {{blank}}. Damit waren die {{blank}} von Adel und Kirche abgeschafft.",
        blanks: [
          { correct: "1789" },
          { correct: "gleich", alternatives: ["gleich.", "gleichberechtigt"] },
          { correct: "Privilegien", alternatives: ["privilegien", "Sonderrechte"] }
        ],
        explanation: "26. August 1789: Freiheit und Gleichheit vor dem Gesetz - Ende der Privilegien."
      }
    ]
  },

  // ===================================================================
  // Lektion 10: Frankreich wird Republik
  // ===================================================================
  {
    id: 10,
    title: "Frankreich wird Republik",
    explanation: {
      html: `
        <h2>1792 - das Ende der Monarchie</h2>
        <p>Nach 1789 blieb Ludwig XVI. zunächst König, aber mit weniger Macht (eine Verfassung beschränkte ihn).
        Doch das Vertrauen war zerstört. 1792 stürzte die Monarchie ganz: Frankreich wurde eine
        <strong>Republik</strong> - ein Staat <strong>ohne König</strong>.</p>

        <div class="analogy-box">
          <strong>Wie ein Mannschaftskapitän, der das Vertrauen verliert:</strong> Erst darf der Kapitän
          (der König) bleiben, aber mit weniger Rechten. Dann erwischt man ihn, wie er heimlich zur
          gegnerischen Mannschaft Kontakt aufnimmt - jetzt ist das Vertrauen ganz weg, und die Mannschaft
          spielt ohne Kapitän weiter. Genau das passierte mit Ludwig XVI.
        </div>

        <h3>Warum verlor der König alles?</h3>
        <table class="icon-table">
          <tr><th>Ereignis</th><th>Folge</th></tr>
          <tr><td>Der König versuchte heimlich zu <strong>fliehen</strong> (1791)</td><td>Das Volk fühlte sich verraten - es sah, dass der König gegen die Revolution war.</td></tr>
          <tr><td><strong>Krieg</strong> gegen andere Länder (z.B. Österreich)</td><td>Man verdächtigte den König, mit dem Feind zu paktieren. "Das Vaterland ist in Gefahr!"</td></tr>
          <tr><td>Der König wird <strong>abgesetzt</strong> (1792)</td><td>Frankreich wird zur <strong>Republik</strong> erklärt - das Ende der Monarchie.</td></tr>
        </table>

        <div class="info-card">
          <strong>Republik</strong> = eine Staatsform <strong>ohne König</strong>. Das Staatsoberhaupt wird
          nicht geboren (geerbt), sondern gewählt oder eingesetzt. Gegenteil: <strong>Monarchie</strong>
          (Staat mit König/Königin).
        </div>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> "Republik" steht auf deinem Lernzettel. Du sollst erklären
          können, was eine Republik ist (Staat ohne König) und wann Frankreich eine wurde (1792).
        </div>

        <div class="tip-box">
          <strong>Republik vs. Monarchie - einfach gemerkt:</strong> <strong>Mon</strong>archie hat
          <em>einen</em> (mono = einer) Herrscher von Geburt - den König. <strong>Re</strong>publik kommt von
          lateinisch "res publica" = "die öffentliche Sache" - der Staat gehört allen, es gibt keinen König.
        </div>

        <div class="warning-box">
          <strong>Reihenfolge nicht verwechseln:</strong> 1789 beginnt die Revolution, aber Ludwig XVI.
          bleibt noch König. Erst <strong>1792</strong> wird Frankreich Republik (König abgesetzt), und
          <strong>1793</strong> wird er hingerichtet. Republik kommt VOR der Hinrichtung.
        </div>
      `
    },
    example: {
      title: "Beispiel: Vom König zur Republik",
      steps: [
        {
          label: "1789-1791",
          html: `<p>Der König bleibt im Amt, aber eine Verfassung beschränkt seine Macht. Er ist jetzt eine
            Art "König mit Regeln" (konstitutionelle Monarchie).</p>`
        },
        {
          label: "Der Vertrauensbruch",
          html: `<p>Der König versucht zu fliehen und steht im Verdacht, mit den Kriegsgegnern Frankreichs
            zu paktieren. Das Volk fühlt sich <strong>verraten</strong>.</p>`
        },
        {
          label: "1792",
          html: `<p>Der König wird abgesetzt. Frankreich wird zur <strong>Republik</strong> - ein Staat ohne
            König. Die über 1000 Jahre alte Monarchie ist beendet.</p>`
        }
      ]
    },
    exercisesIntro: "Merke: Republik = Staat ohne König. Frankreich wird 1792 Republik - nach der Flucht und dem Vertrauensbruch.",
    exercises: [
      {
        type: "multiple-choice",
        question: "Was ist eine <strong>Republik</strong>?",
        options: [
          "Eine Staatsform ohne König - das Staatsoberhaupt wird nicht vererbt.",
          "Ein Staat, in dem der König besonders viel Macht hat.",
          "Ein anderes Wort für Königreich.",
          "Ein Land, das von der Kirche regiert wird."
        ],
        correct: 0,
        explanation: "Richtig! Eine Republik ist ein Staat ohne König. Das Gegenteil ist die Monarchie (Staat mit König).",
        wrongExplanations: {
          1: "Das wäre eher der Absolutismus. In der Republik gibt es gar keinen König.",
          2: "Nein, ein Königreich ist eine Monarchie - das Gegenteil einer Republik.",
          3: "Auch nicht - eine Republik ist einfach ein Staat ohne König/Monarchen."
        }
      },
      {
        type: "multiple-choice",
        question: "Wann wurde Frankreich eine Republik?",
        options: ["1792", "1789", "1715", "1799"],
        correct: 0,
        explanation: "Richtig! 1792 wurde der König abgesetzt und Frankreich zur Republik erklärt.",
        wrongExplanations: {
          1: "1789 begann die Revolution, aber der König blieb zunächst im Amt.",
          2: "1715 starb der Sonnenkönig Ludwig XIV. - das war lange vor der Revolution.",
          3: "1799 übernahm Napoleon die Macht - da war Frankreich schon 7 Jahre Republik."
        }
      },
      {
        type: "fill-in-blank",
        question: "Fülle die Lücken:",
        text: "Im Jahr {{blank}} wurde der König abgesetzt und Frankreich zu einer {{blank}} erklärt - also einem Staat ohne {{blank}}.",
        blanks: [
          { correct: "1792" },
          { correct: "Republik", alternatives: ["republik"] },
          { correct: "König", alternatives: ["könig", "Monarchen", "koenig"] }
        ],
        explanation: "1792: Frankreich wird Republik = Staat ohne König."
      }
    ]
  },

  // ===================================================================
  // Lektion 11: Das Ende der Revolution
  // ===================================================================
  {
    id: 11,
    title: "Das Ende der Revolution",
    explanation: {
      html: `
        <h2>Hinrichtung, Terror und Napoleon</h2>
        <p>Die Revolution wurde immer radikaler und gewaltsamer. Am Ende stand die Hinrichtung des Königs,
        eine Schreckensherrschaft - und schließlich übernahm ein General die Macht: <strong>Napoleon</strong>.</p>

        <div class="analogy-box">
          <strong>Wie ein Feuer, das außer Kontrolle gerät:</strong> Die Revolution wollte mehr Gerechtigkeit -
          ein gutes Ziel. Aber wie ein Feuer, das man nicht mehr löschen kann, wurde sie immer wilder: Erst
          starb der König, dann wurden Tausende hingerichtet (der "Terror"), bis ein starker Mann (Napoleon)
          das Feuer mit Gewalt erstickte.
        </div>

        <h3>1. Die Hinrichtung des Königs (21. Januar 1793)</h3>
        <p>Ludwig XVI. wurde als Verräter zum Tode verurteilt und am <strong>21. Januar 1793</strong> mit der
        <strong>Guillotine</strong> hingerichtet (öffentlich, vor einer großen Menschenmenge).</p>

        <div class="info-card">
          <strong>Guillotine</strong> = eine Maschine zur Hinrichtung mit einem schweren, schrägen Fallbeil.
          Sie galt damals als "gerecht", weil sie alle gleich schnell tötete - egal ob arm oder reich.
        </div>

        <h3>2. Der Terror / "Die Schreckensherrschaft" (1793-1794)</h3>
        <p>Es folgte eine Zeit der Angst: Die radikalen Revolutionäre um <strong>Robespierre</strong> ließen
        alle, die sie für Feinde hielten, mit der Guillotine hinrichten - <strong>Tausende Menschen</strong>.
        Diese Phase nennt man den <strong>"Großen Schrecken"</strong> oder die <strong>Schreckensherrschaft</strong>
        (französisch: "la Terreur"). Am Ende wurde sogar Robespierre selbst hingerichtet.</p>

        <h3>3. Napoleon beendet die Revolution (1799)</h3>
        <p>Nach all dem Chaos sehnten sich die Menschen nach Ordnung. <strong>1799</strong> ergriff der
        erfolgreiche General <strong>Napoleon Bonaparte</strong> die Macht. Damit gilt die Revolution als
        <strong>beendet</strong>. Später krönte sich Napoleon sogar selbst zum <strong>Kaiser</strong>.</p>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> Auf deinem Lernzettel stehen "Guillotine" und das Ende der
          Revolution. Du solltest wissen: König hingerichtet (1793, Guillotine) &rarr; Schreckensherrschaft
          &rarr; Napoleon beendet die Revolution (1799).
        </div>

        <div class="tip-box">
          <strong>Das Ende in drei Schritten:</strong> 1. <strong>König tot</strong> (1793, Guillotine) &rarr;
          2. <strong>Terror</strong> (Schreckensherrschaft, Robespierre) &rarr; 3. <strong>Napoleon</strong>
          (1799, übernimmt die Macht, Revolution beendet).
        </div>

        <div class="warning-box">
          <strong>Bittere Ironie zum Verstehen:</strong> Die Revolution begann mit dem Ruf nach <em>Freiheit
          und Menschenrechten</em> - und endete in einer <em>Schreckensherrschaft</em>, in der Tausende ohne
          fairen Prozess getötet wurden. Genau diesen Widerspruch fragen Lehrer gerne ab.
        </div>
      `
    },
    example: {
      title: "Beispiel: Das Ende ordnen",
      steps: [
        {
          label: "Januar 1793",
          html: `<p>Ludwig XVI. wird mit der <strong>Guillotine</strong> hingerichtet. Frankreich hat keinen
            König mehr - und keinen Weg zurück.</p>`
        },
        {
          label: "1793-1794",
          html: `<p>Die <strong>Schreckensherrschaft</strong> (der "Große Schrecken"): Robespierre lässt
            Tausende vermeintliche Feinde hinrichten. Am Ende trifft es ihn selbst.</p>`
        },
        {
          label: "1799",
          html: `<p><strong>Napoleon</strong> ergreift die Macht und beendet die Revolution. Später wird er Kaiser.</p>`
        }
      ]
    },
    exercisesIntro: "Merke: König tot (1793, Guillotine) → Terror/Schreckensherrschaft → Napoleon (1799).",
    exercises: [
      {
        type: "multiple-choice",
        question: "Womit und wann wurde König Ludwig XVI. hingerichtet?",
        options: [
          "Mit der Guillotine, 1793.",
          "Mit dem Schwert, 1789.",
          "Er wurde gar nicht hingerichtet.",
          "Durch Napoleon, 1799."
        ],
        correct: 0,
        explanation: "Richtig! Ludwig XVI. wurde 1793 mit der Guillotine (Fallbeil) öffentlich hingerichtet.",
        wrongExplanations: {
          1: "1789 begann erst die Revolution - der König lebte da noch und blieb im Amt.",
          2: "Doch - er wurde 1793 mit der Guillotine hingerichtet.",
          3: "Nein, die Hinrichtung war 1793, lange bevor Napoleon 1799 die Macht übernahm."
        }
      },
      {
        type: "multiple-choice",
        question: "Was versteht man unter der <strong>Schreckensherrschaft</strong> ('Großer Schrecken')?",
        options: [
          "Eine Zeit, in der die radikalen Revolutionäre Tausende vermeintliche Feinde hinrichten ließen.",
          "Die Glanzzeit des Sonnenkönigs.",
          "Eine schwere Missernte.",
          "Die Krönung Napoleons zum Kaiser."
        ],
        correct: 0,
        explanation: "Richtig! In der Schreckensherrschaft (1793-94) ließ Robespierre Tausende mit der Guillotine hinrichten - eine Zeit der Angst.",
        wrongExplanations: {
          1: "Die Glanzzeit des Sonnenkönigs war rund 100 Jahre früher und hat damit nichts zu tun.",
          2: "Eine Missernte war eine Ursache der Revolution, nicht die Schreckensherrschaft.",
          3: "Napoleons Krönung kam später - die Schreckensherrschaft war die Zeit der Massenhinrichtungen."
        }
      },
      {
        type: "ordering",
        question: "Bringe die Ereignisse am Ende der Revolution in die richtige Reihenfolge:",
        items: [
          "Der König wird mit der Guillotine hingerichtet (1793)",
          "Schreckensherrschaft: Tausende werden hingerichtet",
          "Napoleon übernimmt die Macht und beendet die Revolution (1799)"
        ],
        correctOrder: [0, 1, 2],
        explanation: "Erst die Hinrichtung des Königs (1793), dann der Terror, dann Napoleon (1799)."
      },
      {
        type: "fill-in-blank",
        question: "Fülle die Lücken zum Ende der Revolution:",
        text: "Im Jahr {{blank}} wurde König Ludwig XVI. mit der {{blank}} hingerichtet. Danach folgte eine Schreckensherrschaft. {{blank}} ergriff schließlich der General Napoleon die Macht und beendete die Revolution.",
        blanks: [
          { correct: "1793" },
          { correct: "Guillotine", alternatives: ["guillotine", "Guillotine (Fallbeil)", "Fallbeil"] },
          { correct: "1799" }
        ],
        explanation: "1793 Hinrichtung (Guillotine), dann Terror, 1799 Napoleon beendet die Revolution."
      }
    ]
  },

  // ===================================================================
  // Lektion 12: Prüfungssimulation (alle Themen)
  // ===================================================================
  {
    id: 12,
    title: "Prüfungssimulation (alle Themen)",
    explanation: {
      html: `
        <h2>Der große Test - alles auf einmal</h2>
        <p>Geschafft! Du hast alle Themen gelernt. In dieser letzten Lektion kommt alles gemischt dran -
        genau wie in der Klassenarbeit. Wenn du hier durchkommst, bist du gut vorbereitet.</p>

        <div class="why-context">
          <strong>So nutzt du diese Lektion:</strong> Geh die Übungen durch, als wäre es die echte Arbeit.
          Wo du hängst, merkst du, welches Thema du nochmal anschauen solltest - klick dann in der Seitenleiste
          auf die passende Lektion.
        </div>

        <div class="tip-box">
          <strong>Deine Spickzettel-Übersicht (das Wichtigste auf einen Blick):</strong>
          <ul>
            <li><strong>Absolutismus</strong> = König hat alle Macht ("Der Staat bin ich"), begründet mit dem <strong>Gottesgnadentum</strong>.</li>
            <li><strong>4 Säulen</strong>: Beamte, Heer, Richter, Kirche. Ludwig XIV. = Sonnenkönig, Versailles + Etikette = Adel entmachtet.</li>
            <li><strong>Aufklärung</strong>: Vernunft, Gleichheit, Menschenrechte. Montesquieu = Gewaltenteilung, Rousseau = Volkssouveränität, Voltaire = Meinungsfreiheit.</li>
            <li><strong>Ständegesellschaft</strong>: 1. Kirche, 2. Adel, 3. alle anderen (98 %, zahlen Steuern). Sonderrechte = Privilegien.</li>
            <li><strong>Ursachen</strong>: Hunger (Missernten, Brotpreise), Staat pleite, Ideen der Aufklärung.</li>
            <li><strong>Daten</strong>: 14.7.1789 Bastille · 26.8.1789 Menschenrechte · 1792 Republik · 1793 König hingerichtet (Guillotine) · 1799 Napoleon.</li>
          </ul>
        </div>
      `
    },
    exercisesIntro: "Viel Erfolg! Diese Übungen mischen alle Themen - genau wie die echte Arbeit.",
    exercises: [
      {
        type: "ordering",
        question: "Bringe die wichtigsten Ereignisse in die richtige zeitliche Reihenfolge:",
        items: [
          "Ludwig XIV. regiert als Sonnenkönig",
          "Sturm auf die Bastille",
          "Erklärung der Menschenrechte",
          "Frankreich wird Republik",
          "Der König wird hingerichtet",
          "Napoleon übernimmt die Macht"
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        explanation: "Sonnenkönig (ab 1661) → Bastille (14.7.1789) → Menschenrechte (26.8.1789) → Republik (1792) → Hinrichtung (1793) → Napoleon (1799)."
      },
      {
        type: "multiple-choice",
        question: "Womit begründete der absolute König seine Macht?",
        options: [
          "Mit dem Gottesgnadentum - seine Macht komme von Gott.",
          "Mit einer Wahl durch das Volk.",
          "Mit der Zustimmung des Parlaments.",
          "Mit der Gewaltenteilung."
        ],
        correct: 0,
        explanation: "Richtig! Das Gottesgnadentum: Der König glaubte, seine Macht direkt von Gott erhalten zu haben.",
        wrongExplanations: {
          1: "Eine Wahl durch das Volk gab es im Absolutismus gerade nicht.",
          2: "Ein Parlament, das den König kontrolliert, gab es im Absolutismus nicht.",
          3: "Die Gewaltenteilung ist das Gegenteil - eine Idee der Aufklärung gegen den Absolutismus."
        }
      },
      {
        type: "matching",
        question: "Ordne jeden Begriff seiner Erklärung zu:",
        pairs: [
          { left: "Absolutismus", right: "der König hat die uneingeschränkte Macht" },
          { left: "Privilegien", right: "Sonderrechte von Adel und Kirche (z.B. keine Steuern)" },
          { left: "Republik", right: "Staatsform ohne König" },
          { left: "Gewaltenteilung", right: "Aufteilung der Macht in Legislative, Exekutive, Judikative" }
        ],
        explanation: "Diese vier Begriffe gehören zum Grundwortschatz der Arbeit - sicher beherrschen!"
      },
      {
        type: "multiple-choice",
        question: "Welche drei Aufklärer und Ideen gehören zusammen?",
        options: [
          "Montesquieu = Gewaltenteilung, Rousseau = Volkssouveränität, Voltaire = Meinungsfreiheit",
          "Montesquieu = Volkssouveränität, Rousseau = Meinungsfreiheit, Voltaire = Gewaltenteilung",
          "Alle drei forderten die absolute Macht des Königs",
          "Montesquieu = Guillotine, Rousseau = Bastille, Voltaire = Versailles"
        ],
        correct: 0,
        explanation: "Richtig! M-R-V: Montesquieu (Macht teilen), Rousseau (Regierung durchs Volk), Voltaire (verschiedene Meinungen erlauben).",
        wrongExplanations: {
          1: "Die Ideen sind vertauscht. Richtig: Montesquieu = Gewaltenteilung, Rousseau = Volkssouveränität, Voltaire = Meinungsfreiheit.",
          2: "Nein - die Aufklärer waren gegen die absolute Macht des Königs.",
          3: "Das sind Orte und Dinge, keine Ideen der Aufklärer."
        }
      },
      {
        type: "fill-in-blank",
        question: "Fülle die wichtigsten Fakten ein:",
        text: "Der 3. Stand umfasste rund {{blank}} Prozent des Volkes und zahlte die meisten Steuern. Die Revolution begann am 14. Juli {{blank}} mit dem Sturm auf die {{blank}}. {{blank}} wurde Frankreich eine Republik.",
        blanks: [
          { correct: "98", alternatives: ["98 %", "98%"] },
          { correct: "1789" },
          { correct: "Bastille", alternatives: ["bastille"] },
          { correct: "1792" }
        ],
        explanation: "3. Stand = 98 %, Bastille = 14.7.1789, Republik = 1792. Kernfakten der Arbeit."
      },
      {
        type: "multiple-choice",
        question: "Was bedeutete die Erklärung der Menschenrechte (26. August 1789)?",
        options: [
          "Alle Menschen sind frei und vor dem Gesetz gleich - die Privilegien wurden abgeschafft.",
          "Der König bekam mehr Rechte.",
          "Nur der Adel bekam neue Rechte.",
          "Die Kirche durfte wieder Steuern eintreiben."
        ],
        correct: 0,
        explanation: "Richtig! Freiheit und Gleichheit für alle, Ende der Sonderrechte (Privilegien). Das war das Ende der Ständegesellschaft.",
        wrongExplanations: {
          1: "Im Gegenteil - die Macht des Königs wurde eingeschränkt.",
          2: "Nein, die Rechte galten für alle Menschen, nicht nur den Adel - und der Adel verlor seine Privilegien.",
          3: "Genau das Gegenteil - die Privilegien von Adel und Kirche wurden abgeschafft."
        }
      },
      {
        type: "free-text",
        question: "<strong>Abschlussaufgabe:</strong> Erkläre in 4-6 Sätzen, wie es vom Absolutismus zur Französischen Revolution kam. Nutze die Begriffe Gottesgnadentum, Aufklärung, Ständegesellschaft und Privilegien.",
        hint: "Erzähl die Geschichte in der richtigen Reihenfolge: erst die absolute Macht (Gottesgnadentum), dann die neuen Ideen (Aufklärung), dann die Ungerechtigkeit (Stände/Privilegien) und die Krise, die zur Revolution führte.",
        minWords: 40,
        modelAnswer: "Im Absolutismus besaß der König die gesamte Macht allein und begründete sie mit dem Gottesgnadentum - seine Macht komme direkt von Gott. Im 18. Jahrhundert verbreitete die Aufklärung neue Ideen: Vernunft, Gleichheit aller Menschen und Volkssouveränität. Diese Ideen stellten die Macht des Königs infrage. Gleichzeitig war die Gesellschaft in eine ungerechte Ständegesellschaft eingeteilt: Der 1. und 2. Stand (Kirche und Adel) hatten Privilegien und zahlten kaum Steuern, während der 3. Stand - rund 98 % des Volkes - die ganze Last trug, aber nichts mitbestimmen durfte. Als dann Missernten, Hunger und ein fast bankrotter Staat dazukamen, lief das Fass über. 1789 stürmte das Volk die Bastille - die Französische Revolution begann."
      }
    ]
  }

]);
