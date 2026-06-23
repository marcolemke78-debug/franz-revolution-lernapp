/**
 * App-Einstieg für das Geschichts-Lernprogramm
 * "Absolutismus & Französische Revolution" (Klasse 8, Realschule BW, M-Niveau).
 * Definiert die Lektionsliste (LESSONS) und steuert die Navigation.
 *
 * Die eigentlichen Lektionsinhalte stehen in den js/lessons-*.js-Dateien
 * und tragen sich ins globale Register window.LESSON_DATA ein.
 */
const LESSONS = [
  // Modul 1: Absolutismus
  { id: 1, title: 'Überblick & Zeitstrahl 1661–1799', module: 'absolutismus' },
  { id: 2, title: 'Absolutismus & Gottesgnadentum', module: 'absolutismus' },
  { id: 3, title: 'Die 4 Säulen der Macht', module: 'absolutismus' },
  // Modul 2: Die Aufklärung
  { id: 4, title: 'Die Ideen der Aufklärung', module: 'aufklaerung' },
  { id: 5, title: 'Gewaltenteilung & die Aufklärer', module: 'aufklaerung' },
  // Modul 3: Französische Revolution
  { id: 6, title: 'Die Ständegesellschaft', module: 'revolution' },
  { id: 7, title: 'Frankreich in der Krise', module: 'revolution' },
  { id: 8, title: 'Die Revolution beginnt (1789)', module: 'revolution' },
  { id: 9, title: 'Die Erklärung der Menschenrechte', module: 'revolution' },
  { id: 10, title: 'Frankreich wird Republik', module: 'revolution' },
  { id: 11, title: 'Das Ende der Revolution', module: 'revolution' },
  { id: 12, title: 'Prüfungssimulation (alle Themen)', module: 'revolution' },
];

function navigateToLesson(id) {
  document.getElementById('progress-bar-container').style.display = '';
  document.getElementById('sidebar').classList.remove('open');
  // Wiederholungs-Box ausblenden, sobald aktiv in eine Lektion navigiert wird.
  const reviewBox = document.getElementById('review-due');
  if (reviewBox) reviewBox.style.display = 'none';
  Progress.setLastLesson(id);
  if (Progress.getStatus(id) === 'not_started') {
    Progress.setStatus(id, 'in_progress');
  }
  document.querySelectorAll('#sidebar li').forEach(li => li.classList.remove('active'));
  Renderer.renderLesson(id);
  Renderer.renderSidebar(LESSONS);
  Renderer.renderProgressBar();
  const activeItem = document.querySelector(`#sidebar li[data-lesson-id="${id}"]`);
  if (activeItem) activeItem.classList.add('active');
  // nach oben scrollen, damit der Lektionstitel sichtbar ist
  const main = document.getElementById('content');
  if (main) main.scrollTop = 0;
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
  Renderer.renderSidebar(LESSONS);
  Renderer.renderProgressBar();
  const lastLesson = Progress.getLastLesson();
  navigateToLesson(lastLesson);
  // Begrüßung: Fällig-Box NACH der initialen Navigation zeigen.
  Renderer.renderReviewDue();

  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
  document.getElementById('reset-progress').addEventListener('click', () => {
    if (confirm('Fortschritt wirklich zurücksetzen?')) {
      Progress.reset();
      location.reload();
    }
  });
});
