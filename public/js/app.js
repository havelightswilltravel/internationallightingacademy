// Small progressive enhancements. Every page works without JavaScript.
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  document.querySelectorAll('[data-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => document.getElementById(btn.dataset.toggle).classList.toggle('open'));
  });

  // Confirm dialogs
  document.querySelectorAll('form[data-confirm]').forEach((f) => {
    f.addEventListener('submit', (e) => { if (!confirm(f.dataset.confirm)) e.preventDefault(); });
  });

  // Auto-submit selects
  document.querySelectorAll('select[data-autosubmit]').forEach((s) => s.addEventListener('change', () => s.form.submit()));

  // Print button
  document.querySelectorAll('[data-print]').forEach((b) => b.addEventListener('click', () => window.print()));

  // Table filter
  document.querySelectorAll('input[data-filter]').forEach((input) => {
    const table = document.querySelector(input.dataset.filter);
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase();
      table.querySelectorAll('tr:not(:first-child)').forEach((tr) => { tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none'; });
    });
  });

  // Exam: warn about unanswered questions, prevent leaving mid-exam, countdown timer
  const exam = document.getElementById('exam-form');
  if (exam) {
    let submitting = false;
    exam.addEventListener('submit', (e) => {
      if (submitting) return;
      const unanswered = [...exam.querySelectorAll('fieldset.question')].filter((fs) => !fs.querySelector('input:checked'));
      exam.querySelectorAll('fieldset.question').forEach((fs) => fs.classList.toggle('unanswered', unanswered.includes(fs)));
      if (unanswered.length && !exam.dataset.forceSubmit && !confirm(`${unanswered.length} question(s) are unanswered. Submit anyway?`)) {
        e.preventDefault();
        unanswered[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      submitting = true;
    });
    window.addEventListener('beforeunload', (e) => { if (!submitting) { e.preventDefault(); e.returnValue = ''; } });

    const timer = document.querySelector('.timer[data-expires]');
    if (timer) {
      const end = Number(timer.dataset.expires);
      const tick = () => {
        const left = Math.max(0, Math.floor((end - Date.now()) / 1000));
        const h = Math.floor(left / 3600); const m = Math.floor((left % 3600) / 60); const s = left % 60;
        timer.textContent = (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(s).padStart(2, '0');
        timer.classList.toggle('low', left < 300);
        if (left === 0) {
          clearInterval(iv);
          exam.dataset.forceSubmit = '1';
          submitting = true;
          exam.submit();
        }
      };
      const iv = setInterval(tick, 1000);
      tick();
    }
  }
});
