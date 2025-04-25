document.addEventListener('DOMContentLoaded', () => {
    const form   = document.getElementById('contactForm');
    const status = document.getElementById('contact-status');
  
    if (!form) {
      console.error('Contact form not found');
      return;
    }
  
    form.addEventListener('submit', async (e) => {
      // 1️⃣ Always block native submit first
      e.preventDefault();                                // :contentReference[oaicite:5]{index=5}
  
      // 2️⃣ Run HTML5 constraint validation
      if (!form.checkValidity()) {                       // :contentReference[oaicite:6]{index=6}
        form.reportValidity();                           // :contentReference[oaicite:7]{index=7}
        return;
      }
  
      // 3️⃣ Build FormData
      const data = new FormData(form);
  
      // 4️⃣ Send via AJAX to Formspree
      try {
        const response = await fetch(form.action, {
          method:  form.method,                           // POST
          body:    data,
          headers: { 'Accept': 'application/json' }       // :contentReference[oaicite:8]{index=8}
        });
        const json = await response.json();
  
        if (!response.ok) {
          // Show any Formspree errors or a generic message
          status.textContent = json.errors
            ? json.errors.map(err => err.message).join(', ')
            : 'Oops! There was a problem submitting the form.';
        } else {
          status.textContent = 'Thanks for your message! We’ll be in touch soon.';
          form.reset();                                   // Clear inputs on success
        }
      } catch (err) {
        console.error('Fetch error:', err);
        status.textContent = 'Network error—please try again later.';
      }
    });
  });  