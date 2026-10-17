// 21+ age gate: confirmation persisted in localStorage for 30 days.
// Same approach as the vicecitycigars.com gate (vccweb assets/js/age-gate.js).
(function() {
  'use strict';

  var storageKey = 'trt-age-verified';
  var maxAgeMs = 30 * 24 * 60 * 60 * 1000;
  var root = document.documentElement;

  function setVerified() {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ value: 'yes', ts: Date.now() }));
    } catch (e) {}
  }

  function isVerified() {
    try {
      var raw = localStorage.getItem(storageKey);
      if (!raw) return false;
      var parsed = JSON.parse(raw);
      if (!parsed || parsed.value !== 'yes' || !parsed.ts) return false;
      if ((Date.now() - parsed.ts) > maxAgeMs) {
        localStorage.removeItem(storageKey);
        return false;
      }
      return true;
    } catch (e) { return false; }
  }

  if (isVerified()) return;

  // Hide the page before first paint; the stylesheet keys off this class.
  root.classList.add('age-gate-pending');

  function build() {
    var overlay = document.createElement('div');
    overlay.className = 'age-gate-overlay';

    var modal = document.createElement('div');
    modal.className = 'age-gate-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'age-gate-title');
    modal.setAttribute('aria-describedby', 'age-gate-desc');
    modal.tabIndex = -1;

    var content = document.createElement('div');
    content.className = 'age-gate-content';

    var title = document.createElement('h2');
    title.id = 'age-gate-title';
    title.textContent = 'Are you 21 or older?';

    var desc = document.createElement('p');
    desc.id = 'age-gate-desc';
    desc.textContent = 'This site is for adults 21+ only. Please confirm your age to enter.';

    var actions = document.createElement('div');
    actions.className = 'age-gate-actions';

    var yesBtn = document.createElement('button');
    yesBtn.type = 'button';
    yesBtn.className = 'btn btn-primary';
    yesBtn.textContent = 'Yes, I am 21+';

    var noBtn = document.createElement('button');
    noBtn.type = 'button';
    noBtn.className = 'btn btn-secondary';
    noBtn.textContent = 'No';

    actions.appendChild(yesBtn);
    actions.appendChild(noBtn);
    content.appendChild(title);
    content.appendChild(desc);
    content.appendChild(actions);
    modal.appendChild(content);
    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    var inerted = [];
    Array.prototype.forEach.call(document.body.children, function(el) {
      if (el === overlay || el === modal || el.tagName === 'SCRIPT') return;
      if (el.hasAttribute('inert')) return;
      el.setAttribute('inert', '');
      inerted.push(el);
    });
    document.body.style.overflow = 'hidden';

    function dismiss() {
      inerted.forEach(function(el) { el.removeAttribute('inert'); });
      document.body.style.overflow = '';
      root.classList.remove('age-gate-pending');
      document.body.removeChild(overlay);
      document.body.removeChild(modal);
    }

    function showUnderageState() {
      content.innerHTML = '';

      var sorry = document.createElement('h2');
      sorry.id = 'age-gate-title';
      sorry.textContent = 'Sorry!';

      var message = document.createElement('p');
      message.id = 'age-gate-desc';
      message.textContent = 'You must be 21 or older to enter this site.';

      var leave = document.createElement('button');
      leave.type = 'button';
      leave.className = 'btn btn-secondary';
      leave.textContent = 'Leave Site';
      leave.addEventListener('click', function() {
        if (window.history.length > 1) {
          window.history.back();
          return;
        }
        window.location.href = 'about:blank';
      });

      content.appendChild(sorry);
      content.appendChild(message);
      content.appendChild(leave);
      leave.focus();
    }

    yesBtn.addEventListener('click', function() {
      setVerified();
      dismiss();
    });
    noBtn.addEventListener('click', showUnderageState);

    modal.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        return;
      }
      if (e.key !== 'Tab') return;
      var focusable = modal.querySelectorAll('button');
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    yesBtn.focus();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
