// Investigative report interactions
document.querySelectorAll('.redacted').forEach(item => {
  item.addEventListener('click', function() {
      this.style.background = 'none';
      this.style.color = 'var(--redacted)';
      this.innerHTML = '<i class="fas fa-eye"></i> ' + this.textContent;
  });
});

// Live price simulation
let currentPrice = 0.042;
setInterval(() => {
  const change = (Math.random() - 0.5) * 0.008;
  currentPrice = Math.max(0.01, currentPrice + change);
  const changeElement = document.querySelector('.change');

  document.querySelector('.price').textContent = currentPrice.toFixed(3);
  changeElement.textContent = `${(change * 100).toFixed(2)}%`;
  changeElement.className = `change ${change >= 0 ? 'positive' : 'negative'}`;
}, 2000);

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
      }
  });
});

document.querySelectorAll('.evidence, .interactive-box').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

// Ensure elements are initialized
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.redacted, .price-ticker, .evidence, .interactive-box')
      .forEach(el => el.style.visibility = 'visible');
});

// Reveal Button for Inspection Overlay
document.getElementById('revealBtn').addEventListener('click', () => {
  document.getElementById('inspectionOverlay').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', () => {
  document.getElementById('inspectionOverlay').style.display = 'none';
});

// Close inspection overlay when clicking outside
window.addEventListener('click', (event) => {
  const overlay = document.getElementById('inspectionOverlay');
  if (event.target === overlay) {
      overlay.style.display = 'none';
  }
});

// Twitter Verification System
document.getElementById('verifyBtn').addEventListener('click', () => {
  const overlay = document.getElementById('verificationOverlay');
  overlay.style.display = 'flex';

  // Ensure the verification steps become visible
  const steps = overlay.querySelector('.verification-steps');
  if (steps) {
      steps.style.display = 'block';
      steps.style.visibility = 'visible';
      steps.style.opacity = '1';

      // Make sure each step inside is also visible
      steps.querySelectorAll('.step').forEach(step => {
          step.style.display = 'flex'; // Adjust based on CSS
          step.style.opacity = '1';
          step.style.visibility = 'visible';
      });
  }
});

// Close verification overlay when clicking outside
document.getElementById('closeVerificationBtn').addEventListener('click', () => {
  document.getElementById('verificationOverlay').style.display = 'none';
});

// Close overlays when clicking outside
window.addEventListener('click', (event) => {
  const verificationOverlay = document.getElementById('verificationOverlay');
  const verificationSteps = document.querySelector('.verification-steps');

  if (event.target === verificationOverlay) {
      verificationOverlay.style.display = 'none';
  }

  if (!event.target.closest('.verification-steps') && !event.target.closest('#verifyBtn')) {
      verificationSteps.style.display = 'none';
  }
});
