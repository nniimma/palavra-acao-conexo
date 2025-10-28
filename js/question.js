function showQuestionByHash() {
  const hash = window.location.hash; // e.g. "#question-01"
  if (hash) {
    document.querySelectorAll('.question-container').forEach(el => {
      el.style.display = 'none';
    });
    const target = document.querySelector(hash);
    if (target) target.style.display = 'block';
  } else {
    document.querySelector('.question-container').style.display = 'block';
  }
}

// Run once when the page loads
showQuestionByHash();

// Reload the page when the hash changes
window.addEventListener('hashchange', () => {
  location.reload(); // full reload
});