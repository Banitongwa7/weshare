import React from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  return (
    <Layout title="Contact Us" description="Contact the WeShare team">
      <main style={{ maxWidth: 600, margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.07)' }}>
        <h1>Contact Us</h1>
        <p>
          Have questions, suggestions, or want to collaborate? Reach out to the WeShare team!
        </p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name
            <input type="text" name="name" required style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #ccc' }} />
          </label>
          <label>
            Email
            <input type="email" name="email" required style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #ccc' }} />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required style={{ width: '100%', padding: '0.5rem', borderRadius: 6, border: '1px solid #ccc' }} />
          </label>
          <button type="submit" style={{ background: '#6a82fb', color: '#fff', padding: '0.75rem 2rem', border: 'none', borderRadius: 6, fontWeight: 600, cursor: 'pointer' }}>
            Send Message
          </button>
        </form>
        <div style={{ marginTop: '2rem', fontSize: '0.95rem', color: '#555' }}>
          Or email us directly at <a href="mailto:contact@weshare.com">contact@weshare.com</a>
        </div>
      </main>
    </Layout>
  );
}