/**
 * Modul 2 - Die Aufklärung (Geschichts-Klassenarbeit, Klasse 8).
 *   L4 Die Ideen der Aufklärung (Vernunft, Naturrecht, Menschenrechte, Volkssouveränität) - Buch S. 94/95
 *   L5 Gewaltenteilung & die Aufklärer (Montesquieu, Rousseau, Voltaire) - Buch S. 94/95
 *
 * Inhalte in eigenen Worten nach dem Schulbuch + Lernzettel. Zielgruppe: Leonie, Klasse 8, M-Niveau.
 */

window.LESSON_DATA = (window.LESSON_DATA || []).concat([

  // ===================================================================
  // Lektion 4: Die Ideen der Aufklärung
  // ===================================================================
  {
    id: 4,
    title: "Die Ideen der Aufklärung",
    explanation: {
      html: `
        <h2>"Habe Mut, deinen eigenen Verstand zu benutzen!"</h2>
        <p>Im 18. Jahrhundert (den 1700er-Jahren) verbreitete sich in ganz Europa eine neue Denkweise:
        die <strong>Aufklärung</strong>. Kluge Denker (man nennt sie <strong>Aufklärer</strong>) forderten,
        dass die Menschen ihren <strong>eigenen Verstand</strong> benutzen sollen - statt blind dem König,
        dem Adel oder alten Traditionen zu gehorchen.</p>

        <div class="analogy-box">
          <strong>Wie Licht in einem dunklen Raum:</strong> "Aufklärung" kommt von "aufklaren / hell machen".
          Vorher saßen die Menschen sozusagen im Dunkeln und glaubten einfach, was ihnen Kirche und König
          sagten. Die Aufklärer machten das Licht an: Mit <strong>Vernunft</strong> kann jeder Mensch selbst
          prüfen, was richtig und gerecht ist.
        </div>

        <h3>Die wichtigsten Ideen der Aufklärung</h3>
        <table class="icon-table">
          <tr><th>Idee</th><th>Was steckt dahinter?</th></tr>
          <tr><td><strong>Vernunft</strong></td><td>Jeder Mensch soll selbst denken und prüfen, statt blind zu glauben. Der Verstand entscheidet, nicht die Tradition.</td></tr>
          <tr><td><strong>Menschenrechte</strong></td><td>Rechte, die <strong>allen Menschen von Geburt an</strong> zustehen - egal ob arm oder reich. Zum Beispiel Freiheit und Gleichheit.</td></tr>
          <tr><td><strong>Gleichheit</strong></td><td>Alle Menschen sind gleich viel wert. Keiner ist von Geburt aus "besser" - auch nicht der Adel.</td></tr>
          <tr><td><strong>Freiheit / Toleranz</strong></td><td>Jeder darf seine Meinung sagen und an das glauben, was er möchte (Religionsfreiheit, Meinungsfreiheit).</td></tr>
          <tr><td><strong>Volkssouveränität</strong></td><td>Die Macht im Staat geht vom <strong>Volk</strong> aus - nicht von Gott und nicht vom König.</td></tr>
        </table>

        <div class="info-card">
          <strong>Menschenrechte</strong> = Rechte, die jedem Menschen allein deshalb zustehen, weil er ein Mensch ist
          (von Geburt an, für alle gleich). <br>
          <strong>Volkssouveränität</strong> = "souverän" heißt "Herrscher". Volkssouveränität bedeutet: das <em>Volk</em> ist der Herrscher.
        </div>

        <h3>Ein Angriff auf den Absolutismus</h3>
        <p>Diese Ideen waren <strong>brandgefährlich</strong> für den absoluten König. Denn wenn die Macht vom
        Volk ausgeht (Volkssouveränität), dann eben <strong>nicht von Gott</strong> - das Gottesgnadentum ist damit
        widerlegt. Und wenn alle Menschen gleich sind, dann sind die <strong>Privilegien</strong> (Sonderrechte)
        von Adel und Kirche ungerecht. Die Aufklärung lieferte so die <strong>Ideen für die Revolution</strong>.</p>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> Auf deinem Lernzettel stehen "Ideen der Aufklärung" und
          "Gewaltenteilung / Menschenrechte". Die Aufklärung ist das <em>Bindeglied</em>: Sie erklärt, <strong>warum</strong>
          die Menschen später gegen den König aufstanden. Ohne diese Ideen keine Revolution.
        </div>

        <div class="tip-box">
          <strong>Der rote Faden zum Merken:</strong> Aufklärung = <em>"selbst denken statt blind gehorchen"</em>.
          Daraus folgt alles andere: Vernunft &rarr; alle Menschen sind gleich &rarr; Menschenrechte &rarr;
          die Macht gehört dem Volk, nicht dem König.
        </div>

        <div class="warning-box">
          <strong>Nicht verwechseln:</strong> Die <strong>Aufklärung</strong> ist die <em>Denkbewegung mit den Ideen</em>
          (18. Jh.). Die <strong>Revolution</strong> ist die <em>tatsächliche Tat</em> - der Aufstand ab 1789.
          Erst kamen die Ideen (Aufklärung), dann die Tat (Revolution).
        </div>
      `
    },
    example: {
      title: "Beispiel: Warum war die Aufklärung gefährlich für den König?",
      steps: [
        {
          label: "Der alte Gedanke",
          html: `<p>Im Absolutismus galt: Der König hat seine Macht <strong>von Gott</strong> (Gottesgnadentum).
            Niemand darf ihn kontrollieren.</p>`
        },
        {
          label: "Der neue Gedanke",
          html: `<p>Die Aufklärer sagen: Die Macht geht vom <strong>Volk</strong> aus (Volkssouveränität),
            und alle Menschen sind <strong>gleich</strong>.</p>`
        },
        {
          label: "Die Sprengkraft",
          html: `<p>Wenn die Macht vom Volk kommt, kommt sie nicht von Gott &rarr; die Begründung des Königs
            bricht zusammen. Und wenn alle gleich sind, sind die Sonderrechte von Adel und Kirche ungerecht.
            &rarr; Die Aufklärung liefert die <strong>Begründung für die Revolution</strong>.</p>`
        }
      ]
    },
    exercisesIntro: "Denk an den roten Faden: selbst denken (Vernunft) &rarr; alle gleich &rarr; Menschenrechte &rarr; Macht beim Volk.",
    exercises: [
      {
        type: "multiple-choice",
        question: "Was forderten die Aufklärer vor allem?",
        options: [
          "Dass die Menschen ihren eigenen Verstand benutzen, statt blind zu gehorchen.",
          "Dass der König noch mehr Macht bekommt.",
          "Dass alle Menschen jeden Sonntag in die Kirche gehen.",
          "Dass nur der Adel etwas zu sagen hat."
        ],
        correct: 0,
        explanation: "Richtig! Der Kern der Aufklärung ist: Benutze deinen eigenen Verstand (Vernunft), prüfe selbst, was gerecht ist.",
        wrongExplanations: {
          1: "Im Gegenteil - die Aufklärung stellte die Macht des Königs infrage.",
          2: "Die Aufklärung forderte gerade Religionsfreiheit und Toleranz, keinen Zwang.",
          3: "Die Aufklärer forderten Gleichheit aller Menschen, nicht die Vorherrschaft des Adels."
        }
      },
      {
        type: "multiple-choice",
        question: "Was bedeutet <strong>Volkssouveränität</strong>?",
        options: [
          "Die Macht im Staat geht vom Volk aus.",
          "Das Volk muss dem König absoluten Gehorsam schwören.",
          "Nur reiche Bürger dürfen wählen.",
          "Der König herrscht von Gottes Gnaden."
        ],
        correct: 0,
        explanation: "Genau! Volkssouveränität = das Volk ist der eigentliche Herrscher, die Macht kommt von ihm.",
        wrongExplanations: {
          1: "Das wäre das Gegenteil - der Gehorsam gegenüber dem König gehört zum Absolutismus.",
          2: "Auch wenn das später ein Streitpunkt war - die Idee meint zunächst: die Macht kommt vom Volk.",
          3: "Das ist das Gottesgnadentum - genau die Idee, die die Aufklärung widerlegte."
        }
      },
      {
        type: "fill-in-blank",
        question: "Fülle die Lücken zu den Ideen der Aufklärung:",
        text: "Die Aufklärer wollten, dass jeder Mensch seinen eigenen {{blank}} benutzt. Sie forderten {{blank}}, die allen Menschen von Geburt an zustehen, und die Gleichheit aller Menschen.",
        blanks: [
          { correct: "Verstand", alternatives: ["verstand", "Vernunft"] },
          { correct: "Menschenrechte", alternatives: ["menschenrechte", "Grundrechte"] }
        ],
        explanation: "Eigener Verstand (Vernunft) und Menschenrechte für alle - das sind Kernideen der Aufklärung."
      },
      {
        type: "multiple-choice",
        question: "Warum waren die Ideen der Aufklärung gefährlich für den absoluten König?",
        options: [
          "Sie widerlegten das Gottesgnadentum und erklärten Privilegien für ungerecht.",
          "Sie verlangten höhere Steuern für das Volk.",
          "Sie wollten den König zum Kaiser machen.",
          "Sie forderten ein noch größeres Heer."
        ],
        correct: 0,
        explanation: "Richtig! Wenn die Macht vom Volk kommt, nicht von Gott, und alle gleich sind, dann hat der absolute König keine Begründung mehr.",
        wrongExplanations: {
          1: "Mit Steuern hatte die Aufklärung nichts zu tun - es ging um Freiheit und Gleichheit.",
          2: "Nein, die Aufklärung wollte die Macht des Königs begrenzen, nicht vergrößern.",
          3: "Das Heer ist eine Säule des Absolutismus - die Aufklärung stützte den König gerade nicht."
        }
      }
    ]
  },

  // ===================================================================
  // Lektion 5: Gewaltenteilung & die Aufklärer
  // ===================================================================
  {
    id: 5,
    title: "Gewaltenteilung & die Aufklärer",
    explanation: {
      html: `
        <h2>Drei Denker, die die Welt veränderten</h2>
        <p>Drei berühmte französische Aufklärer solltest du mit ihrer wichtigsten Idee kennen:
        <strong>Montesquieu</strong>, <strong>Rousseau</strong> und <strong>Voltaire</strong>. Jeder steht
        für eine bestimmte Idee, die später in die Revolution einfloss.</p>

        <div class="analogy-box">
          <strong>Stell dir ein Fußballspiel vor, in dem eine Person zugleich Spieler, Schiedsrichter UND
          Regel-Macher ist.</strong> Diese Person würde immer gewinnen - total ungerecht! Genau dieses Problem
          hatte der absolute König: Er machte die Gesetze, regierte und richtete. Der Aufklärer Montesquieu
          sagte: Diese drei Aufgaben müssen auf <strong>verschiedene Personen aufgeteilt</strong> werden.
          Das ist die <strong>Gewaltenteilung</strong>.
        </div>

        <h3>Die Gewaltenteilung (Montesquieu)</h3>
        <p>Damit nicht einer zu viel Macht hat, soll die <strong>Staatsgewalt in drei Teile getrennt</strong>
        werden, die sich gegenseitig kontrollieren:</p>

        <svg viewBox="0 0 440 130" role="img" aria-label="Gewaltenteilung in drei Gewalten: Legislative macht Gesetze, Exekutive regiert, Judikative spricht Recht" style="max-width:430px;width:100%;height:auto;display:block;margin:1rem auto;font-family:sans-serif;">
          <rect x="10" y="20" width="135" height="90" rx="8" fill="#dbeafe" stroke="#2563EB" stroke-width="2"/>
          <text x="77" y="44" text-anchor="middle" font-size="12" fill="#1e3a8a" font-weight="bold">Legislative</text>
          <text x="77" y="64" text-anchor="middle" font-size="10" fill="#1f2937">macht die</text>
          <text x="77" y="78" text-anchor="middle" font-size="10" fill="#1f2937">Gesetze</text>
          <text x="77" y="98" text-anchor="middle" font-size="9" fill="#6b7280">(Parlament)</text>
          <rect x="152" y="20" width="135" height="90" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
          <text x="219" y="44" text-anchor="middle" font-size="12" fill="#15803d" font-weight="bold">Exekutive</text>
          <text x="219" y="64" text-anchor="middle" font-size="10" fill="#1f2937">regiert /</text>
          <text x="219" y="78" text-anchor="middle" font-size="10" fill="#1f2937">führt aus</text>
          <text x="219" y="98" text-anchor="middle" font-size="9" fill="#6b7280">(Regierung)</text>
          <rect x="294" y="20" width="135" height="90" rx="8" fill="#fef3c7" stroke="#ca8a04" stroke-width="2"/>
          <text x="361" y="44" text-anchor="middle" font-size="12" fill="#a16207" font-weight="bold">Judikative</text>
          <text x="361" y="64" text-anchor="middle" font-size="10" fill="#1f2937">spricht</text>
          <text x="361" y="78" text-anchor="middle" font-size="10" fill="#1f2937">Recht</text>
          <text x="361" y="98" text-anchor="middle" font-size="9" fill="#6b7280">(Gerichte)</text>
        </svg>

        <table class="icon-table">
          <tr><th>Gewalt</th><th>Aufgabe</th><th>Wer?</th></tr>
          <tr><td><strong>Legislative</strong></td><td>macht die Gesetze</td><td>Parlament</td></tr>
          <tr><td><strong>Exekutive</strong></td><td>regiert und führt die Gesetze aus</td><td>Regierung</td></tr>
          <tr><td><strong>Judikative</strong></td><td>spricht Recht (Gerichte, Richter)</td><td>Gerichte</td></tr>
        </table>
        <p>So kann sich keiner zum Alleinherrscher machen - die drei Gewalten halten sich gegenseitig in Schach.
        <strong>Bis heute</strong> ist das die Grundlage jeder Demokratie, auch in Deutschland!</p>

        <h3>Die drei Aufklärer und ihre Ideen</h3>
        <table class="icon-table">
          <tr><th>Aufklärer</th><th>Seine Hauptidee</th></tr>
          <tr><td><strong>Montesquieu</strong></td><td>die <strong>Gewaltenteilung</strong> (Legislative, Exekutive, Judikative)</td></tr>
          <tr><td><strong>Rousseau</strong></td><td>die <strong>Volkssouveränität</strong> - die Macht geht vom Volk aus</td></tr>
          <tr><td><strong>Voltaire</strong></td><td><strong>Meinungs- und Religionsfreiheit</strong>, Toleranz, Kampf gegen Vorurteile</td></tr>
        </table>

        <div class="why-context">
          <strong>Warum lernen wir das?</strong> "Gewaltenteilung" steht direkt auf deinem Lernzettel. Eine
          beliebte Aufgabe ist: die drei Gewalten nennen und erklären - oder einem Aufklärer seine Idee zuordnen.
        </div>

        <div class="tip-box">
          <strong>Eselsbrücke für die Aufklärer:</strong><br>
          <strong>M</strong>ontesquieu &rarr; <strong>M</strong>acht aufteilen (Gewaltenteilung).<br>
          <strong>R</strong>ousseau &rarr; <strong>R</strong>egierung durchs Volk (Volkssouveränität).<br>
          <strong>V</strong>oltaire &rarr; <strong>V</strong>erschiedene Meinungen erlauben (Meinungsfreiheit/Toleranz).
        </div>

        <div class="warning-box">
          <strong>Häufige Verwechslung:</strong> <strong>Legislative</strong> macht Gesetze (denk an "Legi" wie
          in "legal/Gesetz"), <strong>Exekutive</strong> führt sie aus (denk an "exekutieren" = ausführen),
          <strong>Judikative</strong> richtet (denk an "Judge" = englisch für Richter). Diese drei nicht durcheinanderbringen!
        </div>
      `
    },
    example: {
      title: "Beispiel: Welche Gewalt ist gefragt?",
      steps: [
        {
          label: "Fall 1",
          html: `<p><em>Das Parlament beschließt ein neues Gesetz gegen das Rasen im Straßenverkehr.</em><br>
            &rarr; Gesetze machen = <strong>Legislative</strong>.</p>`
        },
        {
          label: "Fall 2",
          html: `<p><em>Die Polizei und die Regierung sorgen dafür, dass das Gesetz eingehalten wird.</em><br>
            &rarr; Gesetze ausführen = <strong>Exekutive</strong>.</p>`
        },
        {
          label: "Fall 3",
          html: `<p><em>Ein Gericht verurteilt einen Raser zu einer Strafe.</em><br>
            &rarr; Recht sprechen = <strong>Judikative</strong>.</p>`
        }
      ]
    },
    exercisesIntro: "Merke: Legislative = Gesetze, Exekutive = ausführen, Judikative = richten. Und: M-R-V für die drei Aufklärer.",
    exercises: [
      {
        type: "matching",
        question: "Ordne jeden Aufklärer seiner Hauptidee zu:",
        pairs: [
          { left: "Montesquieu", right: "Gewaltenteilung (Macht in drei Teile aufteilen)" },
          { left: "Rousseau", right: "Volkssouveränität (die Macht geht vom Volk aus)" },
          { left: "Voltaire", right: "Meinungs- und Religionsfreiheit, Toleranz" }
        ],
        explanation: "M-R-V: Montesquieu = Macht teilen, Rousseau = Regierung durchs Volk, Voltaire = verschiedene Meinungen erlauben."
      },
      {
        type: "matching",
        question: "Ordne jede der drei Gewalten ihrer Aufgabe zu:",
        pairs: [
          { left: "Legislative", right: "macht die Gesetze (Parlament)" },
          { left: "Exekutive", right: "regiert und führt die Gesetze aus (Regierung)" },
          { left: "Judikative", right: "spricht Recht (Gerichte, Richter)" }
        ],
        explanation: "Legislative = Gesetze, Exekutive = ausführen, Judikative = richten."
      },
      {
        type: "multiple-choice",
        question: "Welcher Aufklärer entwickelte die Idee der <strong>Gewaltenteilung</strong>?",
        options: ["Montesquieu", "Rousseau", "Voltaire", "Ludwig XIV."],
        correct: 0,
        explanation: "Richtig! Montesquieu forderte, die Staatsgewalt in Legislative, Exekutive und Judikative aufzuteilen.",
        wrongExplanations: {
          1: "Rousseau steht für die Volkssouveränität (Macht vom Volk), nicht für die Gewaltenteilung.",
          2: "Voltaire kämpfte vor allem für Meinungs- und Religionsfreiheit (Toleranz).",
          3: "Ludwig XIV. war der absolute König - er war gegen jede Teilung der Macht!"
        }
      },
      {
        type: "fill-in-blank",
        question: "Vervollständige die drei Gewalten:",
        text: "Die {{blank}} macht die Gesetze, die {{blank}} regiert und führt sie aus, und die {{blank}} spricht Recht.",
        blanks: [
          { correct: "Legislative", alternatives: ["legislative"] },
          { correct: "Exekutive", alternatives: ["exekutive"] },
          { correct: "Judikative", alternatives: ["judikative"] }
        ],
        explanation: "Legislative (Gesetze), Exekutive (ausführen), Judikative (richten) - die drei Gewalten der Gewaltenteilung."
      }
    ]
  }

]);
