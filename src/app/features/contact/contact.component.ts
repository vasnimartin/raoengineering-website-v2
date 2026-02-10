import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-content">
        <h1>Contact Us</h1>
        <p class="subtitle">
          Get in touch with our team to discuss your project requirements.
        </p>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- FORM -->
          <div class="form-column">
            <h2>Send Us a Message</h2>
            <form class="contact-form" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" [(ngModel)]="formData.name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" [(ngModel)]="formData.email" required>
              </div>
              <div class="form-group">
                <label for="phone">Phone (Optional)</label>
                <input type="tel" id="phone" name="phone" [(ngModel)]="formData.phone">
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" [(ngModel)]="formData.message" required></textarea>
              </div>
              <button type="submit" class="submit-button">Send Message</button>
            </form>
          </div>

          <!-- INFO -->
          <div class="info-column">
            <h2>Office Location</h2>
            <div class="info-block">
              <h3>Address</h3>
              <p>
                Ramirez Consulting Engineers, PLLC<br>
                San Antonio, Texas
              </p>
            </div>
            <div class="info-block">
              <h3>Phone</h3>
              <p>(210) 555-0100</p>
            </div>
            <div class="info-block">
              <h3>Email</h3>
              <p>info&#64;ramirezce.com</p>
            </div>
            <div class="info-block">
              <h3>Office Hours</h3>
              <p>
                Monday – Friday<br>
                8:00 AM – 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 45vh;
      min-height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(180deg, #2d3748 0%, #1f2937 100%);
      color: #ffffff;
      text-align: center;
      padding: 0 2rem;
    }

    .hero-content {
      max-width: 700px;
    }

    .hero h1 {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      margin: 0 0 1rem 0;
      letter-spacing: -0.02em;
      line-height: 1.15;
    }

    .hero .subtitle {
      font-size: clamp(1rem, 1.8vw, 1.15rem);
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      margin: 0;
      font-weight: 400;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .contact-section {
      padding: 4rem 0 5rem 0;
      background: #ffffff;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 4rem;
    }

    .form-column h2,
    .info-column h2 {
      font-size: 1.35rem;
      font-weight: 600;
      color: #111827;
      margin: 0 0 1.5rem 0;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      font-size: 0.9rem;
      font-weight: 500;
      color: #374151;
    }

    .form-group input,
    .form-group textarea {
      padding: 0.75rem 1rem;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      font-size: 1rem;
      font-family: inherit;
      transition: border-color 0.2s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #2d3748;
    }

    .form-group textarea {
      resize: vertical;
    }

    .submit-button {
      margin-top: 0.5rem;
      padding: 0.875rem 2rem;
      background: #2d3748;
      color: #ffffff;
      border: none;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s ease, transform 0.2s ease;
    }

    .submit-button:hover {
      background: #1f2937;
      transform: translateY(-2px);
    }

    .info-column {
      padding-top: 0.25rem;
    }

    .info-block {
      margin-bottom: 1.5rem;
    }

    .info-block:last-child {
      margin-bottom: 0;
    }

    .info-block h3 {
      font-size: 0.8rem;
      font-weight: 600;
      color: #6b7280;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin: 0 0 0.5rem 0;
    }

    .info-block p {
      font-size: 1rem;
      color: #111827;
      line-height: 1.6;
      margin: 0;
    }

    @media (max-width: 768px) {
      .hero {
        height: 35vh;
        min-height: 250px;
      }

      .contact-section {
        padding: 2.5rem 0 3rem 0;
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .info-column {
        order: -1;
      }

      .container {
        padding: 0 1.25rem;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // TODO: Implement actual form submission
    alert('Thank you for your message. We will be in touch shortly.');
    this.formData = { name: '', email: '', phone: '', message: '' };
  }
}
