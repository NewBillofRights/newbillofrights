// Progressive enhancement for the two intake forms. Without JS the forms
// POST natively to /api/submit and the function answers with a 303 redirect;
// with JS we submit via fetch and show the success message in place.
document.querySelectorAll<HTMLFormElement>('form[action="/api/submit"]').forEach((form) => {
  const startedAt = form.querySelector<HTMLInputElement>('input[name="startedAt"]');
  if (startedAt) startedAt.value = String(Date.now());

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (button) button.disabled = true;
    try {
      const body = Object.fromEntries(new FormData(form).entries());
      delete body.redirect; // JSON path — signal we want a JSON response
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      const successId = form.dataset.success;
      const success = successId ? document.getElementById(successId) : null;
      if (success) success.hidden = false;
      form.hidden = true;
    } catch {
      // fetch path failed — fall back to the native POST/redirect flow
      if (button) button.disabled = false;
      form.submit();
    }
  });
});

// Native-fallback success state: /page?submitted=<id> reveals the message.
const submitted = new URLSearchParams(location.search).get('submitted');
if (submitted && submitted !== 'error') {
  const success =
    document.getElementById(`${submitted}-success`) ??
    document.querySelector<HTMLElement>('.form-success');
  if (success) {
    success.hidden = false;
    const form = document.querySelector<HTMLFormElement>('form[action="/api/submit"]');
    if (form) form.hidden = true;
  }
}
