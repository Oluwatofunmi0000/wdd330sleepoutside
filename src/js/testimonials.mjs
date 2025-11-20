export default class Testimonials {
  async init() {
    const listEl = document.getElementById('testimonialList');
    if (!listEl) return;
    try {
      const response = await fetch('/json/testimonials.json');
      if (!response.ok) throw new Error('Failed to load testimonials');
      const data = await response.json();
      listEl.innerHTML = data.map(this.template).join('');
    } catch (err) {
      console.error('Testimonials error:', err);
      listEl.innerHTML = '<p class="testimonial-error">Unable to load testimonials.</p>';
    }
  }

  template(t) {
    return `<div class="testimonial-card">\n      <p class="testimonial-text">\"${t.text}\"</p>\n      <p class="testimonial-author">— ${t.name}</p>\n    </div>`;
  }
}
